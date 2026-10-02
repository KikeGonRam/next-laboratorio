import { notFound } from "next/navigation";
import BlogPostCard from "../../components/utils/BlogPostCard";
import { blogPosts } from "../../data/blog-posts";

async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {

    const { slug } = await params;
    const post = blogPosts[slug];

    if (!post) {
        notFound();
    }

    return <BlogPostCard {...post} />;
}

export default BlogPostPage;
