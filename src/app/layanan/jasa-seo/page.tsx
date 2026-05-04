import Link from "next/link";

export default function SEOPage() {
  const tiers = [
    { 
      name: "STARTER SEO", 
      price: "Rp 1.300.000 / bln", 
      target: "Website baru / bisnis kecil mulai SEO",
      features: ["2 keyword utama target", "4–6 keyword turunan", "2 artikel SEO (800 kata)", "On-page SEO basic", "Setup Google Search Console", "Technical audit basic"]
    },
    { 
      name: "GROWTH SEO", 
      price: "Rp 2.500.000 / bln", 
      target: "Bisnis ingin naik ranking & traffic stabil",
      features: ["4 keyword utama target", "8 artikel SEO (1.000 kata)", "Keyword research & mapping", "Internal linking & Technical full", "Basic backlink building", "Laporan bulanan detail"]
    },
    { 
      name: "PROFESSIONAL SEO", 
      price: "Rp 4.500.000 / bln", 
      target: "Bisnis kompetitif / ingin scaling",
      features: ["6–10 keyword utama", "8 artikel SEO (1.200 kata)", "SEO content strategy", "Premium backlink building", "Technical SEO deep audit", "Competitor analysis detail"]
    },
    { 
      name: "BUSINESS SEO", 
      price: "Rp 7.000.000 / bln", 
      target: "Bisnis besar / dominasi niche pasar",
      features: ["10+ keyword utama", "12–20 artikel SEO (1.500 kata)", "Full SEO system strategy", "Content cluster system", "Authority building premium", "Weekly optimization"]
    }
  ];

  return (
    <div className="service-page">
      <section className="hero" style={{background: 'var(--dark)', color: '#fff'}}>
        <div className="container">
          <span className="eyebrow" style={{color: 'var(--primary)'}}>Layanan SEO Terarah</span>
          <h1>Naikkan Ranking, <span style={{color: 'var(--primary)'}}>Lipatgandakan Traffic.</span></h1>
          <p className="lead" style={{color: '#94a3b8'}}>Kami membantu bisnis Anda naik di Google melalui kombinasi optimasi website, konten SEO, dan strategi keyword yang terarah.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            {tiers.map(tier => (
              <div key={tier.name} className="card">
                <h3 style={{color: 'var(--primary)', marginBottom: '0.5rem'}}>{tier.name}</h3>
                <strong style={{fontSize: '1.5rem', display: 'block', marginBottom: '1rem'}}>{tier.price}</strong>
                <p style={{fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '1.5rem'}}><strong>Target:</strong> {tier.target}</p>
                <ul style={{listStyle: 'none', padding: 0, display: 'grid', gap: '0.5rem', marginBottom: '2rem'}}>
                  {tier.features.map(f => (
                    <li key={f} style={{fontSize: '0.9rem'}}>✓ {f}</li>
                  ))}
                </ul>
                <Link href="/konsultasi/" className="btn btn-primary" style={{width: '100%'}}>Mulai Optimasi</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
