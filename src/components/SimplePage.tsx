import Link from "next/link";

type SimplePageProps = {
  title: string;
  description: string;
};

export default function SimplePage({ title, description }: SimplePageProps) {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">SEONSEM</p>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
        <div className="cta-row">
          <Link className="btn btn-primary" href="/konsultasi/">
            Konsultasi Gratis
          </Link>
          <Link className="btn btn-outline" href="/">
            Kembali ke Home
          </Link>
        </div>
      </div>
    </main>
  );
}
