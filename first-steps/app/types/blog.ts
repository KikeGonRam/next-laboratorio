export type BlogSection = {
    href: string;
    label: string;
    description: string;
    number: string;
};

export type BlogPost = {
    title: string;
    paragraphs: string[];
};

export type BlogPostPageProps = {
    params: Promise<{
        slug: string;
    }>;
};
