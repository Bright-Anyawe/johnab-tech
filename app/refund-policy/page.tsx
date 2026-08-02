import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bullets, SectionHeading } from "@/components/legal/LegalBlocks";

export const metadata: Metadata = {
  title: "Refund Policy | JOHNAB Technologies Limited",
  description:
    "The Refund Policy for JOHNAB Technologies Limited services, JOHNAB Academy, and percentage-based engagements.",
};

const EFFECTIVE_DATE = "30th July, 2026";

const academyItems = [
  "Digital courses",
  "Training programs",
  "Mentorship",
  "Workshops",
  "Bootcamps",
  "Educational materials",
];

const serviceProjects = [
  "Website Development",
  "Mobile App Development",
  "Business Automation",
  "Graphic Design",
  "Video Editing",
  "Branding",
  "AI Solutions",
  "Digital Marketing",
  "Social Media Management",
];

const nonRefundablePayments = [
  "Deposits",
  "Milestone payments",
  "Partial payments",
  "Full payments",
];

const failureEligibility = [
  "Completion of the agreed work at no additional cost; or",
  "A refund of any unused balance relating to work that has not yet been performed.",
];

const refundExceptions = [
  "Client failure to provide required information",
  "Changes requested by the client",
  "Third-party service interruptions",
  "Force majeure or circumstances beyond our reasonable control",
];

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <header>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Legal</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">
            Refund Policy
          </h1>
          <p className="mt-4 text-sm text-muted">Effective Date: {EFFECTIVE_DATE}</p>
        </header>

        <p className="mt-8 text-base leading-8 text-slate-300">
          At JOHNAB Technologies Limited, we dedicate time, expertise, and resources to every project
          from the moment work begins. Please read this policy carefully before making any payment.
        </p>

        <SectionHeading>1. JOHNAB Academy</SectionHeading>
        <p className="mt-4 text-base leading-8 text-slate-300">Payments made for:</p>
        <Bullets items={academyItems} />
        <p className="mt-4 text-base leading-8 text-slate-300">
          are <strong className="font-bold text-white">strictly non-refundable</strong>. Because course
          access and learning materials are made available immediately after purchase, no refunds will
          be issued once payment has been completed.
        </p>

        <SectionHeading>2. Service Projects</SectionHeading>
        <p className="mt-4 text-base leading-8 text-slate-300">For services such as:</p>
        <Bullets items={serviceProjects} />

        <h3 className="mt-6 text-lg font-bold text-gold">Before Work Begins</h3>
        <p className="mt-3 text-base leading-8 text-slate-300">
          If payment has been made and JOHNAB Technologies Limited has not started any work, the client
          may request a cancellation. Any refundable amount will be determined after deducting any
          applicable administrative, consultation, or processing costs already incurred.
        </p>

        <h3 className="mt-6 text-lg font-bold text-gold">After Work Has Started</h3>
        <p className="mt-3 text-base leading-8 text-slate-300">
          Once work has commenced on a project, all payments made become non-refundable. This includes:
        </p>
        <Bullets items={nonRefundablePayments} />
        <p className="mt-4 text-base leading-8 text-slate-300">
          This policy applies because project resources, time, planning, and labor have already been
          committed.
        </p>

        <SectionHeading>3. Percentage-Based Services</SectionHeading>
        <p className="mt-4 text-base leading-8 text-slate-300">
          For services charged based on an agreed percentage (such as commission-based marketing,
          advertising management, automation, or similar engagements), all payments made are
          non-refundable once work has started.
        </p>

        <SectionHeading>4. Failure to Deliver</SectionHeading>
        <p className="mt-4 text-base leading-8 text-slate-300">
          If JOHNAB Technologies Limited is unable to begin or deliver the agreed service due solely to
          our fault, the client may be eligible for:
        </p>
        <Bullets items={failureEligibility} />
        <p className="mt-4 text-base leading-8 text-slate-300">
          Refunds will not apply where delays or non-delivery result from:
        </p>
        <Bullets items={refundExceptions} />

        <SectionHeading>5. No Chargebacks</SectionHeading>
        <p className="mt-4 text-base leading-8 text-slate-300">
          Clients agree not to initiate chargebacks or payment disputes for services already started or
          delivered. If there is a concern regarding a project, clients should contact JOHNAB
          Technologies Limited first so that we can work toward a fair resolution.
        </p>

        <SectionHeading>6. Contact</SectionHeading>
        <p className="mt-4 text-base leading-8 text-slate-300">
          For any questions regarding these Terms or our Refund Policy, please contact:
        </p>
        <div className="mt-4 rounded-2xl border border-white/10 bg-panel p-6">
          <p className="text-base font-black text-white">JOHNAB Technologies Limited</p>
          <ul className="mt-3 space-y-2 text-base text-slate-300">
            <li>
              Email:{" "}
              <a
                href="mailto:info@johnabtechnologieslimited.com"
                className="text-gold transition hover:underline"
              >
                info@johnabtechnologieslimited.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+2348159574995" className="text-gold transition hover:underline">
                +234 815 957 4995
              </a>
            </li>
            <li>
              Website:{" "}
              <a
                href="https://www.johnabtechnologieslimited.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold transition hover:underline"
              >
                www.johnabtechnologieslimited.com
              </a>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
