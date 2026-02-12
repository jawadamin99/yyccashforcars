import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";

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

const buildPageHref = (pageNumber) =>
  pageNumber === 1 ? "/blog" : `/blog/page/${pageNumber}`;

export default function BlogList({ posts, currentPage, totalPages }) {
  return (
    <div className="dark:bg-white">
      <Breadcrumb
        name="Blog"
        subtitle="Tips, guides, and updates from the YYC Cash for Cars team."
      />
      <h1 className="text-3xl md:text-4xl font-bold text-black text-center mt-8">
        Blog
      </h1>
      <section className="p-4 py-16 md:p-10 lg:p-20 bg-white">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div>
            {posts.length === 0 ? (
              <p className="text-center text-gray-600">
                No posts yet. Add Markdown files to `content/blog`.
              </p>
            ) : (
              <div className="grid gap-8 md:grid-cols-2">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="rounded-3xl border border-gray-100 shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-all duration-300"
                  >
                    {post.cover && (
                      <Link href={`/blog/${post.slug}`}>
                        <Image
                          src={post.cover}
                          alt={post.title}
                          width={1200}
                          height={700}
                          className="h-56 w-full object-cover"
                        />
                      </Link>
                    )}
                    <div className="p-8">
                      <p className="text-sm text-gray-500 mb-2">
                        {formatDate(post.date)}
                      </p>
                      <h2 className="text-2xl font-bold text-black mb-3">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:text-primary"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-black mb-6">{post.description}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors"
                      >
                        Read More
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 mt-12">
                <Link
                  href={buildPageHref(Math.max(currentPage - 1, 1))}
                  aria-disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                    currentPage === 1
                      ? "text-gray-400 border-gray-200 pointer-events-none"
                      : "text-black border-gray-300 hover:border-primary hover:text-primary"
                  }`}
                >
                  Prev
                </Link>
                {Array.from({ length: totalPages }).map((_, index) => {
                  const pageNumber = index + 1;
                  const isActive = pageNumber === currentPage;
                  return (
                    <Link
                      key={pageNumber}
                      href={buildPageHref(pageNumber)}
                      className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-gradient-to-r from-primary to-secondary text-white border-transparent"
                          : "text-black border-gray-300 hover:border-primary hover:text-primary"
                      }`}
                    >
                      {pageNumber}
                    </Link>
                  );
                })}
                <Link
                  href={buildPageHref(Math.min(currentPage + 1, totalPages))}
                  aria-disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                    currentPage === totalPages
                      ? "text-gray-400 border-gray-200 pointer-events-none"
                      : "text-black border-gray-300 hover:border-primary hover:text-primary"
                  }`}
                >
                  Next
                </Link>
              </div>
            )}
          </div>

          <aside className="space-y-8">
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

            <div className="rounded-2xl border border-gray-100 shadow-lg p-6">
              <h2 className="text-lg font-bold text-black mb-3">Get a Quote</h2>
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
          </aside>
        </div>
      </section>
    </div>
  );
}
