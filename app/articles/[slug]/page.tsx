export default async function ArticlePage({params}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params;

  return (
    <main className="container mx-auto px-4 py-10 text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Статья: {slug}</h1>
    </main>
  );
}
