import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Comcreate",
  description: "Privacy Policy for Comcreate digital agency.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black pt-40 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="text-neutral-400 mb-8">Last updated: January 2025</p>

        <div className="prose prose-invert prose-neutral max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Introduction
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              Comcreate (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is
              committed to protecting your personal data. This privacy policy
              explains how we collect, use, and safeguard your information when
              you visit our website or use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Information We Collect
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>
                Contact information (name, email address, phone number)
              </li>
              <li>Company information</li>
              <li>
                Usage data (how you interact with our website)
              </li>
              <li>
                Technical data (IP address, browser type, device information)
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              How We Use Your Information
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              We use your information to:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>Provide and improve our services</li>
              <li>Respond to your inquiries</li>
              <li>Send relevant communications about our services</li>
              <li>Analyze website usage to improve user experience</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Data Security
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              We implement appropriate security measures to protect your
              personal information. However, no method of transmission over the
              internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Third-Party Services
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              We may use third-party services for analytics and marketing
              purposes. These services have their own privacy policies governing
              the use of your information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Your Rights
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              You have the right to access, correct, or delete your personal
              data. To exercise these rights, please contact us at
              sales@comcreate.org.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Contact Us
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us
              at:
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
