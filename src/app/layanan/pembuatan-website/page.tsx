import Link from "next/link";

export default function WebDevPage() {
  const packages = [
    { 
      name: "BASIC WEBSITE", 
      price: "Rp 1.500.000", 
      target: "Personal, UMKM pemula, bisnis baru online",
      features: ["1–3 halaman website", "Beranda + Tentang + Kontak", "Desain simple & clean", "Mobile responsive", "Integrasi WhatsApp button", "Basic SEO setup"]
    },
    { 
      name: "COMPANY PROFILE", 
      price: "Rp 2.500.000", 
      target: "Bisnis kecil–menengah, branding profesional",
      features: ["5–7 halaman profesional", "Desain branding kuat", "Form kontak / lead capture", "WhatsApp & email integration", "Basic SEO structure", "Google Maps integration"]
    },
    { 
      name: "LANDING PAGE", 
      price: "Rp 1.800.000", 
      target: "Iklan, promo, produk tunggal, campaign",
      features: ["1 halaman fokus konversi", "Copywriting struktur AIDA", "CTA WhatsApp / order button", "Section problem-solution-benefit", "Mobile optimized (conversion first)", "Basic tracking setup"]
    },
    { 
      name: "CUSTOM WEBSITE", 
      price: "Mulai Rp 5.000.000", 
      target: "Bisnis butuh fitur khusus / sistem kompleks",
      features: ["Tanpa batasan template", "Multi-role system / fitur khusus", "UI/UX custom design", "Integrasi API", "Advanced SEO structure", "Scalability system"]
    }
  ];

  return (
    <div className="service-page">
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Jasa Pembuatan Website</span>
          <h1>Website Bukan Sekadar Ada. <span style={{color: 'var(--primary)'}}>Tapi Harus Menghasilkan.</span></h1>
          <p className="lead">Kami membangun aset digital yang dirancang untuk menarik, mengedukasi, dan mengonversi pengunjung menjadi pelanggan setia.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            {packages.map(pkg => (
              <div key={pkg.name} className="card">
                <h3 style={{color: 'var(--primary)', marginBottom: '0.5rem'}}>{pkg.name}</h3>
                <strong style={{fontSize: '1.5rem', display: 'block', marginBottom: '1rem'}}>{pkg.price}</strong>
                <p style={{fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '1.5rem'}}><strong>Target:</strong> {pkg.target}</p>
                <ul style={{listStyle: 'none', padding: 0, display: 'grid', gap: '0.5rem', marginBottom: '2rem'}}>
                  {pkg.features.map(f => (
                    <li key={f} style={{fontSize: '0.9rem'}}>✓ {f}</li>
                  ))}
                </ul>
                <Link href="/konsultasi/" className="btn btn-outline" style={{width: '100%'}}>Pesan Sekarang</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
