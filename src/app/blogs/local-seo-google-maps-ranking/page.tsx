import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Local SEO for Small Businesses: How to Rank in Google Maps & Near Me Searches | Comcreate",
  description:
    "Learn how local SEO helps small businesses rank in Google Maps and near me searches. Get actionable tips for Google Business Profile optimization and drive more local leads.",
  openGraph: {
    title:
      "Local SEO for Small Businesses: How to Rank in Google Maps & Near Me Searches",
    description:
      "Learn how local SEO helps small businesses rank in Google Maps and near me searches. Drive more high-intent local leads to your business.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO for Small Businesses: How to Rank in Google Maps",
    description:
      "Learn how local SEO helps small businesses rank in Google Maps and near me searches.",
  },
};

function RankingFactor({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-neutral-800 p-5 rounded-xl border-l-4 border-blue-500 mb-4 last:mb-0">
      <h4 className="text-lg font-semibold text-blue-400 mb-2">
        {number}. {title}
      </h4>
      <p className="text-neutral-300 text-base leading-relaxed">{description}</p>
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

function BenefitCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-neutral-800/50 border border-white/10 p-5 rounded-xl text-center">
      <h4 className="text-blue-400 font-semibold mb-2">{title}</h4>
      <p className="text-neutral-400 text-sm">{description}</p>
    </div>
  );
}

