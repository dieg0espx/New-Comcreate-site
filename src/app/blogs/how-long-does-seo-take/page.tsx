import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "How Long Does SEO Take for Small Businesses? A Realistic Timeline | Comcreate",
  description:
    "Wondering how long SEO takes to work? Get honest answers about SEO timelines for small businesses, what to expect month by month, and how to measure real progress.",
  openGraph: {
    title: "How Long Does SEO Take for Small Businesses? A Realistic Timeline",
    description:
      "Get honest answers about SEO timelines for small businesses. Learn what to expect month by month and how to measure real progress.",
    type: "article",
    images: ["/images/blog/seo-timeline-hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Long Does SEO Take for Small Businesses?",
    description:
      "Get honest answers about SEO timelines and what to expect month by month.",
  },
};

function TimelineItem({
  phase,
  title,
  description,
  items,
  note,
  color,
}: {
  phase: string;
  title: string;
  description: string;
  items: string[];
  note: string;
  color: string;
}) {
  const colorClasses: Record<string, { border: string; text: string }> = {
    orange: { border: "border-orange-500", text: "text-orange-400" },
    green: { border: "border-green-500", text: "text-green-400" },
    cyan: { border: "border-cyan-500", text: "text-cyan-400" },
    red: { border: "border-red-500", text: "text-red-400" },
  };

  const styles = colorClasses[color] || colorClasses.orange;

  return (
    <div
      className={`bg-neutral-900 p-6 rounded-xl border-l-4 ${styles.border} mb-5 last:mb-0`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span
          className={`text-xs font-semibold px-2 py-1 rounded bg-neutral-800 ${styles.text}`}
        >
          {phase}
        </span>
      </div>
      <h4 className={`text-lg font-bold ${styles.text} mb-2`}>{title}</h4>
      <p className="text-neutral-300 mb-4">{description}</p>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-neutral-400 text-sm">
            {item}
          </li>
        ))}
      </ul>
      <p className="text-neutral-500 text-sm italic">{note}</p>
    </div>
  );
}

function FactorCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-neutral-800/50 border border-white/10 p-5 rounded-xl">
      <h4 className="text-blue-400 font-semibold mb-2">{title}</h4>
      <p className="text-neutral-400 text-sm">{description}</p>
    </div>
  );
}

function MythItem({
  myth,
  reality,
}: {
  myth: string;
  reality: string;
}) {
  return (
    <div className="mb-6 last:mb-0">
      <span className="inline-block bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-xs font-semibold mb-2">
        Myth
      </span>
      <p className="text-white font-semibold italic mb-2">&quot;{myth}&quot;</p>
      <p className="text-neutral-400">
        <strong className="text-neutral-200">Reality:</strong> {reality}
      </p>
    </div>
  );
}

