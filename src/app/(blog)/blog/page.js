import FeaturedPosts from "@/components/blog-page/featured-posts";
import Hero from "@/components/blog-page/hero";
import { getFeaturedPosts } from "@/lib/posts-util";

export default async function BlogPage() {
  const featuredPosts = await getFeaturedPosts();
  return (
    <>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
}
