import Link from "next/link";

export default function KonsultasiPage() {
  const steps = [
    { title: "Isi Formulir", desc: "Ceritakan sedikit tentang bisnis dan kendala digital yang Anda alami." },
    { title: "Analisa Singkat", desc: "Tim kami akan melakukan audit cepat pada website atau niche pasar Anda." },
    { title: "Diskusi Strategis", desc: "Kita akan jadwalkan sesi diskusi (Zoom/WhatsApp) untuk menyusun strategi." }
  ];

  return (
    <div className="consultation-page">
      <section className="hero" style={{background: 'linear-gradient(135deg, var(--primary-light), #fff)', padding: '8rem 0'}}>
        <div className="container" style={{textAlign: 'center', maxWidth: '800px'}}>
          <span className="eyebrow">Free Audit & Strategy</span>
          <h1>Dapatkan Analisa Website <span style={{color: 'var(--primary)'}}>Gratis Hari Ini</span></h1>
          <p className="lead" style={{margin: '0 auto 2.5rem'}}>
            Jangan menebak-nebak apa yang salah dengan website Anda. Biarkan tim ahli kami memberikan gambaran nyata dan solusi yang terarah untuk bisnis Anda.
          </p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '1rem'}}>
            <a href="https://wa.me/yournumber" className="btn btn-primary" style={{padding: '1rem 2.5rem'}}>Mulai Chat via WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3" style={{gap: '3rem'}}>
            {steps.map((step, i) => (
              <div key={i} style={{textAlign: 'center'}}>
                <div style={{width: '64px', height: '64px', background: 'var(--primary)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: '900', margin: '0 auto 1.5rem'}}>
                  {i+1}
                </div>
                <h3 style={{marginBottom: '0.75rem'}}>{step.title}</h3>
                <p style={{color: 'var(--text-light)', fontSize: '0.95rem'}}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="card" style={{maxWidth: '700px', margin: '0 auto', padding: '4rem'}}>
            <h2 style={{textAlign: 'center', marginBottom: '1rem'}}>Formulir Konsultasi</h2>
            <p style={{textAlign: 'center', color: 'var(--text-light)', marginBottom: '3rem'}}>Lengkapi data berikut untuk mendapatkan jadwal diskusi.</p>
            
            <form style={{display: 'grid', gap: '1.5rem'}}>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem'}}>
                <div style={{display: 'grid', gap: '0.5rem'}}>
                  <label style={{fontSize: '0.9rem', fontWeight: '600'}}>Nama Lengkap</label>
                  <input type="text" style={{padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--line)'}} placeholder="Nama Anda" />
                </div>
                <div style={{display: 'grid', gap: '0.5rem'}}>
                  <label style={{fontSize: '0.9rem', fontWeight: '600'}}>Nomor WhatsApp</label>
                  <input type="text" style={{padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--line)'}} placeholder="0812..." />
                </div>
              </div>
              <div style={{display: 'grid', gap: '0.5rem'}}>
                <label style={{fontSize: '0.9rem', fontWeight: '600'}}>URL Website (Opsional)</label>
                <input type="text" style={{padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--line)'}} placeholder="https://website-anda.com" />
              </div>
              <div style={{display: 'grid', gap: '0.5rem'}}>
                <label style={{fontSize: '0.9rem', fontWeight: '600'}}>Apa tantangan terbesar bisnis Anda saat ini?</label>
                <textarea style={{padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--line)', minHeight: '100px'}} placeholder="Contoh: Website sepi pengunjung, ingin naik halaman 1 Google..."></textarea>
              </div>
              <button type="button" className="btn btn-primary" style={{padding: '1rem'}}>Kirim Permintaan Konsultasi</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
