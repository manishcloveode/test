import BlogGrid from "@/components/blogs/blog-grid";
import HeaderBanner from "@/components/common/header-banner";
import CTASection from "@/components/home/cta";
import FAQSection from "@/components/home/faq";

export default function Blog() {
  return (
    <>
      <HeaderBanner
        pageName="Blogs"
        backgroundImage="/img/blog.webp"
        height="h-96"
      />
      <BlogGrid />
      <CTASection />
      <FAQSection />
    </>
  );
}
