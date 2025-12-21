import ArticleLabel from "@/components/ArticleLabel";
import IArticle from "@/types/IArticle";
import whyLazyToWriteBlogPost from "@/articles/why-lazy-to-write-blog-post";

const articles: IArticle[] = [
  whyLazyToWriteBlogPost
];

export default function HomePage() {
  return (
    <main className="container min-h-screen">
      <Header/>
      <div className="flex flex-row flex-wrap">
        {articles.map((article) => <ArticleLabel article={article} key={article.slug}/>)}
      </div>
    </main>
  );
}


const Header = () => {
  return (
    <h1 className="text-3xl font-bold mb-6">Статьи</h1>
  )
}