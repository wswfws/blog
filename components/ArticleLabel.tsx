import Link from "next/link";
import Article from "@/types/Article";
import AppRouter from "@/components/AppRouter";

type ArticleLabelProps = {
  article: Article;
};

export default function ArticleLabel({article}: ArticleLabelProps) {
  return (
    <div
      key={article.slug}
      className="relative rounded-2xl p-1 overflow-hidden group"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 rainbow-bg-rotate transition-opacity duration-500"></div>
      <Link
        href={AppRouter.ArticleDetail(article.slug)}
        className="relative block p-4 bg-gray-800 rounded-xl"
      >
        <h2 className="text-xl font-semibold mb-2 text-white">
          {article.title}
        </h2>
        <p className="text-gray-400 text-sm">{article.description}</p>
      </Link>
    </div>
  )
}