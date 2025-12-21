import ArticleLabel from "@/components/ArticleLabel";
import Article from "@/types/Article";

const articles: Article[] = [
  {
    slug: "railway-boom-19-century",
    title: "Железнодорожный бум XIX века",
    description:
      "Как развитие железных дорог повлияло на транспорт и экономику.",
  },
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