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
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setStatus("error");
        setErrorMessage(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name" className="text-sm font-medium text-[var(--ink)]">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-2 w-full rounded-xl border border-[var(--gold)]/40 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-[var(--ink)]">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 w-full rounded-xl border border-[var(--gold)]/40 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-[var(--ink)]">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-2 w-full rounded-xl border border-[var(--gold)]/40 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium text-[var(--ink)]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-2 w-full rounded-xl border border-[var(--gold)]/40 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>
      {status === "success" && (
        <p className="mt-4 text-sm text-[var(--green)]">Thanks, your message has been sent.</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-red-700">{errorMessage}</p>
      )}
    </div>
  );
}
