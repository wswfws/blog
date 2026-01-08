import allPosts from "@/articles";
import "./articles.css"

export default function ArticlePage({params,}: {
  params: { slug: string };
}) {
  const {slug} = params;

  const article = allPosts.find(a => a.slug === slug);

  if (!article) {
    return (
      <main className="container mx-auto px-4 py-10 text-gray-200">
        пост не найден
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-10 text-gray-200">
      <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
      <article
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{__html: article.text}}
      />
    </main>
  );
}


export async function generateStaticParams() {
  return allPosts.map(post => ({
    slug: post.slug,
  }));
}