export default function HowLongDoesSEOTakePage() {
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
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-400 border border-purple-500/30">
              SEO
            </span>
            <span className="text-neutral-500 text-sm">Jan 8, 2025</span>
            <span className="text-neutral-500 text-sm">•</span>
            <span className="text-neutral-500 text-sm">9 min read</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            How Long Does SEO Take for Small Businesses? A Realistic Timeline
          </h1>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 bg-neutral-800">
          <Image
            src="/images/blog/seo-timeline-hero.png"
            alt="Hourglass with growth chart showing SEO results building over time"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Section 1: Introduction */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            The Question Every Business Owner Asks
          </h2>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            If you have ever looked into SEO for your business, you have
            probably asked the same question every business owner asks:{" "}
            <strong className="text-white">how long does SEO take</strong> to
            actually work?
          </p>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            It is a fair question. You are investing time, money, and trust into
            something that does not deliver instant results. Meanwhile, you may
            have heard promises like &quot;rank on page one in 30 days&quot; or
            seen ads guaranteeing overnight success.
          </p>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Here is the honest truth: those promises are not realistic. SEO does
            not work that way.
          </p>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            But that does not mean SEO is unpredictable. When done correctly,
            SEO follows a clear pattern of progress. The timeline is not
            instant, but it is understandable—and it is worth understanding
            before you invest.
          </p>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            This guide will give you straight answers about{" "}
            <strong className="text-white">SEO timelines for small businesses</strong>,
            what to expect at each stage, and how to recognize real progress
            along the way.
          </p>

          {/* Section 2: Short Answer */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            The Short Answer: How Long Does SEO Take?
          </h2>

          <div className="bg-blue-500/10 border-2 border-blue-500 rounded-xl p-6 md:p-8 my-8">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">
              How long does SEO take to show results?
            </h3>
            <p className="text-xl md:text-2xl font-semibold text-white mb-4 leading-relaxed">
              Most small businesses begin seeing measurable SEO improvements in
              3–6 months, with stronger, more consistent results in 6–12 months.
            </p>
            <p className="text-neutral-300 mb-0">
              This timeframe depends on factors like your industry&apos;s
              competitiveness, the current condition of your website, and how
              consistently SEO work is applied. Local businesses targeting
              nearby customers often see progress on the earlier end of this
              range.
            </p>
          </div>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            This is not a guess or a marketing talking point. It reflects how
            search engines evaluate and reward websites over time. The results
            build gradually because trust and authority cannot be manufactured
            overnight.
          </p>

          {/* Section 3: Why SEO Takes Time */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            Why SEO Takes Time: A Simple Explanation
          </h2>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Understanding why SEO takes months rather than days helps set proper{" "}
            <strong className="text-white">small business SEO expectations</strong>. Here
            is what is happening behind the scenes:
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">
            Search Engines Need to Build Trust
          </h3>
          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Google and other search engines want to recommend trustworthy
            businesses to their users. They evaluate your website over time,
            looking at signals like how long your site has existed, how often it
            is updated, and whether other reputable sites link to it. Earning
            that trust is a gradual process.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">
            Competition Varies by Industry
          </h3>
          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            If you are a plumber in a small town with three competitors,
            climbing the rankings will be faster than if you are competing
            against hundreds of established businesses in a major city. The more
            competitive your market, the longer it takes to stand out.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">
            Authority Builds Gradually
          </h3>
          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Think of SEO authority like a professional reputation. A new
            business cannot have the same standing as one that has been serving
            customers for ten years. Your online authority grows as you
            accumulate reviews, backlinks, content, and consistent activity.
            This simply takes time.
          </p>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            None of this is Google being difficult. It is the search engine
            doing its job: showing users the most relevant, trustworthy results.
            Your goal is to demonstrate, over time, that your business deserves
            to be in those results.
          </p>

          {/* Section 4: Month by Month Timeline */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            What Happens Month by Month: The SEO Timeline Breakdown
          </h2>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Understanding the{" "}
            <strong className="text-white">SEO results timeframe</strong> helps you
            recognize progress even before you see dramatic ranking changes.
            Here is what a typical timeline looks like:
          </p>

          {/* Timeline Infographic */}
          <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden my-8 bg-neutral-800">
            <Image
              src="/images/blog/seo-timeline-infographic.png"
              alt="SEO timeline infographic showing four phases: Foundation (Months 0-2), Early Movement (Months 3-4), Traction (Months 5-6), and Compounding Growth (Months 6-12)"
              fill
              className="object-cover"
            />
          </div>

          <div className="my-8">
            <TimelineItem
              phase="Months 0–2"
              title="Foundation and Setup"
              color="orange"
              description="This phase focuses on research, technical fixes, and laying the groundwork. Activities typically include:"
              items={[
                "Website audit and technical SEO improvements",
                "Keyword research and strategy development",
                "Google Business Profile optimization",
                "Fixing site speed, mobile issues, and broken links",
                "Setting up tracking and analytics",
              ]}
              note="You will not see ranking changes yet. This phase is about building the foundation everything else depends on."
            />

            <TimelineItem
              phase="Months 3–4"
              title="Early Movement"
              color="green"
              description="Search engines begin recognizing the improvements. You may notice:"
              items={[
                "Increased impressions in Google Search Console",
                "Movement in keyword positions (even if not on page one yet)",
                "More activity on your Google Business Profile",
                "Gradual increase in organic website traffic",
              ]}
              note="Progress is happening, even if it does not feel dramatic. The seeds planted in months one and two are starting to grow."
            />

            <TimelineItem
              phase="Months 5–6"
              title="Visibility and Traction"
              color="cyan"
              description="This is typically when businesses start feeling the impact:"
              items={[
                "Keywords reaching page one for less competitive terms",
                "Noticeable increase in organic traffic",
                "Phone calls and inquiries from search",
                "Improved local map visibility",
              ]}
              note="For local businesses, this phase often brings real leads and customer inquiries."
            />

            <TimelineItem
              phase="Months 6–12"
              title="Compounding Growth"
              color="red"
              description="SEO momentum builds on itself. Results compound:"
              items={[
                "Stronger rankings for competitive keywords",
                "Consistent lead flow from organic search",
                "Reduced dependence on paid advertising",
                "Growing authority that makes future gains easier",
              ]}
              note="This is when SEO transforms from an expense into an asset that continues delivering value."
            />
          </div>

          {/* Section 5: Factors */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            Factors That Affect Your SEO Timeline
          </h2>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Not every business will follow the exact same timeline. Several
            factors influence how quickly you will see results:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <FactorCard
              title="Competition Level"
              description="A chiropractor in a small suburb faces different competition than one in downtown Los Angeles. More competitors means more time needed to stand out."
            />
            <FactorCard
              title="Website Condition"
              description="A well-built website needs less foundational work than one with technical problems, slow loading times, or poor mobile experience."
            />
            <FactorCard
              title="Local vs National"
              description="Businesses targeting local customers typically see faster results than those competing nationally or in multiple markets."
            />
            <FactorCard
              title="Consistency of Effort"
              description="SEO is not a one-time project. Consistent monthly work produces better results than sporadic bursts of activity."
            />
          </div>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            For a roofing company serving one county, results might come faster
            than for a consulting firm targeting clients across the entire
            state. Understanding your specific situation helps set realistic
            expectations.
          </p>

          {/* Section 6: Local vs General */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            Local SEO vs General SEO: Different Timelines
          </h2>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            If your business serves customers in a specific geographic area, you
            have an advantage. <strong className="text-white">Local SEO</strong> often
            produces visible results faster than broader SEO campaigns.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">
            Why Local SEO Moves Faster
          </h3>
          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Local search is a smaller playing field. Instead of competing with
            every business in your industry nationwide, you are competing with
            businesses in your city or service area. Google also prioritizes
            local results for searches with local intent, which means less
            competition for visibility.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">
            Google Maps vs Organic Rankings
          </h3>
          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Many local businesses see Google Maps visibility improve before
            their organic website rankings do. Your Google Business Profile can
            start appearing in local searches within weeks of optimization,
            while climbing the organic results takes longer.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">
            Calls Before Rankings Stabilize
          </h3>
          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Local businesses often receive phone calls and inquiries before
            their rankings feel &quot;finished.&quot; A customer searching
            &quot;plumber near me&quot; might find your Google Business Profile
            and call directly, even if your website has not reached page one
            yet. Real business results can arrive before perfect rankings.
          </p>

          {/* Section 7: Common Myths */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            Common SEO Myths That Create Unrealistic Expectations
          </h2>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Frustration with SEO timelines often comes from misconceptions. Here
            are myths worth correcting:
          </p>

          <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-6 md:p-8 my-8">
            <MythItem
              myth="SEO is a one-time fix."
              reality="SEO is ongoing. Search engines constantly update their algorithms, competitors adjust their strategies, and your market evolves. Sustainable results require consistent effort over time."
            />
            <MythItem
              myth="More content equals instant rankings."
              reality="Quality matters more than quantity. Publishing fifty mediocre blog posts will not help. A smaller amount of genuinely useful content, properly optimized, produces better results than content created just to fill space."
            />
            <MythItem
              myth="SEO should work in 30 days."
              reality="Anyone promising significant results in 30 days is either overpromising or using risky tactics that could harm your site long-term. Legitimate SEO follows the timeline search engines require to evaluate and reward websites."
            />
          </div>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Setting proper expectations from the start prevents disappointment
            and helps you evaluate your SEO investment fairly.
          </p>

          {/* Section 8: How to Know SEO Is Working */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            How to Know SEO Is Working (Before Rankings Explode)
          </h2>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Rankings are the most visible measure of SEO success, but they are
            not the only one. Here are early indicators that your SEO is
            working, even before you reach page one:
          </p>

          {/* Analytics Image */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden my-8 bg-neutral-800">
            <Image
              src="/images/blog/seo-analytics-dashboard.jpg"
              alt="Business professional analyzing SEO analytics dashboard showing traffic and performance metrics"
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 md:p-8 my-8">
            <h3 className="text-xl font-bold text-green-400 mb-4">
              Early Progress Indicators
            </h3>
            <ul className="space-y-4">
              {[
                {
                  title: "Impressions increasing",
                  desc: "Your website is appearing in more searches, even if clicks have not caught up yet. This shows Google is recognizing your relevance.",
                },
                {
                  title: "Click-through rate improving",
                  desc: "A higher percentage of people who see your listing are clicking. This indicates your titles and descriptions are compelling.",
                },
                {
                  title: "Google Business Profile activity",
                  desc: "More profile views, direction requests, and calls from your Google listing signal growing local visibility.",
                },
                {
                  title: "Keyword positions moving",
                  desc: "Even moving from position 50 to position 20 is progress. You are climbing, even if you are not on page one yet.",
                },
                {
                  title: "Lead quality improving",
                  desc: "Inquiries from people who found you through search tend to be more qualified than other sources. Better leads indicate SEO is attracting the right audience.",
                },
                {
                  title: "Organic traffic growing",
                  desc: "Steady month-over-month traffic increases, even small ones, show momentum building.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-green-400 flex-shrink-0 mt-1"
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
                  <div>
                    <strong className="text-white">{item.title}:</strong>{" "}
                    <span className="text-neutral-400">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            Tracking these metrics helps you see progress during the months when
            rankings have not yet reached their full potential. It also helps
            you evaluate whether your SEO partner is doing meaningful work.
          </p>

          {/* Section 9: Transparency */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pt-8 border-t border-white/10">
            Why Transparency Matters in SEO Partnerships
          </h2>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            SEO requires patience, which means it also requires trust. The best
            SEO relationships are built on transparency—honest communication
            about what is happening, what is working, and what to expect.
          </p>

          <div className="bg-neutral-900 border border-white/10 rounded-xl p-6 md:p-8 my-8">
            <h3 className="text-xl font-bold text-white mb-4">
              What Transparency Looks Like
            </h3>
            <ul className="space-y-4">
              {[
                {
                  title: "Clear reporting",
                  desc: "You should understand what work is being done and how it connects to your goals. No vague explanations or hidden activities.",
                },
                {
                  title: "Honest timelines",
                  desc: "A trustworthy partner will tell you upfront that results take months, not days. They will not overpromise to win your business.",
                },
                {
                  title: "Data-driven updates",
                  desc: "Regular reports showing impressions, traffic, rankings, and conversions help you see progress objectively.",
                },
                {
                  title: "Open communication",
                  desc: "Questions should be welcomed, not avoided. You should feel comfortable asking about strategy, progress, or concerns.",
                },
              ].map((item, i) => (
                <li key={i} className="text-neutral-300">
                  <strong className="text-white">{item.title}:</strong>{" "}
                  {item.desc}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            At Comcreate, we believe transparency is not just good ethics—it is
            good business. When you understand what is happening with your SEO,
            you can make better decisions, stay patient during the building
            phase, and recognize success when it arrives.
          </p>

          <p className="text-neutral-300 text-lg mb-5 leading-relaxed">
            SEO is a long-term investment. The relationship with your SEO
            partner should be built for the long term too.
          </p>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 md:p-10 mt-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Get a Realistic SEO Timeline for Your Business
            </h2>

            <p className="text-purple-100 text-lg mb-6">
              Every business is different. Your industry, competition, website
              condition, and goals all affect how quickly SEO can deliver
              results.
            </p>

            <p className="text-purple-100 mb-6">
              If you want to understand what a realistic{" "}
              <strong className="text-white">
                SEO timeline for small businesses
              </strong>{" "}
              like yours looks like, we are happy to help—with no pressure and
              no unrealistic promises.
            </p>

            <ul className="text-left max-w-md mx-auto mb-8 space-y-2">
              {[
                "Free SEO timeline assessment for your specific situation",
                "Honest evaluation of your website and competition",
                "Clear explanation of what to expect and when",
                "No obligation, no aggressive sales tactics",
              ].map((item, i) => (
                <li key={i} className="text-white flex items-center gap-2">
                  <span className="text-purple-300">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-purple-100 mb-8">
              Understanding your timeline is the first step toward making a
              confident decision about SEO.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Request Your Free Timeline Assessment
            </Link>

            <div className="mt-6 text-purple-100">
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
