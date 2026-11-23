import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { services, allServiceLinks } from "@/lib/services";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service not found" };

  return {
    title: service.title,
    description: service.intro,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  const others = allServiceLinks.filter(
    (l) => l.href !== `/services/${service.slug}`,
  );

  return (
    <>
      <Header />
      <main className="bg-brand-cream">
        <div className="mx-auto max-w-2xl px-6 py-16 md:px-8">
          <FadeIn>
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-medium tracking-[0.15em] text-brand-orange">
                SERVICE
              </p>
              <h1 className="font-serif text-3xl font-semibold text-brand-black md:text-4xl">
                {service.title}
              </h1>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-brand-black/60">
                {service.intro}
              </p>
            </div>
          </FadeIn>

          <div className="mb-12">
            <FadeIn delay={80}>
              <h2 className="mb-5 text-center font-serif text-xl font-semibold text-brand-black">
                What&apos;s included
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {service.items.map((item, i) => (
                <FadeIn key={item} delay={100 + i * 50}>
                  <div className="flex h-full items-start gap-3 rounded-xl bg-white p-5">
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0 text-brand-orange"
                      aria-hidden="true"
                    />
                    <p className="text-sm font-medium text-brand-black">{item}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn delay={200}>
            <div className="mb-12 text-center">
              <Link
                href="/contact"
                className="inline-block rounded-sm bg-brand-black px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-black/80"
              >
                Discuss your project
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={240}>
            <div className="border-t border-black/10 pt-8">
              <h2 className="mb-4 text-center text-xs font-semibold uppercase tracking-wide text-black/40">
                Our other services
              </h2>
              <ul className="space-y-2 text-center">
                {others.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-brand-black hover:text-brand-orange"
                    >
                      {l.title} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}