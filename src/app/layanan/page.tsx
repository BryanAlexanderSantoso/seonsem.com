import Link from "next/link";

export default function LayananPage() {
  const services = [
    {
      title: "Pembuatan Website",
      desc: "Website profesional yang dirancang untuk performa dan konversi tinggi.",
      href: "/layanan/pembuatan-website/",
      icon: "💻"
    },
    {
      title: "Jasa SEO",
      desc: "Naikkan ranking website Anda di Google dan dapatkan traffic organik melimpah.",
      href: "/layanan/jasa-seo/",
      icon: "🚀"
    },
    {
      title: "Revamp Website",
      desc: "Ubah tampilan website lama Anda menjadi modern, cepat, dan SEO-friendly.",
      href: "/layanan/revamp-website/",
      icon: "🎨"
    },
    {
      title: "Website Khusus LPK",
      desc: "Sistem pendaftaran online khusus Lembaga Pelatihan Kerja (LPK).",
      href: "/layanan/pembuatan-website-lpk/",
      icon: "🧩"
    }
  ];

  return (
    <div className="services-index">
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Solusi Digital Seonsem</span>
          <h1>Layanan yang <span style={{color: 'var(--primary)'}}>Fokus pada Hasil Bisnis</span></h1>
          <p className="lead">Kami tidak hanya membangun website, kami membangun aset digital yang bekerja untuk pertumbuhan bisnis Anda jangka panjang.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            {services.map(s => (
              <Link key={s.title} href={s.href} className="card" style={{display: 'block'}}>
                <span style={{fontSize: '2.5rem', marginBottom: '1.5rem', display: 'block'}}>{s.icon}</span>
                <h2 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>{s.title}</h2>
                <p style={{color: 'var(--muted)', marginBottom: '1.5rem'}}>{s.desc}</p>
                <span style={{color: 'var(--primary)', fontWeight: '700'}}>Lihat Detail →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{textAlign: 'center'}}>
          <h2>Bingung Memilih Layanan yang Tepat?</h2>
          <p className="section-lead" style={{margin: '0 auto 2.5rem'}}>Diskusikan kebutuhan bisnis Anda bersama kami secara gratis. Kami akan memberikan saran terbaik sesuai budget dan target Anda.</p>
          <Link href="/konsultasi/" className="btn btn-primary">Konsultasi Gratis Sekarang</Link>
        </div>
      </section>
    </div>
  );
}
