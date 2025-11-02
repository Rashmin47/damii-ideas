// app/blog/layout.js
import FeaturedPosts from "@/components/blog-page/featured-posts";
import BlogNavigation from "@/components/blog-page/layout/blog-navigation";

export default function BlogLayout({ children }) {
  return (
    <>
      <BlogNavigation />
      <main>{children}</main>
    </>
  );
}
