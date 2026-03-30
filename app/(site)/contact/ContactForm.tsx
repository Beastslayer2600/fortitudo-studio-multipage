"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Failed to send message.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage((err as Error).message || "Failed to send message.");
    }
  }

  return (
    <div>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name" className="text-sm font-medium text-white/80">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#0f1216] px-4 py-3 text-sm text-[var(--cream)] placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-white/80">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#0f1216] px-4 py-3 text-sm text-[var(--cream)] placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-white/80">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#0f1216] px-4 py-3 text-sm text-[var(--cream)] placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium text-white/80">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#0f1216] px-4 py-3 text-sm text-[var(--cream)] placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
          />
        </div>
        <button
          type="submit"
          className="inline-flex w-full sm:w-auto items-center justify-center border border-[var(--gold)] text-[var(--gold)] px-6 py-3 text-xs tracking-[0.18em] uppercase hover:bg-[var(--gold)] hover:text-[#0B0D10] transition-colors disabled:opacity-60"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>
      {status === "success" && (
        <p className="mt-4 text-sm text-[var(--gold)]">Thanks, your message has been sent.</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-red-400">{errorMessage}</p>
      )}
    </div>
  );
}
