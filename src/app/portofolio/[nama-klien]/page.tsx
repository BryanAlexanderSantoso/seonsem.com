import SimplePage from "@/components/SimplePage";

type PortfolioClientPageProps = {
  params: Promise<{ "nama-klien": string }>;
};

export default async function PortfolioClientPage({ params }: PortfolioClientPageProps) {
  const slug = (await params)["nama-klien"];

  return (
    <SimplePage
      title={`Portofolio: ${slug}`}
      description="Detail project klien: tujuan, pendekatan, hasil implementasi, dan dampak terhadap performa digital."
    />
  );
}
