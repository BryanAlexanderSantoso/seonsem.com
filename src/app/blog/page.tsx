import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      title: "Cara Website UMKM Muncul di Halaman Pertama Google",
      date: "Mei 04, 2026",
      category: "SEO Strategy",
      desc: "Panduan lengkap langkah demi langkah bagi pemilik bisnis lokal untuk mendominasi hasil pencarian tanpa budget iklan besar."
    },
    {
      title: "Company Profile vs Landing Page: Mana yang Bisnis Anda Butuhkan?",
      date: "April 28, 2026",
      category: "Web Development",
      desc: "Memahami perbedaan mendasar dan fungsi strategi masing-masing jenis website agar investasi Anda tidak sia-sia."
    },
    {
      title: "5 Kesalahan Fatal yang Membuat Website Sepi Leads",
      date: "April 20, 2026",
      category: "Optimization",
      desc: "Jangan sampai website Anda hanya jadi pajangan. Pelajari apa yang membuat pengunjung pergi dan cara memperbaikinya."
    },
    {
      title: "Pentingnya Mobile-First Design di Tahun 2026",
      date: "April 15, 2026",
      category: "UI/UX Design",
      desc: "Kenapa kecepatan akses dan tampilan mobile menjadi faktor kunci penentu ranking Google saat ini."
    }
  ];

  return (
    <div className="blog-page">
      <section className="hero" style={{background: 'var(--primary-light)'}}>
        <div className="container">
          <span className="eyebrow">Digital Insights</span>
          <h1>Edukasi Bisnis & <span style={{color: 'var(--primary)'}}>Strategi SEO</span></h1>
          <p className="lead">Berbagi tips, panduan, dan tren terbaru seputar dunia digital untuk membantu bisnis Anda tetap relevan.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            {posts.map((post, i) => (
              <article key={i} className="card" style={{display: 'flex', flexWrap: 'wrap', gap: '2rem'}}>
                <div style={{flex: '1 1 100%', height: '200px', background: 'var(--line)', borderRadius: 'var(--radius-md)', opacity: '0.3'}}></div>
                <div style={{flex: '1 1 100%'}}>
                  <div style={{display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary)'}}>
                    <span>{post.category}</span>
                    <span style={{color: 'var(--line)'}}>|</span>
                    <span style={{color: 'var(--text-light)'}}>{post.date}</span>
                  </div>
                  <h2 style={{fontSize: '1.5rem', marginBottom: '1rem', lineHeight: '1.4'}}>{post.title}</h2>
                  <p style={{color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem'}}>{post.desc}</p>
                  <Link href="/blog/slug/" style={{fontWeight: '700', color: 'var(--primary)', textDecoration: 'none'}}>Baca Selengkapnya →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
