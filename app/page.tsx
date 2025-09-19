import Link from "next/link";

const articles = [
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
                {articles.map((article) => (
                    <div
                        key={article.slug}
                        className="relative rounded-full p-1 overflow-hidden group"
                    >
                        {/* Псевдофон */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rainbow-bg-rotate transition-opacity duration-500"></div>

                        {/* Контент поверх */}
                        <Link
                            href={`/articles/${article.slug}`}
                            className="relative block p-6 bg-gray-800 rounded-full"
                        >
                            <h2 className="text-xl font-semibold mb-2 text-white">
                                {article.title}
                            </h2>
                            <p className="text-gray-400 text-sm">{article.description}</p>
                        </Link>
                    </div>

                ))}
            </div>
        </main>
    );
}


const Header = () => {
    return (
        <h1 className="text-3xl font-bold mb-6">Статьи</h1>
    )
}