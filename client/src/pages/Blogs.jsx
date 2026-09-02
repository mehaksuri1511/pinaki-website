import BlogsHero from "../components/blogs/BlogHero";
import FeaturedBlog from "../components/blogs/FeaturedBlog";
import BlogGrid from "../components/blogs/BlogGrid";
import Newsletter from "../components/blogs/Newsletter";

const Blogs = () => {
  return (
    <main className="overflow-x-hidden">
      <BlogsHero />
      <FeaturedBlog />
      <BlogGrid/>
      <Newsletter />
    </main>
  );
};

export default Blogs;