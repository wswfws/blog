import Link from "next/link";
import IArticle from "@/types/IArticle";
import AppRouter from "@/components/AppRouter";

type ArticleLabelProps = {
  article: IArticle;
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
        className="relative block p-4 bg-[var(--palitra-2)] rounded-xl"
      >
        <h2 className="text-xl font-semibold mb-2">
          {article.title}
        </h2>
        <p className="text-[var(--palitra-4)] text-sm">{article.description}</p>
      </Link>
    </div>
  )
}