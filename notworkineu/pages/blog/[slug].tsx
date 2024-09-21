// pages/blog/[slug].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import { blogs, Blog } from "../../blogData";
import { useRouter } from "next/router";

interface BlogPageProps {
  blog: Blog | null;
}

const BlogPage = ({ blog }: BlogPageProps) => {
  const router = useRouter();

  if (!blog) return <div>Blog not found</div>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p>
        Written by {blog.author} on {blog.date}
      </p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params!;
  const blog = blogs.find((b) => b.slug === slug) || null;
  return { props: { blog } };
};

export default BlogPage;