export default function LocalSEOGoogleMapsPage() {
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
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30">
              SEO
            </span>
            <span className="text-neutral-500 text-sm">Jan 12, 2025</span>
            <span className="text-neutral-500 text-sm">•</span>
            <span className="text-neutral-500 text-sm">10 min read</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Local SEO for Small Businesses: How to Rank in Google Maps and
            &quot;Near Me&quot; Searches
          </h1>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Section 1: Introduction */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            Introduction: The Search That Happens Right Before a Customer Calls
          </h2>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            When someone searches &quot;chiropractor near me&quot; or
            &quot;roofer in [your city],&quot; they are not casually browsing.
            They have a problem, and they want to solve it now.
          </p>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            These local searches represent the highest-intent traffic any small
            business can attract. The customer has already decided they need a
            service. The only question is which business they will choose.
          </p>

          <div className="border-l-4 border-blue-500 pl-5 my-8 italic">
            <p className="text-neutral-200 text-xl leading-relaxed">
              76 percent of people who search for something nearby on their
              phone visit a business within a day. 28 percent of those searches
              result in a purchase.
            </p>
          </div>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            For local service businesses—healthcare providers, home service
            contractors, professional services—visibility in Google Maps and
            local search results is not optional. It is where your next
            customers are looking right now.
          </p>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            This is where <strong className="text-white">local SEO for small businesses</strong> becomes
            your most valuable marketing asset. When your business appears in
            the Google Maps results for relevant searches, you connect with
            customers at the exact moment they are ready to act.
          </p>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            At Comcreate, we help local businesses dominate these searches. In
            this guide, we break down exactly how local SEO works and what you
            can do to start ranking higher in Google Maps.
          </p>

          {/* Section 2: What Is Local SEO */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            What Is Local SEO and Why It Converts Better Than Any Other Traffic
          </h2>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">
              What is Local SEO?
            </h3>
            <p className="text-neutral-300 mb-0">
              Local SEO is the process of optimizing your online presence to
              attract customers from local searches. It focuses on appearing in
              Google Maps, the Local Pack (the map and three business listings
              at the top of search results), and location-based organic results.
            </p>
          </div>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            When you search for a local service on Google, you typically see
            three types of results:
          </p>

          <ol className="list-decimal pl-6 mb-6 space-y-3">
            <li className="text-neutral-300 text-lg">
              <strong className="text-white">The Local Pack</strong> – A map
              with three highlighted businesses and their ratings, hours, and
              contact information
            </li>
            <li className="text-neutral-300 text-lg">
              <strong className="text-white">Organic results</strong> –
              Traditional website listings below the map
            </li>
            <li className="text-neutral-300 text-lg">
              <strong className="text-white">Paid ads</strong> – Sponsored
              listings at the top or bottom
            </li>
          </ol>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            The Local Pack captures the lion&apos;s share of clicks for local
            searches. Appearing in those top three map results puts your
            business directly in front of people searching for exactly what you
            offer.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">
            Why Local Searches Convert Better
          </h3>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Unlike general website traffic, local search traffic comes from
            people with immediate intent. Someone searching &quot;dentist near
            me&quot; is not researching dentistry as a concept. They need a
            dentist, and they need one soon.
          </p>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            This intent difference is why{" "}
            <strong className="text-white">local service business SEO</strong> delivers such
            strong returns. You are not paying to reach people who might be
            interested someday. You are connecting with customers who are ready
            to book an appointment, request a quote, or walk through your door.
          </p>

          {/* Section 3: How Google Ranks */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            How Google Decides Which Businesses Rank in Maps
          </h2>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Google uses three primary factors to determine which businesses
            appear in local search results. Understanding these factors is
            essential for any <strong className="text-white">Google Maps SEO</strong> strategy.
          </p>

          <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 md:p-8 rounded-2xl my-8 border border-white/10">
            <RankingFactor
              number={1}
              title="Relevance"
              description="How well does your business match what the searcher is looking for? Google evaluates your business categories, services, website content, and Google Business Profile information to determine relevance. A roofing company that clearly lists 'roof repair' and 'roof replacement' as services will rank better for those searches than one with vague descriptions."
            />
            <RankingFactor
              number={2}
              title="Distance"
              description="How close is your business to the person searching? For 'near me' searches, Google prioritizes businesses within a reasonable distance from the searcher's location. While you cannot change your physical location, you can optimize for specific service areas and neighborhoods."
            />
            <RankingFactor
              number={3}
              title="Prominence"
              description="How well-known and trusted is your business? Google measures prominence through reviews, ratings, backlinks, citations, and overall online presence. A business with 150 positive reviews and consistent information across the web will outrank a competitor with minimal online presence."
            />
          </div>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            These three factors work together. A highly relevant business with
            strong prominence can rank well even for searchers slightly farther
            away. The goal of local SEO is to maximize your performance across
            all three.
          </p>

          {/* Section 4: Google Business Profile */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            Google Business Profile Optimization: The Foundation of Local SEO
          </h2>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Your Google Business Profile is the single most important element of{" "}
            <strong className="text-white">local SEO for small businesses</strong>. This free
            listing controls how your business appears in Google Maps and local
            search results.
          </p>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            A fully optimized profile signals to Google that your business is
            legitimate, active, and relevant to local searches. An incomplete or
            neglected profile tells Google—and potential customers—the opposite.
          </p>

          <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 md:p-8 my-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Business Name and Categories
            </h3>
            <p className="text-neutral-300 mb-6">
              Use your exact business name as it appears on your signage and
              legal documents. Choose a primary category that precisely matches
              your main service, then add secondary categories for additional
              services. A chiropractor might use &quot;Chiropractor&quot; as the
              primary category and add &quot;Sports Medicine Clinic&quot; or
              &quot;Physical Therapy Clinic&quot; as secondary options.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">
              Services and Descriptions
            </h3>
            <p className="text-neutral-300 mb-6">
              Add every service you offer with clear descriptions. Your business
              description should explain what you do, who you serve, and what
              makes you different—all while naturally incorporating relevant
              keywords. Write for humans first, but ensure your core services
              are clearly mentioned.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">
              Photos and Visual Content
            </h3>
            <p className="text-neutral-300 mb-6">
              Businesses with photos receive 42 percent more requests for
              directions and 35 percent more website clicks. Add high-quality
              images of your storefront, interior, team, and completed work.
              Update photos regularly to show Google your business is active.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">
              Reviews and Responses
            </h3>
            <p className="text-neutral-300 mb-6">
              Reviews are one of the strongest local ranking factors. Actively
              encourage satisfied customers to leave reviews, and respond to
              every review—positive or negative. Thoughtful responses show
              potential customers that you value feedback and engage with your
              community.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">
              Posts and Updates
            </h3>
            <p className="text-neutral-300 mb-6">
              Google Business Profile allows you to publish posts about offers,
              events, news, and updates. Regular posting signals that your
              business is active and gives you additional opportunities to
              appear in relevant searches. Aim for at least one post per week.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">
              Accurate Information
            </h3>
            <p className="text-neutral-300 mb-0">
              Ensure your hours, phone number, address, and website URL are
              accurate and match the information on your website and other
              directories. Inconsistencies create confusion for both Google and
              potential customers.
            </p>
          </div>

          {/* Section 5: Website SEO */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            Website and On-Page SEO for Local Rankings
          </h2>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            While your Google Business Profile drives Maps visibility, your
            website supports and reinforces your local SEO efforts. A
            well-optimized website helps Google understand your relevance and
            authority for local searches.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">
            Location-Based Keywords
          </h3>
          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Incorporate your city, neighborhood, and service area into your
            website content naturally. Your homepage, service pages, and meta
            descriptions should all reference the locations you serve. Instead
            of &quot;We offer plumbing services,&quot; write &quot;We offer
            plumbing services throughout San Diego and surrounding
            communities.&quot;
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">
            Service and Location Pages
          </h3>
          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Create dedicated pages for each major service and, if you serve
            multiple areas, for each location. A page titled &quot;Roof Repair
            in Chula Vista&quot; that addresses the specific needs of that
            community will rank better for Chula Vista searches than a generic
            roof repair page.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">
            Mobile Optimization
          </h3>
          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            The majority of <strong className="text-white">near me searches</strong> happen on
            mobile devices. If your website is slow, difficult to navigate, or
            hard to read on a phone, you are losing potential customers. Google
            also prioritizes mobile-friendly sites in search rankings.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Page Speed</h3>
          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Slow websites frustrate users and hurt rankings. Compress images,
            minimize code, and use reliable hosting to ensure your pages load
            quickly. Every second of delay increases the chance a visitor will
            leave and call your competitor instead.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">
            Clear Calls-to-Action
          </h3>
          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Make it easy for visitors to contact you. Your phone number should
            be clickable on mobile devices. Contact forms should be simple and
            prominent. Every page should guide visitors toward taking action.
          </p>

          {/* Section 6: Authority Signals */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            Local Authority Signals: Building Trust and Credibility
          </h2>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Beyond your Google Business Profile and website, Google evaluates
            your overall online presence to determine local search rankings.
            These authority signals demonstrate that your business is
            established, trusted, and relevant to your community.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">
            Reviews and Reputation Management
          </h3>
          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Your review profile across Google, Yelp, Facebook, and
            industry-specific platforms contributes to your local authority.
            Focus on earning genuine reviews from satisfied customers and
            address negative feedback professionally. Quality and recency of
            reviews both matter.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">
            Local Citations and NAP Consistency
          </h3>
          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Citations are mentions of your business name, address, and phone
            number (NAP) on other websites. Directories like Yelp, Yellow Pages,
            industry associations, and local business listings all count. The
            key is consistency—your NAP should be identical everywhere it
            appears online.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">
            Local Backlinks
          </h3>
          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Links from other local websites signal to Google that your business
            is part of the community. Sponsoring local events, joining the
            chamber of commerce, partnering with complementary businesses, and
            earning coverage in local news all generate valuable local
            backlinks.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">
            Community Relevance
          </h3>
          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Google recognizes businesses that are genuinely active in their
            communities. Participating in local events, supporting local causes,
            and engaging with community organizations all contribute to your
            local authority over time.
          </p>

          {/* Section 7: Client Examples */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            Real Client Examples: Local SEO That Drives Results
          </h2>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            At Comcreate, we have helped local businesses across industries
            improve their visibility in Google Maps and local search. Here are
            two examples that demonstrate how{" "}
            <strong className="text-white">local service business SEO</strong> works in practice.
          </p>

          <ClientWin title="Hansen Chiropractic: Healthcare Local SEO">
            <p className="text-blue-400 font-semibold mb-2">The Challenge</p>
            <p className="text-neutral-300 mb-4">
              Hansen Chiropractic had an established practice but struggled to
              appear in local search results. New patient acquisition depended
              heavily on referrals and paid advertising, leaving significant
              growth potential untapped.
            </p>

            <p className="text-blue-400 font-semibold mb-2">Our Approach</p>
            <p className="text-neutral-300 mb-4">
              We implemented a comprehensive{" "}
              <strong className="text-white">Google Business Profile optimization</strong>{" "}
              strategy, ensuring their profile was complete, accurate, and
              actively managed. We built location-specific content addressing
              common patient questions and established consistent citations
              across healthcare directories.
            </p>

            <p className="text-blue-400 font-semibold mb-2">The Results</p>
            <p className="text-neutral-300 mb-4">
              Hansen Chiropractic now appears prominently in local searches for
              chiropractic services in their area. New patient inquiries from
              organic search have increased significantly, reducing their
              dependence on paid advertising and creating a sustainable source
              of new patients.
            </p>

            <Link
              href="/projects"
              className="text-blue-400 hover:text-blue-300 border-b border-blue-400/50"
            >
              View this project in our portfolio.
            </Link>
          </ClientWin>

          <ClientWin title="King Roof: Competitive Home Services Market">
            <p className="text-blue-400 font-semibold mb-2">The Challenge</p>
            <p className="text-neutral-300 mb-4">
              The roofing industry is one of the most competitive local search
              markets. King Roof faced dozens of competitors all fighting for
              the same high-value keywords like &quot;roof repair near me&quot;
              and &quot;roofing contractor.&quot;
            </p>

            <p className="text-blue-400 font-semibold mb-2">Our Approach</p>
            <p className="text-neutral-300 mb-4">
              We developed a multi-faceted local SEO strategy combining Google
              Business Profile optimization, targeted service area pages, review
              generation, and local authority building. Every element was
              designed to strengthen King Roof&apos;s prominence for
              roofing-related searches in their service area.
            </p>

            <p className="text-blue-400 font-semibold mb-2">The Results</p>
            <p className="text-neutral-300 mb-4">
              King Roof now ranks on the first page for valuable local roofing
              searches. Their visibility in the Google Maps Local Pack has
              translated directly into more quote requests from homeowners
              actively searching for roofing services.
            </p>

            <Link
              href="/projects"
              className="text-blue-400 hover:text-blue-300 border-b border-blue-400/50"
            >
              View this project in our portfolio.
            </Link>
          </ClientWin>

          {/* Section 8: Actionable Tips */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            Actionable Local SEO Tips You Can Implement Today
          </h2>

          <p className="text-neutral-300 text-lg mb-6 leading-relaxed">
            While professional local SEO delivers the best results, here are
            steps every small business owner can take right now to improve their
            local search visibility.
          </p>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 md:p-8 my-8">
            <h3 className="text-xl font-bold text-green-400 mb-6">
              Your Local SEO Quick-Start Checklist
            </h3>
            <ol className="space-y-4">
              {[
                {
                  title: "Claim and complete your Google Business Profile.",
                  desc: "Add all services, upload quality photos, write a compelling description, and verify your business information is accurate.",
                },
                {
                  title: "Audit your NAP consistency.",
                  desc: "Search for your business name and ensure your name, address, and phone number are identical on your website, Google Business Profile, and all directory listings.",
                },
                {
                  title: "Request reviews from recent customers.",
                  desc: "Send a direct link to your Google review page after positive interactions. Make leaving a review as easy as possible.",
                },
                {
                  title: "Respond to every existing review.",
                  desc: "Thank positive reviewers specifically. Address negative reviews professionally and offer to resolve issues offline.",
                },
                {
                  title: "Add location keywords to your website.",
                  desc: "Update your homepage, service pages, and meta descriptions to include your city and service areas naturally.",
                },
                {
                  title: "Post weekly updates to your Google Business Profile.",
                  desc: "Share news, offers, tips, or photos to signal that your business is active and engaged.",
                },
                {
                  title: "Test your website on mobile.",
                  desc: "Load your site on a smartphone and try to find your phone number and contact form. If it takes more than a few seconds, you are losing potential customers.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <strong className="text-white block mb-1">
                      {item.title}
                    </strong>
                    <span className="text-neutral-400">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Section 9: Long-Term Value */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            Why Local SEO Is a Long-Term Growth Asset
          </h2>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Unlike paid advertising that stops working when you stop paying,{" "}
            <strong className="text-white">local SEO for small businesses</strong> builds lasting
            visibility that compounds over time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <BenefitCard
              title="Compounding Visibility"
              description="Every review earned, citation built, and optimization made contributes to long-term ranking strength."
            />
            <BenefitCard
              title="Reduced Ad Dependency"
              description="Organic local visibility provides consistent leads without ongoing advertising costs."
            />
            <BenefitCard
              title="Higher-Quality Leads"
              description="Local searchers have immediate intent, resulting in better conversion rates than general traffic."
            />
            <BenefitCard
              title="Competitive Advantage"
              description="Strong local SEO creates a moat that competitors cannot easily replicate."
            />
          </div>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            The businesses that invest in local SEO today will dominate their
            local markets for years to come. Every month you wait is another
            month your competitors are building the visibility that should
            belong to you.
          </p>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-10 mt-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Dominate Your Local Market?
            </h2>

            <p className="text-blue-100 text-lg mb-6">
              If you are ready to appear in front of customers actively
              searching for your services, Comcreate is here to help.
            </p>

            <p className="text-blue-100 mb-6">
              Our team specializes in{" "}
              <Link href="/seo" className="text-white underline">
                local SEO for small businesses
              </Link>
              . We have helped healthcare providers, home service contractors,
              and professional service firms achieve meaningful visibility in
              Google Maps and local search results.
            </p>

            <ul className="text-left max-w-md mx-auto mb-8 space-y-2">
              {[
                "Free local SEO audit and consultation",
                "Customized strategy for your market and competition",
                "Google Business Profile optimization",
                "Ongoing support and transparent reporting",
              ].map((item, i) => (
                <li key={i} className="text-white flex items-center gap-2">
                  <span className="text-blue-300">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-blue-100 mb-8">
              Your competitors are already investing in local SEO. The customers
              searching for your services right now are finding someone—make
              sure it is you.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Get Your Free Local SEO Audit
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
                </a>
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
