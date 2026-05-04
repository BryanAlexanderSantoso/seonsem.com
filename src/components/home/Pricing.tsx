import Link from "next/link";

export default function Pricing() {
  const webPricing = [
    { 
      plan: "BASIC WEBSITE", 
      price: "Rp 1.500.000", 
      detail: "Cocok untuk UMKM pemula & Bisnis baru online",
      features: ["1–3 Halaman Website", "Desain Simple & Clean", "Mobile Responsive", "Integrasi WhatsApp", "Basic SEO Setup"],
      popular: false 
    },
    { 
      plan: "COMPANY PROFILE", 
      price: "Rp 2.500.000", 
      detail: "Branding profesional untuk perusahaan & Bisnis menengah",
      features: ["5–7 Halaman (Home, About, Portfolio, dll)", "Desain Premium & Branding Kuat", "Form Kontak / Lead Capture", "Speed Optimization Dasar", "Google Maps Integration"],
      popular: true 
    },
    { 
      plan: "LANDING PAGE", 
      price: "Rp 1.800.000", 
      detail: "Fokus tinggi ke konversi untuk Ads & Campaign",
      features: ["1 Halaman Struktur Sales (AIDA)", "Copywriting Fokus Marketing", "Conversion Optimized", "Basic Tracking Setup", "Ideal untuk Google/Meta Ads"],
      popular: false 
    },
    { 
      plan: "CUSTOM WEBSITE", 
      price: "Mulai Rp 5.000.000", 
      detail: "Sistem kompleks sesuai workflow bisnis Anda",
      features: ["Tanpa Batasan Template", "Multi-role / Fitur Khusus", "Custom UI/UX Design", "Advanced SEO & Performance", "Scalable System Architecture"],
      popular: false 
    },
  ];

  const seoPricing = [
    { 
      plan: "STARTER SEO", 
      price: "Rp 1.300.000", 
      duration: "/bulan",
      detail: "Untuk website baru yang ingin mulai muncul di Google",
      features: ["2 Keyword Utama Target", "4–6 Supporting Keywords", "2 Artikel SEO / Bulan", "On-Page SEO Basic", "GSC & Audit Setup"]
    },
    { 
      plan: "GROWTH SEO", 
      price: "Rp 2.500.000", 
      duration: "/bulan",
      detail: "Target ranking halaman 1 & Traffic stabil",
      features: ["4 Keyword Utama Target", "Keyword Research & Mapping", "8 Artikel SEO / Bulan", "Backlink Building Dasar", "Technical SEO Full"]
    },
    { 
      plan: "PROFESSIONAL SEO", 
      price: "Rp 4.500.000", 
      duration: "/bulan",
      detail: "Untuk bisnis kompetitif yang ingin scaling",
      features: ["6–10 Keyword Utama", "8 Artikel SEO High-Quality", "SEO Content Strategy", "Deep Backlink Strategy", "Competitor Analysis"]
    },
    { 
      plan: "BUSINESS SEO", 
      price: "Rp 7.000.000", 
      duration: "/bulan",
      detail: "Dominasi niche pasar & Authority kuat",
      features: ["10+ Keyword Utama", "12–20 Artikel SEO / Bulan", "Content Cluster System", "Premium Backlink Strategy", "Weekly Optimization"]
    },
  ];

  return (
    <>
      <section className="section section-dark">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{marginBottom: '1rem'}}>💰 Jasa Pembuatan Website</h2>
            <p className="section-lead" style={{margin: '0 auto'}}>Website bukan sekadar ada, tapi harus menghasilkan.</p>
          </div>
          <div className="grid-4">
            {webPricing.map((item) => (
              <div key={item.plan} className={`card price-card ${item.popular ? 'popular' : ''}`} 
                style={item.popular ? {
                  background: 'linear-gradient(to bottom, #fff, var(--primary-light))',
                  borderColor: 'var(--primary)', 
                  transform: 'scale(1.05)', 
                  zIndex: '2', 
                  boxShadow: '0 20px 40px rgba(37, 99, 235, 0.2)'
                } : {}}>
                {item.popular && (
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '4px', 
                    background: 'linear-gradient(90deg, var(--primary), #6366f1)'
                  }}></div>
                )}
                {item.popular && <span style={{position: 'absolute', top: '1.25rem', right: '1.25rem', fontSize: '0.7rem', background: 'var(--primary)', color: '#fff', padding: '0.25rem 0.65rem', borderRadius: '4px', fontWeight: '800', letterSpacing: '0.05em'}}>BEST SELLER</span>}
                <h3 style={{fontSize: '0.9rem', opacity: '0.7', textTransform: 'uppercase', letterSpacing: '0.05em'}}>{item.plan}</h3>
                <strong style={{fontSize: '1.85rem', display: 'block', margin: '0.75rem 0', color: 'var(--dark)'}}>{item.price}</strong>
                <p style={{fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '2rem', minHeight: '3rem'}}>{item.detail}</p>
                <div style={{width: '100%', height: '1px', background: 'var(--line)', marginBottom: '2rem'}}></div>
                <ul style={{listStyle: 'none', padding: 0, marginBottom: '2.5rem', flex: 1, display: 'grid', gap: '0.75rem'}}>
                  {item.features.map(f => (
                    <li key={f} style={{fontSize: '0.9rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start'}}>
                      <span style={{color: 'var(--primary)', fontWeight: 'bold'}}>✓</span> 
                      <span style={{color: 'var(--text)'}}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/konsultasi/" className={`btn ${item.popular ? 'btn-primary' : 'btn-outline'}`} style={{width: '100%'}}>
                  Mulai Sekarang
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{marginBottom: '1rem'}}>🚀 Layanan SEO Bulanan</h2>
            <p className="section-lead" style={{margin: '0 auto'}}>Strategi terarah untuk meningkatkan traffic dan pelanggan secara organik.</p>
          </div>
          <div className="grid-4">
            {seoPricing.map((item) => (
              <div key={item.plan} className="card price-card">
                <h3 style={{fontSize: '1rem', opacity: '0.8'}}>{item.plan}</h3>
                <strong style={{fontSize: '1.75rem', display: 'block', margin: '0.5rem 0'}}>{item.price} <span style={{fontSize: '0.9rem', color: 'var(--muted)', fontWeight: 'normal'}}>{item.duration}</span></strong>
                <p style={{fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem', minHeight: '3rem'}}>{item.detail}</p>
                <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem', flex: 1}}>
                  {item.features.map(f => (
                    <li key={f} style={{fontSize: '0.85rem', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem'}}>
                      <span style={{color: 'var(--primary)'}}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/konsultasi/" className="btn btn-outline" style={{width: '100%'}}>
                  Mulai Optimasi
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
