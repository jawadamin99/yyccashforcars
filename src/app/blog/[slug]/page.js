import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import Breadcrumb from "../../components/Breadcrumb";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const metaTitle = post.metaTitle || post.title;
  const metaDescription = post.metaDescription || post.description;
  const canonical = `https://www.yyccash.com/blog/${post.slug}`;
  const coverUrl = post.cover
    ? new URL(post.cover, "https://www.yyccash.com").toString()
    : "https://www.yyccash.com/images/gallery/g7.jpeg";

  return {
    title: `${metaTitle} | YYC Cash for Cars`,
    description: metaDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${metaTitle} | YYC Cash for Cars`,
      description: metaDescription,
      url: canonical,
      type: "article",
      images: [
        {
          url: coverUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${metaTitle} | YYC Cash for Cars`,
      description: metaDescription,
      images: [coverUrl],
    },
  };
}

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function BlogPostPage({ params }) {
  const { slug } = params;
  const post = getPostBySlug(slug);
  const allPosts = getAllPosts();
  /*const recentPosts = allPosts.filter((item) => item.slug !== slug).slice(0, 5);*/ 
  const recentPosts = allPosts.slice(0, 5);
  const canonicalUrl = post ? `https://www.yyccash.com/blog/${post.slug}` : "";
  const faqMap = {
    "how-to-sell-used-car-canada-calgary": [
      {
        question: "Is it legal to sell a used car privately in Canada?",
        answer:
          "Yes. Private vehicle sales are legal in Canada. You need a bill of sale and to transfer the vehicle registration. Requirements vary by province, and Alberta does not require a safety inspection from the seller.",
      },
      {
        question: "How long does it take to sell a used car in Alberta?",
        answer:
          "Private sales average 3-6 weeks in Calgary. Cash buyers can complete a sale in 1-2 days. Dealership trade-ins happen the same day when buying another vehicle.",
      },
      {
        question: "Do I pay taxes when selling my car privately in Canada?",
        answer:
          "No. Private vehicle sales between individuals are GST/HST exempt. In Alberta, buyers also do not pay sales tax when registering a privately purchased vehicle.",
      },
      {
        question: "Can cash for cars companies buy non-running vehicles?",
        answer:
          "Yes. Cash for cars companies buy vehicles that do not run, including cars with blown engines, transmission failure, or major accident damage. They usually provide free towing.",
      },
      {
        question: "How do I transfer car ownership in Alberta?",
        answer:
          "Sign the transfer section on the vehicle registration, give it to the buyer along with a bill of sale, and remove your plates. The buyer then registers the vehicle at a registry agent.",
      },
      {
        question: "Is it better to sell my car privately or to a dealer?",
        answer:
          "Private sales can bring the highest price but take time. Dealership trade-ins are convenient but usually pay 20-30% less. Cash buyers are ideal for speed or damaged vehicles.",
      },
    ],
    "where-to-sell-used-car-calgary": [
      {
        question: "Where is the best place to sell a used car in Calgary?",
        answer:
          "Private sales pay the most but take weeks. Cash for cars services offer the best speed-to-value balance, especially for older or damaged vehicles. Scrap yards pay the least but accept anything.",
      },
      {
        question: "Who buys junk cars in Calgary?",
        answer:
          "Cash for cars companies and scrap yards both buy junk vehicles. Cash buyers typically pay more because they resell usable parts or export vehicles.",
      },
      {
        question: "Can I sell a car without a safety inspection in Alberta?",
        answer:
          "Yes. Alberta does not require sellers to provide a safety inspection certificate. Vehicles can be sold as-is.",
      },
      {
        question: "How fast can I sell my car in Calgary?",
        answer:
          "Cash buyers typically complete sales in 24-48 hours. Private sales take about 3-6 weeks. Dealership trade-ins happen the same day when buying another vehicle.",
      },
      {
        question: "Do I need to clean my car before selling?",
        answer:
          "For private sales, presentation matters. For cash buyers, no. They purchase vehicles in any condition, including dirty or damaged.",
      },
      {
        question: "What if I still owe money on my car?",
        answer:
          "You must pay off the loan before selling. Contact your lender for the payoff amount. Some buyers can pay the lender directly and give you the difference.",
      },
    ],
    "used-car-valuation-alberta": [
      {
        question: "How much does mileage really affect used car valuation in Alberta?",
        answer:
          "Mileage matters, but total condition matters more. A higher-mileage vehicle with strong maintenance records can be worth more than a lower-mileage car with deferred maintenance.",
      },
      {
        question: "Can I sell my car with mechanical problems in Alberta?",
        answer:
          "Yes. Mechanical issues do not eliminate value. Cash for cars services buy vehicles in any condition because they evaluate parts and salvage value.",
      },
      {
        question: "How does hail damage affect my car value in Calgary?",
        answer:
          "Hail damage can reduce private sale value by 25-40% depending on severity. Cash buyers factor repair costs into offers without extreme discounts.",
      },
      {
        question: "Should I fix my car before selling it in Alberta?",
        answer:
          "Usually no. Repairs rarely return full value in the sale price. Minor cosmetic fixes can help, but major mechanical repairs often do not pay back.",
      },
      {
        question: "Is selling to YYC Cash for Cars safe and legitimate?",
        answer:
          "Yes. YYC Cash for Cars operates as a licensed Alberta business and provides quotes, towing, legal documentation, and immediate payment.",
      },
    ],
  };
  const faqSchema = post
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: (faqMap[post.slug] || []).map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;
  const jsonLd = post
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.metaDescription || post.description,
        author: {
          "@type": "Organization",
          name: "YYC Cash for Cars",
        },
        publisher: {
          "@type": "Organization",
          name: "YYC Cash for Cars",
          logo: {
            "@type": "ImageObject",
            url: "https://www.yyccash.com/images/yyc-car-logo.png",
          },
        },
        datePublished: post.date || undefined,
        mainEntityOfPage: canonicalUrl,
        image: post.cover
          ? new URL(post.cover, "https://www.yyccash.com").toString()
          : "https://www.yyccash.com/images/gallery/g7.jpeg",
      }
    : null;

  if (!post) {
    notFound();
  }

  const html = marked.parse(post.content);

  return (
    <div className="dark:bg-white">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {faqSchema && faqSchema.mainEntity.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Breadcrumb name={post.title} />
      <section className="p-4 py-16 md:p-10 lg:p-20 bg-white">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <article>
            <p className="text-sm text-gray-500 mb-3">{formatDate(post.date)}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              {post.title}
            </h1>
            {post.cover && (
              <div className="mb-8">
                <Image
                  src={post.cover}
                  alt={post.title}
                  width={1200}
                  height={700}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            )}
            <div
              className="blog-content text-black"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </article>

          <aside className="space-y-8">
            <div className="rounded-2xl border border-gray-100 shadow-lg p-6">
              <h2 className="text-lg font-bold text-black mb-4">Recent Posts</h2>
              {recentPosts.length === 0 ? (
                <p className="text-sm text-gray-600">No other posts yet.</p>
              ) : (
                <ul className="space-y-4">
                  {recentPosts.map((item) => (
                    <li key={item.slug} className="flex gap-3">
                      <Link
                        href={`/blog/${item.slug}`}
                        className="flex-shrink-0"
                      >
                        <Image
                          src={item.cover || "/images/gallery/g7.jpeg"}
                          alt={item.title}
                          width={96}
                          height={96}
                          className="h-16 w-16 rounded-lg object-cover"
                        />
                      </Link>
                      <div>
                        <Link
                          href={`/blog/${item.slug}`}
                          className="text-black hover:text-primary font-semibold"
                        >
                          {item.title}
                        </Link>
                        {item.description && (
                          <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                            {item.description}
                          </p>
                        )}
                        {item.date && (
                          <p className="text-xs text-gray-500 mt-1">
                            {formatDate(item.date)}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="rounded-2xl border border-gray-100 shadow-lg p-6">
              <h2 className="text-lg font-bold text-black mb-4">
                Area We Serve
              </h2>
              <ul className="space-y-2">
                {[
                  { name: "Calgary", href: "/locations/calgary" },
                  { name: "Airdrie", href: "/locations/airdrie" },
                  { name: "Okotoks", href: "/locations/okotoks" },
                  { name: "Cochrane", href: "/locations/cochrane" },
                  { name: "Chestermere", href: "/locations/chestermere" },
                  { name: "High River", href: "/locations/high-river" },
                  { name: "Strathmore", href: "/locations/strathmore" },
                  { name: "Canmore", href: "/locations/canmore" },
                ].map((location) => (
                  <li key={location.href}>
                    <Link
                      href={location.href}
                      className="text-black hover:text-primary font-semibold"
                    >
                      {location.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8 lg:sticky lg:top-32">
              <div className="rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
                  <p className="text-sm uppercase tracking-wide opacity-90">
                    Need a fast offer?
                  </p>
                  <h3 className="text-2xl font-bold mt-2">Call Us Now</h3>
                  <p className="text-sm opacity-95 mt-2">
                    Same-day pickup, free towing, and instant cash.
                  </p>
                  <a
                    href="tel:+15877009806"
                    className="mt-4 inline-flex items-center justify-center rounded-full bg-white text-primary font-semibold px-5 py-2 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    587-700-9806
                  </a>
                </div>
                <div className="bg-white p-6">
                  <p className="text-sm text-gray-600">
                    Serving Calgary, Airdrie, Cochrane, Okotoks & nearby towns.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 shadow-lg p-6">
                <h2 className="text-lg font-bold text-black mb-3">
                  Get a Quote
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Upload photos and get a quick quote from our team.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold px-5 py-2 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
