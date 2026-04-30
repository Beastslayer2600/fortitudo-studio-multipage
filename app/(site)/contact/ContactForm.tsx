"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.current) {
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    emailjs
      .sendForm(
        "service_j5nb1ym",
        "template_5lecm3j",
        form.current,
        "N7BQYsyCGc0luSO4R"
      )
      .then((result) => {
        console.log("SUCCESS!", result.text);
        setStatus("success");
        form.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
        setErrorMsg(error.text || "Failed to send message. Please try again.");
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="mb-8 font-serif text-3xl text-[var(--gold)]">Send a Message</h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full rounded-xl border border-[var(--gold)]/30 bg-[#0B0D10] px-4 py-3 focus:border-[var(--gold)] focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full rounded-xl border border-[var(--gold)]/30 bg-[#0B0D10] px-4 py-3 focus:border-[var(--gold)] focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            className="w-full rounded-xl border border-[var(--gold)]/30 bg-[#0B0D10] px-4 py-3 focus:border-[var(--gold)] focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full resize-y rounded-xl border border-[var(--gold)]/30 bg-[#0B0D10] px-4 py-3 focus:border-[var(--gold)] focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-xl bg-[var(--gold)] py-4 font-medium text-black transition-all hover:bg-white disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-center text-green-400">Message sent successfully!</p>
        )}

        {status === "error" && (
          <p className="text-center text-red-400">{errorMsg}</p>
        )}
      </form>
    </div>
  );
}
