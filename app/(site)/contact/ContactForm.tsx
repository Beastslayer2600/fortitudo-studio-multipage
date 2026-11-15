"use client";

import { Field, FormMessage, Honeypot, errorProps, inputClass } from "@/components/contact/fields";
import { useEnquiry } from "@/components/contact/useEnquiry";

export default function ContactForm() {
  const { status, message, fieldErrors, messageRef, onSubmit } = useEnquiry("Contact page");

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="mb-8 font-serif text-3xl text-[var(--gold)]">Send a Message</h2>

      <form onSubmit={onSubmit} className="relative space-y-6">
        <Field id="name" label="Full name" error={fieldErrors.name}>
          <input
            id="name"
            type="text"
            name="name"
            required
            autoComplete="name"
            maxLength={100}
            className={inputClass}
            {...errorProps("name", fieldErrors.name)}
          />
        </Field>

        <Field id="email" label="Email address" error={fieldErrors.email}>
          <input
            id="email"
            type="email"
            name="email"
            required
            autoComplete="email"
            maxLength={254}
            className={inputClass}
            {...errorProps("email", fieldErrors.email)}
          />
        </Field>

        <Field id="phone" label="Phone number" optional error={fieldErrors.phone}>
          <input
            id="phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            maxLength={30}
            className={inputClass}
            {...errorProps("phone", fieldErrors.phone)}
          />
        </Field>

        <Field id="message" label="Message" error={fieldErrors.message}>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            maxLength={5000}
            className={`${inputClass} resize-y`}
            {...errorProps("message", fieldErrors.message)}
          />
        </Field>

        <Honeypot />

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-xl bg-[var(--gold)] py-4 font-medium text-black transition-all hover:bg-white disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        <FormMessage message={message} messageRef={messageRef} />
      </form>
    </div>
  );
}
