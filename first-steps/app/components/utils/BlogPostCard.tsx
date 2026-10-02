import type { BlogPost } from "../../types/blog";

function BlogPostCard({ title, paragraphs }: BlogPost) {

    return (
        <div className="mx-auto max-w-3xl px-6 py-12">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {title}
            </h1>
            {paragraphs.map((paragraph, index) => (
                <p key={paragraph} className={index === 0 ? "mb-4 text-lg leading-8 text-gray-600" : "text-lg leading-8 text-gray-600"}>
                    {paragraph}
                </p>
            ))}
        </div>
    );
}

export default BlogPostCard;
