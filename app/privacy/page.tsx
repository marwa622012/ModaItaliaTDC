import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Moda Italia TDC collects and uses information submitted through its website contact form and WhatsApp link.",
  alternates: { canonical: "/privacy" },
};

const EMAIL = "heba.modaitalia@yahoo.com";

const sections = [
  {
    title: "Who we are",
    body: (
      <p>
        This website is operated by Moda Italia TDC, a fashion and textile agency based in Obour
        City, Cairo, Egypt. You can reach us at{" "}
        <a href={`mailto:${EMAIL}`} className="text-brand-orange hover:underline">
          {EMAIL}
        </a>
        .
      </p>
    ),
  },
  {
    title: "Information we collect",
    body: (
      <>
        <p>
          When you use our contact form, we collect the details you choose to submit: your name,
          email address, company (optional), the topic of your enquiry and your message.
        </p>
        <p>
          If you contact us on WhatsApp, we receive the information you share in that chat. We do
          not collect any other personal data through this website.
        </p>
      </>
    ),
  },
  {
    title: "How we use it",
    body: (
      <p>
        We use this information only to reply to your enquiry and to manage any business
        relationship that follows. We do not sell your information or use it for unrelated
        marketing.
      </p>
    ),
  },
  {
    title: "How your message reaches us",
    body: (
      <p>
        Contact form messages are delivered to our business email through an email delivery
        service. We keep your message only as long as needed to respond and to manage the
        relationship, then delete it.
      </p>
    ),
  },
  {
    title: "Browser storage",
    body: (
      <p>
        The site may save a small preference in your browser (for example, that you closed an
        announcement banner). It contains no personal information and you can clear it at any time
        in your browser settings.
      </p>
    ),
  },
  {
    title: "Hosting and third parties",
    body: (
      <p>
        The website is hosted on Vercel, which may process technical data such as IP address and
        browser type to serve and secure the site. Our WhatsApp button opens WhatsApp, and the
        pages we link to (such as exhibition organizers) have their own privacy policies.
      </p>
    ),
  },
  {
    title: "Your rights",
    body: (
      <p>
        Depending on where you live (for example, under the EU General Data Protection
        Regulation), you may ask us to access, correct or delete the personal data we hold about
        you. Email us at{" "}
        <a href={`mailto:${EMAIL}`} className="text-brand-orange hover:underline">
          {EMAIL}
        </a>{" "}
        and we will respond.
      </p>
    ),
  },
  {
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. The date below shows when it was last
        revised.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="mx-auto max-w-2xl px-6 py-16 md:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-orange">
            Legal
          </p>
          <h1 className="mb-2 font-serif text-4xl font-semibold text-brand-black">
            Privacy Policy
          </h1>
          <p className="mb-10 text-xs text-black/40">Last updated: 24 November 2026</p>

          <div className="space-y-8">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="mb-2 font-serif text-xl font-semibold text-brand-black">
                  {s.title}
                </h2>
                <div className="space-y-3 text-[15px] leading-relaxed text-black/70">
                  {s.body}
                </div>
              </section>
            ))}
          </div>

          <p className="mt-12 text-sm text-black/50">
            Questions? <Link href="/contact" className="text-brand-orange hover:underline">Contact us</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}