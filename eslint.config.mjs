import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  // eslint-config-next already registers the jsx-a11y plugin; turn on its
  // full recommended rule set rather than the handful Next enables.
  { files: ["**/*.{jsx,tsx}"], rules: jsxA11y.flatConfigs.recommended.rules },
  {
    rules: {
      // Apostrophes and quotes in copy render fine; escaping them all hurts readability.
      "react/no-unescaped-entities": "off",
      // Existing hydration-safe patterns (dates read after mount, focus handoff).
      // Warn so new code avoids it; refactor the four current uses separately.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
  // three.js is imported dynamically and typed loosely on purpose.
  { files: ["lib/three/**"], rules: { "@typescript-eslint/no-explicit-any": "warn" } },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "playwright-report/**", "test-results/**"]),
]);
