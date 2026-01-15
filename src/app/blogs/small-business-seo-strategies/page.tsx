import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Small Business SEO Strategies That Drive Growth | Comcreate",
  description:
    "Discover how small business SEO drives long-term growth with proven local SEO strategies. See real client results from Comcreate and get actionable tips to boost your organic traffic.",
  openGraph: {
    title: "Small Business SEO Strategies That Drive Growth | Comcreate",
    description:
      "Discover how small business SEO drives long-term growth with proven local SEO strategies. See real client results from Comcreate.",
    type: "article",
    images: ["/images/blog/seo-strategies-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Business SEO Strategies That Drive Growth",
    description:
      "Discover how small business SEO drives long-term growth with proven local SEO strategies.",
  },
};

function StatBar({
  percentage,
  description,
}: {
  percentage: number;
  description: string;
}) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex items-baseline mb-2 flex-wrap">
        <span className="text-3xl md:text-4xl font-bold text-blue-400 mr-3 min-w-[70px]">
          {percentage}%
        </span>
        <span className="text-neutral-300 text-sm md:text-base">
          {description}
        </span>
      </div>
      <div className="bg-neutral-700 rounded-full h-3 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function ClientWin({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6 md:p-8 my-8">
      <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function SmallBusinessSEOStrategiesPage() {
  return (
    <main className="bg-black min-h-screen pt-32 pb-20">
      <article className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-6"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/30">
              SEO
            </span>
            <span className="text-neutral-500 text-sm">Jan 15, 2025</span>
            <span className="text-neutral-500 text-sm">•</span>
            <span className="text-neutral-500 text-sm">8 min read</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            How Small Business SEO Drives Long-Term Growth: Proven Strategies
            and Real Client Wins
          </h1>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 bg-neutral-800">
          <Image
            src="/images/blog/seo-strategies-hero.jpg"
            alt="Business professional analyzing SEO analytics and traffic data on laptop dashboard"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Section 1: Introduction */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            Introduction: Why Small Business SEO Is Your Best Marketing
            Investment
          </h2>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            For small business owners, getting found online can feel like an
            uphill battle. You are competing against larger companies with
            bigger budgets. Every marketing dollar needs to count.
          </p>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            That is where small business SEO becomes one of the most valuable
            investments you can make.
          </p>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Unlike paid advertising that stops working the moment you stop
            paying, SEO builds lasting visibility. It continues bringing
            customers to your door month after month without ongoing ad spend.
          </p>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            At Comcreate, we have helped dozens of small businesses transform
            their online presence through strategic{" "}
            <Link
              href="/seo"
              className="text-blue-400 hover:text-blue-300 border-b border-blue-400/50"
            >
              SEO services for small businesses
            </Link>
            . In this article, we break down what makes SEO so effective and
            share real client examples that demonstrate these strategies in
            action.
          </p>

          {/* Section 2: Why Small Businesses Need SEO */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            Why Small Businesses Need SEO Now More Than Ever
          </h2>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            The way customers find businesses has fundamentally changed.
          </p>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            When someone needs a chiropractor, a roofer, or any local service,
            they reach for their phone and search. If your business does not
            appear in those search results, you are invisible to potential
            customers at the exact moment they are ready to buy.
          </p>

          {/* Stats Graph */}
          <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 md:p-8 rounded-2xl my-8 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              Local Search Statistics That Matter
            </h3>
            <StatBar
              percentage={46}
              description="of all Google searches have local intent"
            />
            <StatBar
              percentage={78}
              description="of local mobile searches lead to an offline purchase within 24 hours"
            />
            <StatBar
              percentage={92}
              description="of searchers choose businesses on the first page of results"
            />
          </div>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Small business SEO levels the playing field. With the right
            strategy, a local business can outrank national chains for the
            searches that matter most.
          </p>

          {/* Section 3: Website SEO Optimization */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            Website SEO Optimization: Building a Strong Foundation
          </h2>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Before any SEO strategy can succeed, your website needs a solid
            technical foundation. Website SEO optimization ensures that search
            engines can properly crawl, understand, and index your pages.
          </p>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Key elements of technical SEO include:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-3">
            <li className="text-neutral-300 text-lg">
              Fast loading speeds on all devices, especially mobile
            </li>
            <li className="text-neutral-300 text-lg">
              Clear page titles and proper heading structures
            </li>
            <li className="text-neutral-300 text-lg">
              Descriptive meta information for each page
            </li>
            <li className="text-neutral-300 text-lg">
              Mobile-responsive design
            </li>
            <li className="text-neutral-300 text-lg">
              Secure HTTPS connection
            </li>
            <li className="text-neutral-300 text-lg">Clean URL structures</li>
          </ul>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            When we work with clients at Comcreate, technical optimization is
            always our starting point. A beautifully designed website means
            nothing if search engines cannot find it or if visitors leave
            because pages load too slowly.
          </p>

          {/* Section 4: Local SEO Strategy */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            Local SEO Strategy: Dominating Your Service Area
          </h2>

          {/* Google Maps Local Pack Image */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden my-8 bg-neutral-800">
            <Image
              src="/images/blog/google-maps-local-pack.png"
              alt="Google Maps Local Pack showing local business results for auto repair shop near me search with ratings, reviews, and map"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            For most small businesses, local customers are the lifeblood of the
            company. A strong local SEO strategy focuses on capturing searches
            from people in your geographic area who need your services.
          </p>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Effective local SEO includes:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-3">
            <li className="text-neutral-300 text-lg">
              Google Business Profile optimization with complete information and
              photos
            </li>
            <li className="text-neutral-300 text-lg">
              Consistent NAP (name, address, phone) across all online
              directories
            </li>
            <li className="text-neutral-300 text-lg">
              Earning authentic reviews from satisfied customers
            </li>
            <li className="text-neutral-300 text-lg">
              Creating location-specific content and landing pages
            </li>
            <li className="text-neutral-300 text-lg">
              Building local citations and backlinks
            </li>
            <li className="text-neutral-300 text-lg">
              Optimizing for &quot;near me&quot; and location-based keywords
            </li>
          </ul>

          {/* Section 5: Client Win - Hansen Chiropractic */}
          <ClientWin title="Real Client Win: Hansen Chiropractic">
            <p className="text-neutral-300 text-lg mb-4 leading-relaxed">
              One of our clients,{" "}
              <Link
                href="/projects"
                className="text-blue-400 hover:text-blue-300 border-b border-blue-400/50"
              >
                Hansen Chiropractic
              </Link>
              , provides a perfect example of local SEO done right.
            </p>

            <p className="text-neutral-300 text-lg mb-4 leading-relaxed">
              As a chiropractic practice, their success depends on attracting
              patients from their local community. Before working with
              Comcreate, they struggled to appear in local search results
              despite having an established practice.
            </p>

            <p className="text-neutral-300 text-lg mb-4 leading-relaxed">
              Our approach focused on:
            </p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li className="text-neutral-300">
                Optimizing their Google Business Profile for maximum visibility
              </li>
              <li className="text-neutral-300">
                Targeting location-based keywords patients actually use
              </li>
              <li className="text-neutral-300">
                Ensuring consistent practice information across the web
              </li>
              <li className="text-neutral-300">
                Creating content addressing common patient questions
              </li>
            </ul>

            <p className="text-neutral-300 text-lg mb-4 leading-relaxed">
              <strong className="text-white">The results:</strong> Hansen
              Chiropractic saw a significant increase in new patient inquiries
              coming directly from organic search, reducing their dependence on
              paid advertising and referral-only growth.
            </p>

            <Link
              href="/projects"
              className="text-blue-400 hover:text-blue-300 border-b border-blue-400/50"
            >
              View this project and more in our portfolio.
            </Link>
          </ClientWin>

          {/* Section 6: Combining Web Design with SEO */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            Combining Web Design with SEO for Maximum Impact
          </h2>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Sometimes the best results come from addressing multiple needs at
            once.
          </p>

          <ClientWin title="Real Client Win: 4 Corners">
            <p className="text-neutral-300 text-lg mb-4 leading-relaxed">
              Our work with{" "}
              <Link
                href="/projects"
                className="text-blue-400 hover:text-blue-300 border-b border-blue-400/50"
              >
                4 Corners
              </Link>{" "}
              demonstrates how{" "}
              <Link
                href="/webdesign"
                className="text-blue-400 hover:text-blue-300 border-b border-blue-400/50"
              >
                website redesign
              </Link>{" "}
              and local SEO strategy can work together to dramatically boost
              visibility.
            </p>

            <p className="text-neutral-300 text-lg mb-4 leading-relaxed">
              When 4 Corners came to us, they needed more than minor SEO tweaks.
              Their existing website was not structured in a way that allowed
              search engines to properly understand and rank their content.
            </p>

            <p className="text-neutral-300 text-lg mb-4 leading-relaxed">
              We approached the project holistically:
            </p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li className="text-neutral-300">
                Rebuilt their site with SEO best practices built into the
                foundation
              </li>
              <li className="text-neutral-300">
                Implemented a targeted local SEO campaign
              </li>
              <li className="text-neutral-300">
                Optimized site architecture for better crawling and indexing
              </li>
              <li className="text-neutral-300">
                Created conversion-focused landing pages
              </li>
            </ul>

            <p className="text-neutral-300 text-lg leading-relaxed">
              <strong className="text-white">The result:</strong> A website that
              not only looked professional and converted visitors into customers
              but also climbed the search rankings for competitive terms. This
              combined approach delivered faster and more substantial organic
              traffic growth than either strategy would have achieved alone.
            </p>
          </ClientWin>

          {/* Section 7: Winning in Competitive Industries */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            Winning in Competitive Industries Through Strategic SEO
          </h2>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Some industries are more competitive than others when it comes to
            local search. Home services like roofing, plumbing, and HVAC are
            notoriously difficult because every company in town is fighting for
            the same customers.
          </p>

          <ClientWin title="Real Client Win: King Roof">
            <p className="text-neutral-300 text-lg mb-4 leading-relaxed">
              <Link
                href="/projects"
                className="text-blue-400 hover:text-blue-300 border-b border-blue-400/50"
              >
                King Roof
              </Link>{" "}
              faced exactly this challenge. The roofing industry is crowded with
              competitors all trying to rank for the same local search terms.
            </p>

            <p className="text-neutral-300 text-lg mb-4 leading-relaxed">
              Our comprehensive small business SEO strategy included:
            </p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li className="text-neutral-300">
                Building topical authority through targeted content
              </li>
              <li className="text-neutral-300">
                Earning quality backlinks from relevant sources
              </li>
              <li className="text-neutral-300">
                Optimizing every aspect of their local presence
              </li>
              <li className="text-neutral-300">
                Targeting high-intent keywords like &quot;roof repair near
                me&quot; and &quot;roofing contractor [city]&quot;
              </li>
            </ul>

            <p className="text-neutral-300 text-lg leading-relaxed">
              <strong className="text-white">The results:</strong> King Roof
              began ranking on page one for valuable local search terms that
              bring in customers actively looking for roofing services. These
              are not casual browsers but homeowners ready to request quotes and
              make decisions.
            </p>
          </ClientWin>

          {/* Section 8: Actionable Tips */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            Actionable Small Business SEO Tips You Can Use Today
          </h2>

          <p className="text-neutral-300 text-lg mb-6 leading-relaxed">
            While professional SEO services deliver the best results, here are
            steps any small business owner can take right now:
          </p>

          <div className="space-y-6 my-8">
            {[
              {
                title: "Claim and optimize your Google Business Profile",
                desc: "Add high-quality photos, respond to every review, and keep your hours and contact information current.",
              },
              {
                title: "Audit your NAP consistency",
                desc: "Ensure your business name, address, and phone number are identical everywhere they appear online. Inconsistencies confuse search engines and hurt rankings.",
              },
              {
                title: "Ask for reviews strategically",
                desc: "Positive reviews build trust with potential customers and signal quality to search engines. Make it easy for satisfied customers to leave feedback.",
              },
              {
                title: "Create helpful content",
                desc: "Answer questions your customers actually ask. This builds authority and gives search engines more reasons to rank your site.",
              },
              {
                title: "Prioritize mobile experience",
                desc: "More than half of local searches happen on phones. A poor mobile experience drives customers straight to competitors.",
              },
              {
                title: "Monitor your results",
                desc: "Use free tools like Google Search Console to track which keywords bring traffic and identify opportunities for improvement.",
              },
            ].map((tip, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">
                    {tip.title}
                  </h4>
                  <p className="text-neutral-400">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 9: Long-Term Value */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            The Long-Term Value of Investing in SEO Services for Small
            Businesses
          </h2>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            What makes{" "}
            <Link
              href="/seo"
              className="text-blue-400 hover:text-blue-300 border-b border-blue-400/50"
            >
              SEO services for small businesses
            </Link>{" "}
            such a smart investment is the compounding nature of the results.
          </p>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Unlike advertising where you pay for each click or impression, the
            work you put into SEO today continues paying dividends for years.
            The organic traffic growth you build becomes a true asset for your
            business.
          </p>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 md:p-8 my-8">
            <p className="text-white font-semibold text-lg mb-4">
              Benefits of long-term SEO investment:
            </p>
            <ul className="space-y-3">
              {[
                "Reduced customer acquisition costs over time",
                "Consistent lead flow without ongoing ad spend",
                "Increased brand credibility and trust",
                "Competitive advantage that compounds monthly",
                "Higher quality leads from customers actively searching for your services",
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-300">
                  <svg
                    className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 10: CTA */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-10 mt-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Grow Your Business with Small Business SEO?
            </h2>

            <p className="text-blue-100 text-lg mb-6">
              If you are tired of hoping customers find you and ready to build a
              reliable stream of organic leads, Comcreate is here to help.
            </p>

            <p className="text-blue-100 mb-6">
              Our team has helped businesses across dozens of industries achieve
              meaningful results through proven small business SEO strategies.
              We do not believe in one-size-fits-all solutions. Every strategy
              we create is customized to your business, your market, and your
              goals.
            </p>

            <ul className="text-left max-w-md mx-auto mb-8 space-y-2">
              {[
                "Free initial consultation and website audit",
                "Customized SEO strategy tailored to your industry",
                "Transparent reporting so you always know your results",
                "Dedicated support from real SEO experts",
              ].map((item, i) => (
                <li key={i} className="text-white flex items-center gap-2">
                  <span className="text-blue-300">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-blue-100 mb-8">
              Your competitors are already investing in SEO. Every day you wait
              is another day they capture customers who should be finding you.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Schedule Your Free Consultation
            </Link>

            <div className="mt-6 text-blue-100">
              <p>
                Call us at{" "}
                <a href="tel:6199550105" className="text-white underline">
                  619-955-0105
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:sales@comcreate.org"
                  className="text-white underline"
                >
                  sales@comcreate.org
                </a>{" "}
                to get started.
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
