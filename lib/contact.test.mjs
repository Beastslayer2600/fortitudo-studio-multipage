import { test } from "node:test";
import assert from "node:assert/strict";
import { buildNotification, clientIp, createRateLimiter, parseEnquiry } from "./contact.ts";

const valid = { name: "Thandi", email: "thandi@example.com", message: "Hello" };

test("accepts a valid enquiry and defaults the source", () => {
  const r = parseEnquiry(valid);
  assert.equal(r.kind, "ok");
  assert.equal(r.enquiry.source, "Contact page");
  assert.equal(r.enquiry.phone, "");
});

test("rejects missing and malformed fields with per-field errors", () => {
  const r = parseEnquiry({ name: "", email: "nope", message: "", phone: "abc" });
  assert.equal(r.kind, "invalid");
  assert.deepEqual(Object.keys(r.errors).sort(), ["email", "message", "name", "phone"]);
});

test("rejects non-object bodies", () => {
  for (const body of [null, "x", [], 42]) assert.equal(parseEnquiry(body).kind, "invalid");
});

test("honeypot marks the submission as spam", () => {
  assert.equal(parseEnquiry({ ...valid, company: "ACME" }).kind, "spam");
});

test("unknown sources fall back to the contact page", () => {
  const r = parseEnquiry({ ...valid, source: "<evil>" });
  assert.equal(r.enquiry.source, "Contact page");
});

test("strips line breaks from fields that reach the subject line", () => {
  const r = parseEnquiry({ ...valid, name: "A\r\nBcc: x@y.z" });
  const { subject } = buildNotification(r.enquiry);
  assert.ok(!/[\r\n]/.test(subject));
});

test("script tags arrive as inert plain text", () => {
  const r = parseEnquiry({ ...valid, message: "<script>alert(1)</script>" });
  const n = buildNotification(r.enquiry);
  assert.ok(n.text.includes("<script>alert(1)</script>"));
  assert.equal(Object.keys(n).sort().join(), "subject,text"); // no html body is ever built
});

test("rate limiter allows five per window and blocks the sixth", () => {
  const allow = createRateLimiter(5, 60_000);
  const results = Array.from({ length: 6 }, () => allow("1.2.3.4", 0));
  assert.deepEqual(results, [true, true, true, true, true, false]);
  assert.equal(allow("5.6.7.8", 0), true, "other IPs are unaffected");
  assert.equal(allow("1.2.3.4", 60_000), true, "window resets");
});

test("clientIp reads the first forwarded address", () => {
  assert.equal(clientIp(new Headers({ "x-forwarded-for": "9.9.9.9, 10.0.0.1" })), "9.9.9.9");
  assert.equal(clientIp(new Headers()), "unknown");
});
