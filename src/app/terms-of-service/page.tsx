import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Comcreate",
  description: "Terms of Service for Comcreate digital agency.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-black pt-40 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <p className="text-neutral-400 mb-8">Last updated: January 2025</p>

        <div className="prose prose-invert prose-neutral max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Agreement to Terms
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              By accessing or using our website and services, you agree to be
              bound by these Terms of Service. If you do not agree to these
              terms, please do not use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Services
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              Comcreate provides web design, development, SEO, digital
              advertising, and branding services. The specific scope of services
              will be defined in individual project agreements.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Intellectual Property
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              All content on this website, including text, graphics, logos, and
              images, is the property of Comcreate or its licensors. Upon full
              payment, clients receive ownership rights to deliverables as
              specified in their project agreement.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Payment Terms
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              Payment terms will be outlined in individual project proposals and
              agreements. Late payments may result in service interruption or
              additional fees as specified in the agreement.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Client Responsibilities
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Clients are responsible for:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>Providing accurate and timely information</li>
              <li>Reviewing and approving deliverables within agreed timelines</li>
              <li>Ensuring they have rights to materials provided to us</li>
              <li>Making payments according to agreed terms</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Limitation of Liability
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              Comcreate shall not be liable for any indirect, incidental,
              special, or consequential damages arising from the use of our
              services. Our total liability shall not exceed the amount paid for
              the specific service in question.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Confidentiality
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              We maintain strict confidentiality of all client information and
              project details. We will not disclose confidential information to
              third parties without prior written consent.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Termination
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              Either party may terminate services with written notice as
              specified in the project agreement. Upon termination, clients are
              responsible for payment of work completed.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Changes to Terms
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              We reserve the right to modify these terms at any time. Continued
              use of our services after changes constitutes acceptance of the
              new terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Contact Information
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              For questions about these Terms of Service, please contact us:
            </p>
            <p className="text-neutral-400 mt-4">
              Email: sales@comcreate.org
              <br />
              Phone: (619) 955-0105
              <br />
              Location: San Diego, CA
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
