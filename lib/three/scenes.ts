/**
 * Three scene builders — framework-agnostic.
 * Tuned for iOS Safari: capped DPR, no antialias on mobile, fewer draw objects,
 * MeshBasicMaterial on mobile (avoids some LineSegments / lighting bugs).
 */

type THREE_NS = typeof import('three');

export type SceneVariant = 'structure' | 'compare' | 'plan';

export interface SceneHandle {
  update: (t: number) => void;
  set?: (a: number, b: number) => void;
  dispose: () => void;
}

function isMobileViewport() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches;
}

function makeRenderer(THREE: THREE_NS, canvas: HTMLCanvasElement) {
  const mobile = isMobileViewport();
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !mobile,
    alpha: true,
    // 'default' is safer on Safari than low-power (which can force a software path)
    powerPreference: 'default',
    failIfMajorPerformanceCaveat: false,
    preserveDrawingBuffer: false,
    stencil: false,
    depth: true,
  });
  renderer.setClearAlpha(0);
  if ('outputColorSpace' in renderer) {
    renderer.outputColorSpace = THREE.SRGBColorSpace;
  }
  return renderer;
}

function makeSizer(canvas: HTMLCanvasElement, renderer: any, camera: any) {
  return () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h) return;

    // Research: phones report DPR 2–3; full DPR = 4–9× fill-rate. Cap hard.
    const mobile = isMobileViewport();
    const pr = Math.min(window.devicePixelRatio || 1, mobile ? 1 : 1.75);

    const bw = Math.floor(w * pr);
    const bh = Math.floor(h * pr);
    if (canvas.width !== bw || canvas.height !== bh) {
      renderer.setPixelRatio(pr);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
  };
}

function makeBin() {
  const bin: any[] = [];
  return {
    add<T>(o: T): T {
      bin.push(o);
      return o;
    },
    flush() {
      bin.forEach((o) => o?.dispose?.());
      bin.length = 0;
    },
  };
}

function buildStructure(THREE: THREE_NS, canvas: HTMLCanvasElement): SceneHandle {
  const bin = makeBin();
  const renderer = makeRenderer(THREE, canvas);
  const mobile = isMobileViewport();

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x061710, 18, 46);
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 120);
  const g = new THREE.Group();
  scene.add(g);

  const FLOORS = mobile ? 12 : 22;
  const H = 0.62;
  const plateGeo = bin.add(new THREE.BoxGeometry(3.4, 0.05, 3.4));
  const plateEdge = bin.add(new THREE.EdgesGeometry(plateGeo));

  for (let i = 0; i < FLOORS; i++) {
    const wide = i % 4 === 0;
    // MeshBasic on mobile: fewer lights, fewer Safari lighting quirks
    const plateMat = mobile
      ? bin.add(
          new THREE.MeshBasicMaterial({
            color: 0x2f6a52,
            transparent: true,
            opacity: wide ? 0.32 : 0.16,
            depthWrite: false,
          }),
        )
      : bin.add(
          new THREE.MeshStandardMaterial({
            color: 0x2f6a52,
            roughness: 0.25,
            metalness: 0.4,
            transparent: true,
            opacity: wide ? 0.26 : 0.14,
          }),
        );

    const plate = new THREE.Mesh(plateGeo, plateMat);
    const edge = new THREE.LineSegments(
      plateEdge,
      bin.add(
        new THREE.LineBasicMaterial({
          color: wide ? 0xe6cf9c : 0xc8a45c,
          transparent: true,
          opacity: wide ? 0.8 : 0.36,
        }),
      ),
    );
    const floor = new THREE.Group();
    floor.add(plate, edge);
    floor.position.y = i * H;
    const s = 1 - i * 0.016;
    floor.scale.set(s, 1, s);
    floor.rotation.y = i * 0.018;
    g.add(floor);
  }

  const colMat = mobile
    ? bin.add(new THREE.MeshBasicMaterial({ color: 0xc8a45c }))
    : bin.add(new THREE.MeshStandardMaterial({ color: 0xc8a45c, roughness: 0.35, metalness: 0.8 }));
  const colGeo = bin.add(new THREE.CylinderGeometry(0.035, 0.035, FLOORS * H, mobile ? 6 : 8));
  (
    [
      [-1.5, -1.5],
      [1.5, -1.5],
      [-1.5, 1.5],
      [1.5, 1.5],
    ] as const
  ).forEach(([x, z]) => {
    const col = new THREE.Mesh(colGeo, colMat);
    col.position.set(x, (FLOORS * H) / 2, z);
    g.add(col);
  });

  if (!mobile) {
    const grid = new THREE.GridHelper(80, 40, 0x1b4433, 0x102b21);
    grid.position.y = -0.9;
    (grid.material as any).transparent = true;
    (grid.material as any).opacity = 0.3;
    bin.add(grid.geometry);
    scene.add(grid);
  }

  g.position.y = -5.2;

  if (mobile) {
    scene.add(new THREE.AmbientLight(0xb8d4c4, 0.85));
  } else {
    scene.add(new THREE.HemisphereLight(0x9fd7bc, 0x04120c, 0.5));
    const key = new THREE.DirectionalLight(0xfff0d2, 1.0);
    key.position.set(8, 14, 8);
    const rim = new THREE.DirectionalLight(0xc8a45c, 0.9);
    rim.position.set(-9, 5, -7);
    scene.add(key, rim);
  }

  const fit = makeSizer(canvas, renderer, camera);
  const pointer = { x: 0, y: 0 };
  const eased = { x: 0, y: 0 };
  const onMove = (e: PointerEvent) => {
    pointer.x = (e.clientX / window.innerWidth - 0.5) * 2;
    pointer.y = (e.clientY / window.innerHeight - 0.5) * 2;
  };
  window.addEventListener('pointermove', onMove, { passive: true });

  return {
    update(t) {
      fit();
      eased.x += (pointer.x - eased.x) * 0.04;
      eased.y += (pointer.y - eased.y) * 0.04;
      g.rotation.y = t * 0.055;
      const wide = window.innerWidth >= 900;
      g.position.x = wide ? 3.4 : 0;
      camera.position.set(eased.x * 1.4, 2.4 - eased.y * 0.7, wide ? 15 : 19);
      camera.lookAt(g.position.x, 1.4, 0);
      renderer.render(scene, camera);
    },
    dispose() {
      window.removeEventListener('pointermove', onMove);
      bin.flush();
      renderer.dispose();
    },
  };
}

