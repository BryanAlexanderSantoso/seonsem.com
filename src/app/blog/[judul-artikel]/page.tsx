import SimplePage from "@/components/SimplePage";

type BlogArticlePageProps = {
  params: Promise<{ "judul-artikel": string }>;
};

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const slug = (await params)["judul-artikel"];

  return (
    <SimplePage
      title={`Artikel: ${slug}`}
      description="Halaman detail artikel. Konten dapat diisi dengan format SEO-friendly untuk mendukung ranking organik."
    />
  );
}
