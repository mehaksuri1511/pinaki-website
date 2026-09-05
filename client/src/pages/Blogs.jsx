import BlogsHero from "../components/blogs/BlogHero";
import FeaturedBlog from "../components/blogs/FeaturedBlog";
import BlogGrid from "../components/blogs/BlogGrid";
import Newsletter from "../components/blogs/Newsletter";
import ScrollReveal from "../components/common/ScrollReveal";

const Blogs = () => {
  return (
    <main className="overflow-x-hidden">
      <BlogsHero />

      <ScrollReveal delay={0.08} duration={1.1}>
        <FeaturedBlog />
      </ScrollReveal>

        <BlogGrid />

      <ScrollReveal delay={0.08} duration={1.15}>
        <Newsletter />
      </ScrollReveal>
    </main>
  );
};

export default Blogs;