function buildCompare(THREE: THREE_NS, canvas: HTMLCanvasElement): SceneHandle {
  const bin = makeBin();
  const renderer = makeRenderer(THREE, canvas);
  const mobile = isMobileViewport();

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
  const g = new THREE.Group();
  scene.add(g);

  const N = mobile ? 16 : 30;
  const BLK = 0.24;
  const geo = bin.add(new THREE.BoxGeometry(1.5, BLK * 0.86, 1.5));
  const edge = bin.add(new THREE.EdgesGeometry(geo));

  const column = (x: number, color: number, edgeColor: number) => {
    const col = new THREE.Group();
    const blocks: any[] = [];
    for (let i = 0; i < N; i++) {
      const b = new THREE.Group();
      const faceMat = mobile
        ? bin.add(new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.45, depthWrite: false }))
        : bin.add(
            new THREE.MeshStandardMaterial({
              color,
              roughness: 0.4,
              metalness: 0.3,
              transparent: true,
              opacity: 0.4,
            }),
          );
      b.add(new THREE.Mesh(geo, faceMat));
      b.add(
        new THREE.LineSegments(
          edge,
          bin.add(new THREE.LineBasicMaterial({ color: edgeColor, transparent: true, opacity: 0.55 })),
        ),
      );
      b.position.y = i * BLK;
      col.add(b);
      blocks.push(b);
    }
    col.position.x = x;
    g.add(col);
    return blocks;
  };

  const cash = column(-1.35, 0x50675c, 0x7d8f85);
  const grow = column(1.35, 0x2f6a52, 0xc8a45c);

  const floor = new THREE.Mesh(
    bin.add(new THREE.BoxGeometry(6.2, 0.06, 2.6)),
    bin.add(
      mobile
        ? new THREE.MeshBasicMaterial({ color: 0x0d2a1f })
        : new THREE.MeshStandardMaterial({ color: 0x0d2a1f, roughness: 0.6, metalness: 0.3 }),
    ),
  );
  floor.position.y = -0.16;
  g.add(floor);
  g.position.y = -1.6;

  if (mobile) {
    scene.add(new THREE.AmbientLight(0xb8d4c4, 0.9));
  } else {
    scene.add(new THREE.HemisphereLight(0x9fd7bc, 0x04120c, 0.55));
    const key = new THREE.DirectionalLight(0xfff0d2, 1.0);
    key.position.set(5, 10, 8);
    const rim = new THREE.DirectionalLight(0xc8a45c, 0.7);
    rim.position.set(-7, 4, -5);
    scene.add(key, rim);
  }

  const want = { cash: 1, grow: 1 };
  const have = { cash: 1, grow: 1 };
  const fit = makeSizer(canvas, renderer, camera);

  const apply = (blocks: any[], frac: number, drift: number) => {
    const lit = frac * N;
    for (let i = 0; i < blocks.length; i++) {
      const local = Math.min(1, Math.max(0, lit - i));
      const e = 1 - Math.pow(1 - local, 3);
      blocks[i].visible = local > 0.003;
      blocks[i].position.y = i * BLK + (1 - e) * drift;
      blocks[i].children[0].material.opacity = 0.45 * e;
      blocks[i].children[1].material.opacity = 0.55 * e;
    }
  };

  return {
    set(cashFrac, growFrac) {
      want.cash = cashFrac;
      want.grow = growFrac;
    },
    update(t) {
      fit();
      have.cash += (want.cash - have.cash) * 0.07;
      have.grow += (want.grow - have.grow) * 0.07;
      apply(cash, have.cash, -0.9);
      apply(grow, have.grow, 1.1);
      g.rotation.y = -0.5 + Math.sin(t * 0.16) * 0.16;
      camera.position.set(0, 3.2, 10.5);
      camera.lookAt(0, 1.4, 0);
      renderer.render(scene, camera);
    },
    dispose() {
      bin.flush();
      renderer.dispose();
    },
  };
}

