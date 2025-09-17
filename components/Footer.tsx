export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-gray-300 py-6 mt-12">
            <div className="container mx-auto px-4 flex flex-col items-center gap-2 text-sm">
                <p>© {new Date().getFullYear()} Данил Еценков. Все права защищены.</p>
                <p className="text-xs text-gray-400">
                    Контент на этом сайте лицензирован по{" "}
                    <a
                        href="/license"
                        className="text-blue-400 hover:text-blue-300 underline"
                    >
                        CC BY-NC-ND 4.0
                    </a>
                </p>
            </div>
        </footer>
    );
}
