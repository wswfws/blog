import ArticleLabel from "@/components/ArticleLabel";
import allPosts from "@/articles";

export default function HomePage() {
  return (
    <main className="container min-h-screen">
      <div className="flex flex-row flex-wrap gap-2">
        {allPosts.map((article) => <ArticleLabel article={article} key={article.slug}/>)}
      </div>
    </main>
  );
}


