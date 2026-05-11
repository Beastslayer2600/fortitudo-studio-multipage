"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const next: Partial<typeof form> = {};
    if (!form.name.trim())  next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Please enter a valid email address.";
    if (!form.message.trim()) next.message = "Message is required.";
    return next;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fieldErrors = validate();
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-4 rounded-2xl border border-[rgba(201,168,76,0.2)] bg-[rgba(11,15,30,0.6)] p-10 text-center">
        <CheckCircle size={40} className="text-[#C9A84C]" strokeWidth={1.4} />
        <h3 className="font-heading text-2xl text-[#EAE4D6]">Message received</h3>
        <p className="text-sm text-[rgba(234,228,214,0.65)]">
          Thank you. I will get back to you within 24–48 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn btn-ghost mt-2 px-6 py-2.5 text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="mb-1.5 block text-xs tracking-[0.1em] uppercase text-[rgba(234,228,214,0.55)]">
          Full Name <span className="text-[#C9A84C]">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Jane Smith"
          className={`w-full rounded-xl border bg-[rgba(7,9,15,0.7)] px-4 py-3 text-sm text-[#EAE4D6] placeholder-[rgba(234,228,214,0.25)] outline-none transition-colors focus:border-[#C9A84C] ${
            errors.name ? "border-red-500/60" : "border-[rgba(201,168,76,0.2)]"
          }`}
        />
        {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs tracking-[0.1em] uppercase text-[rgba(234,228,214,0.55)]">
          Email Address <span className="text-[#C9A84C]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          placeholder="jane@example.com"
          className={`w-full rounded-xl border bg-[rgba(7,9,15,0.7)] px-4 py-3 text-sm text-[#EAE4D6] placeholder-[rgba(234,228,214,0.25)] outline-none transition-colors focus:border-[#C9A84C] ${
            errors.email ? "border-red-500/60" : "border-[rgba(201,168,76,0.2)]"
          }`}
        />
        {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-xs tracking-[0.1em] uppercase text-[rgba(234,228,214,0.55)]">
          Phone Number <span className="text-[rgba(234,228,214,0.35)]">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="+27 00 000 0000"
          className="w-full rounded-xl border border-[rgba(201,168,76,0.2)] bg-[rgba(7,9,15,0.7)] px-4 py-3 text-sm text-[#EAE4D6] placeholder-[rgba(234,228,214,0.25)] outline-none transition-colors focus:border-[#C9A84C]"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs tracking-[0.1em] uppercase text-[rgba(234,228,214,0.55)]">
          Message <span className="text-[#C9A84C]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your situation and what you are hoping to achieve..."
          className={`w-full resize-y rounded-xl border bg-[rgba(7,9,15,0.7)] px-4 py-3 text-sm text-[#EAE4D6] placeholder-[rgba(234,228,214,0.25)] outline-none transition-colors focus:border-[#C9A84C] ${
            errors.message ? "border-red-500/60" : "border-[rgba(201,168,76,0.2)]"
          }`}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
      </div>

      {/* Global error */}
      {status === "error" && (
        <div className="flex items-center gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          <AlertCircle size={16} strokeWidth={1.8} className="shrink-0" />
          {errorMsg}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-primary w-full py-3.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send size={15} strokeWidth={2} />
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      <p className="text-center text-xs text-[rgba(234,228,214,0.3)]">
        Your details are kept confidential and never shared with third parties.
      </p>
    </form>
  );
}
