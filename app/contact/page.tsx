import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <main className="py-16 sm:py-24">
      <div className="container max-w-5xl">
        <h1 className="font-serif text-3xl" style={{ color: "var(--green)" }}>
          Contact
        </h1>
        <p className="mt-3 text-neutral-700 max-w-2xl">
          Reach out to book a consultation or ask a question. I will get back to you as soon as possible.
        </p>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--gold)" }}>
                Contact Details
              </p>
              <div className="mt-4 space-y-2 text-neutral-700">
                <p className="text-base font-medium text-[var(--ink)]">Mr. Gert Fourie</p>
                <p>Financial Advisor - Liberty Group Limited (FSP 2409)</p>
              </div>
            </div>
            <div className="space-y-2 text-neutral-700">
              <p>
                <span className="font-medium text-[var(--ink)]">Phone:</span>{" "}
                <a href="tel:0722436950" className="hover:underline">
                  0722436950
                </a>
              </p>
              <p>
                <span className="font-medium text-[var(--ink)]">Email:</span>{" "}
                <a href="mailto:gert.fourie@liblink.co.za" className="hover:underline">
                  gert.fourie@liblink.co.za
                </a>
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--gold)" }}>
                Social
              </p>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li>
                  <span className="font-medium text-[var(--ink)]">Instagram:</span>{" "}
                  <a href="https://www.instagram.com/gert_wealth" className="hover:underline">
                    @gert_wealth
                  </a>
                </li>
                <li>
                  <span className="font-medium text-[var(--ink)]">LinkedIn:</span>{" "}
                  <a href="https://www.linkedin.com/in/gert-fourie-wealth" className="hover:underline">
                    Gert Fourie
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="surface p-6 sm:p-8">
            <h2 className="font-serif text-2xl" style={{ color: "var(--green)" }}>
              Send a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
