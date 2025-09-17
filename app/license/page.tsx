export default function LicensePage() {
    return (
        <main className="container mx-auto px-4 py-10 text-gray-800">
            <h1 className="text-2xl font-bold mb-4">Лицензия</h1>
            <p className="mb-4">
                Все материалы, размещённые на сайте danilthoughts.vercel.app, защищены авторским правом.
            </p>
            <p className="mb-4">
                Контент лицензирован по{" "}
                <a
                    href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                >
                    Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
                </a>
                .
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Вы можете читать и делиться ссылками на статьи.</li>
                <li>Вы обязаны указывать автора (Данил Еценков) при цитировании.</li>
                <li>Запрещается использовать материалы в коммерческих целях.</li>
                <li>Запрещается распространять изменённые версии материалов.</li>
            </ul>
            <p>
                Нарушение условий лицензии будет рассматриваться как нарушение авторских прав.
            </p>
        </main>
    );
}
