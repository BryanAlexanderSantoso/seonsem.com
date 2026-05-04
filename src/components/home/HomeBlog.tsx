import Link from "next/link";

export default function HomeBlog() {
  const posts = [
    "Cara Website UMKM Muncul di Google",
    "Perbedaan Company Profile vs Landing Page",
    "Checklist SEO Dasar Bisnis Lokal"
  ];

  return (
    <section className="section">
      <div className="container">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem'}}>
          <div>
            <h2>Edukasi Bisnis Digital</h2>
            <p style={{color: 'var(--muted)'}}>Tips dan strategi SEO terbaru untuk UMKM & Perusahaan.</p>
          </div>
          <Link href="/blog/" style={{color: 'var(--primary)', fontWeight: '600'}}>Lihat Semua Artikel →</Link>
        </div>
        <div className="grid-3">
          {posts.map((post, i) => (
            <article key={i} className="card">
              <div style={{height: '180px', background: 'var(--primary-light)', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem'}}></div>
              <h3 style={{fontSize: '1.15rem', lineHeight: '1.4', marginBottom: '1rem'}}>{post}</h3>
              <Link href="/blog/judul-artikel/" style={{fontSize: '0.9rem', color: 'var(--primary)', fontWeight: '600'}}>Baca Selengkapnya →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
