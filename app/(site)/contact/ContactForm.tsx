"use client";

import emailjs from "@emailjs/browser";
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
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMessage("Email service is not configured. Please try again later.");
      return;
    }

    try {
      const result = await emailjs.sendForm(serviceId, templateId, form, {
        publicKey,
      });
      console.log(result.text);

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Failed to send message.");
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