function buildPlan(THREE: THREE_NS, canvas: HTMLCanvasElement): SceneHandle {
  const bin = makeBin();
  const renderer = makeRenderer(THREE, canvas);
  const mobile = isMobileViewport();

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
  const g = new THREE.Group();
  scene.add(g);

  const MAX = mobile ? 24 : 43;
  const STEP = 0.2;
  const TWIST = 0.05;
  const slabGeo = bin.add(new THREE.BoxGeometry(2.4, 0.1, 2.4));
  const edgeGeo = bin.add(new THREE.EdgesGeometry(slabGeo));
  const items: any[] = [];

  for (let i = 0; i < MAX; i++) {
    const grp = new THREE.Group();
    const mile = i % 5 === 4;
    const face = new THREE.Mesh(
      slabGeo,
      bin.add(
        mobile
          ? new THREE.MeshBasicMaterial({
              color: mile ? 0x3d8465 : 0x2f6a52,
              transparent: true,
              opacity: 0,
              depthWrite: false,
            })
          : new THREE.MeshStandardMaterial({
              color: mile ? 0x3d8465 : 0x2f6a52,
              roughness: 0.3,
              metalness: 0.3,
              transparent: true,
              opacity: 0,
            }),
      ),
    );
    const ed = new THREE.LineSegments(
      edgeGeo,
      bin.add(
        new THREE.LineBasicMaterial({
          color: mile ? 0xe6cf9c : 0xc8a45c,
          transparent: true,
          opacity: 0,
        }),
      ),
    );
    grp.add(face, ed);
    grp.rotation.y = i * TWIST;
    g.add(grp);
    items.push({ g: grp, face, edge: ed, mile, i });
  }

  const base = new THREE.Mesh(
    bin.add(new THREE.CylinderGeometry(2.5, 2.5, 0.07, mobile ? 24 : 48)),
    bin.add(
      mobile
        ? new THREE.MeshBasicMaterial({ color: 0x0d2a1f })
        : new THREE.MeshStandardMaterial({ color: 0x0d2a1f, roughness: 0.6, metalness: 0.3 }),
    ),
  );
  base.position.y = -0.1;
  g.add(base);
  g.position.y = -2.6;

  if (mobile) {
    scene.add(new THREE.AmbientLight(0xb8d4c4, 0.9));
  } else {
    scene.add(new THREE.HemisphereLight(0x9fd7bc, 0x04120c, 0.5));
    const key = new THREE.DirectionalLight(0xfff0d2, 1.0);
    key.position.set(6, 11, 7);
    const rim = new THREE.DirectionalLight(0xc8a45c, 0.8);
    rim.position.set(-8, 4, -6);
    scene.add(key, rim);
  }

  const want = { n: 37, s: 1 };
  let shown = 0;
  let foot = 1;
  const fit = makeSizer(canvas, renderer, camera);

  return {
    set(years, scale) {
      want.n = Math.min(years, MAX);
      want.s = scale;
    },
    update(t) {
      fit();
      shown += (want.n - shown) * 0.06;
      foot += (want.s - foot) * 0.06;
      for (const s of items) {
        const local = Math.min(1, Math.max(0, shown - s.i));
        const e = 1 - Math.pow(1 - local, 3);
        s.g.visible = local > 0.002;
        s.g.position.y = s.i * STEP + (1 - e) * 1.8;
        s.g.rotation.y = s.i * TWIST + (1 - e) * 0.8;
        s.g.scale.set(foot, 1, foot);
        s.face.material.opacity = (s.mile ? 0.5 : 0.32) * e;
        s.edge.material.opacity = (s.mile ? 0.85 : 0.5) * e;
      }
      base.scale.set(foot, 1, foot);
      g.rotation.y = t * 0.07;
      const top = shown * STEP;
      camera.position.set(0, 1.3 + top * 0.45, 12);
      camera.lookAt(0, -2.6 + top * 0.55, 0);
      renderer.render(scene, camera);
    },
    dispose() {
      bin.flush();
      renderer.dispose();
    },
  };
}

const BUILDERS = {
  structure: buildStructure,
  compare: buildCompare,
  plan: buildPlan,
};

export function buildScene(
  THREE: THREE_NS,
  variant: SceneVariant,
  canvas: HTMLCanvasElement,
): SceneHandle {
  return BUILDERS[variant](THREE, canvas);
}
