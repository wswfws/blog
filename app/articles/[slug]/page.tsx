import whyLazyToWriteBlogPost from "@/articles/why-lazy-to-write-blog-post";
import IArticle from "@/types/IArticle";

export default async function ArticlePage({params}: {
  params: Promise<{ slug: string }>
}) {

  const {slug} = await params;

  const article = [whyLazyToWriteBlogPost].find(a => a.slug === slug) as IArticle;

  return (
    <main className="container mx-auto px-4 py-10 text-gray-200">
      <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
      <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{__html: article.text}}/>
    </main>
  );
}
