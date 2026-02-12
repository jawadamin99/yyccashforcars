import BlogList from "../../BlogList";
import { getAllPosts } from "@/lib/blog";
import { getOgImageForPath } from "@/lib/seo";

const PAGE_SIZE = 4;
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  const totalPages = Math.max(Math.ceil(getAllPosts().length / PAGE_SIZE), 1);
  const pages = [];

  for (let page = 2; page <= totalPages; page++) {
    pages.push({ page: page.toString() });
  }

  return pages;
}

export async function generateMetadata({ params }) {
  const pageNumber = parseInt(params.page, 10);
  const safePage = Number.isNaN(pageNumber) || pageNumber < 1 ? 1 : pageNumber;
  const ogImage = getOgImageForPath("blog");

  return {
    title: `Blog - Page ${safePage} | YYC Cash for Cars`,
    description: "Tips, guides, and updates from YYC Cash for Cars.",
    alternates: {
      canonical: "/blog",
    },
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title: `Blog - Page ${safePage} | YYC Cash for Cars`,
      description: "Tips, guides, and updates from YYC Cash for Cars.",
      url: `https://www.yyccash.com/blog/page/${safePage}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "YYC Cash for Cars Blog",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Blog - Page ${safePage} | YYC Cash for Cars`,
      description: "Tips, guides, and updates from YYC Cash for Cars.",
      images: [ogImage],
    },
  };
}

export default function BlogPage({ params }) {
  const pageNumber = parseInt(params.page, 10);
  const currentPage = Number.isNaN(pageNumber) || pageNumber < 1 ? 1 : pageNumber;
  const posts = getAllPosts();
  const totalPages = Math.max(Math.ceil(posts.length / PAGE_SIZE), 1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const pagedPosts = posts.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <BlogList
      posts={pagedPosts}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}
