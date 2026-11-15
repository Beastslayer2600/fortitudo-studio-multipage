import type { ReactNode } from "react";
import { HONEYPOT_FIELD } from "@/lib/contact";

export const inputClass =
  "w-full rounded-xl border border-[var(--gold)]/30 bg-[#0B0D10] px-4 py-3 focus:border-[var(--gold)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)] aria-[invalid=true]:border-red-400";

export function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm">
        {label}
        {optional && <span className="text-white/60"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

/** Props that wire an input to its error message. */
export function errorProps(id: string, error?: string) {
  return error ? { "aria-invalid": true, "aria-describedby": `${id}-error` } : {};
}

/** Hidden from people and assistive tech; bots that fill every field get dropped. */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label htmlFor={HONEYPOT_FIELD}>Company</label>
      <input id={HONEYPOT_FIELD} name={HONEYPOT_FIELD} type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

export function FormMessage({
  message,
  messageRef,
}: {
  message: string;
  messageRef: React.RefObject<HTMLParagraphElement | null>;
}) {
  return (
    <p ref={messageRef} role="alert" tabIndex={-1} className="text-center text-red-300 empty:hidden focus:outline-none">
      {message}
    </p>
  );
}
