import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <main className="bg-[#0B0D10] text-[var(--cream)] pt-24 pb-16 sm:pt-28 sm:pb-24">
      <div className="container max-w-5xl">
        <h1 className="font-serif text-3xl text-[var(--cream)]">
          Contact
        </h1>
        <p className="mt-3 text-white/70 max-w-2xl">
          Reach out to book a consultation or ask a question. I will get back to you as soon as possible.
        </p>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
                Contact Details
              </p>
              <div className="mt-4 space-y-2 text-white/70">
                <p className="text-base font-medium text-[var(--cream)]">Mr. Gert Fourie</p>
                <p>Financial Advisor - Liberty Group Limited (FSP 2409)</p>
              </div>
            </div>
            <div className="space-y-2 text-white/70">
              <p>
                <span className="font-medium text-[var(--cream)]">Phone:</span>{" "}
                <a href="tel:0722436950" className="hover:underline">
                  0722436950
                </a>
              </p>
              <p>
                <span className="font-medium text-[var(--cream)]">Email:</span>{" "}
                <a href="mailto:gert.fourie@liblink.co.za" className="hover:underline">
                  gert.fourie@liblink.co.za
                </a>
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
                Social
              </p>
              <ul className="mt-4 space-y-2 text-white/70">
                <li>
                  <span className="font-medium text-[var(--cream)]">Instagram:</span>{" "}
                  <a href="https://www.instagram.com/gert_wealth" className="hover:underline">
                    @gert_wealth
                  </a>
                </li>
                <li>
                  <span className="font-medium text-[var(--cream)]">LinkedIn:</span>{" "}
                  <a href="https://www.linkedin.com/in/gert-fourie-wealth" className="hover:underline">
                    Gert Fourie
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="surface p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[var(--gold)]">
              Send a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
