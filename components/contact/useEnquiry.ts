"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { ContactResponse, EnquirySource, FieldErrors } from "@/lib/contact";

type Status = "idle" | "sending" | "error";

/**
 * Posts a form to /api/contact and sends the visitor to /thank-you on success.
 * The returned `messageRef` is focused when an error appears so screen readers
 * and keyboard users land on it.
 */
export function useEnquiry(source: EnquirySource) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const messageRef = useRef<HTMLParagraphElement>(null);

  const fail = (text: string, fields: FieldErrors = {}) => {
    setStatus("error");
    setMessage(text);
    setFieldErrors(fields);
    requestAnimationFrame(() => messageRef.current?.focus());
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(event.currentTarget));
    setStatus("sending");
    setMessage("");
    setFieldErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, source }),
      });
      const data = (await res.json().catch(() => null)) as ContactResponse | null;
      if (res.ok && data?.ok) {
        router.push("/thank-you");
        return;
      }
      const err = data && "message" in data ? data : null;
      fail(err?.message ?? "Your message could not be sent. Please try again.", err?.fields);
    } catch {
      fail("No connection. Please check your internet and try again, or use WhatsApp.");
    }
  };

  return { status, message, fieldErrors, messageRef, onSubmit };
}
