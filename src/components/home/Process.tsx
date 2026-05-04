export default function Process() {
  const proses = [
    { title: "Analisa Kebutuhan Bisnis", desc: "Memahami model bisnis dan target audiens Anda secara mendalam." },
    { title: "Riset Keyword & Kompetitor", desc: "Menganalisa keyword potensial dan memetakan kekuatan kompetitor." },
    { title: "Pembuatan / Optimasi Website", desc: "Membangun website berperforma tinggi dengan optimasi on-page penuh." },
    { title: "Implementasi SEO", desc: "Menerapkan strategi SEO teknis dan konten untuk meningkatkan ranking." },
    { title: "Monitoring Hasil", desc: "Pemantauan berkala dan penyesuaian strategi untuk hasil maksimal." },
  ];

  return (
    <section className="section section-dark">
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h2 style={{marginBottom: '1rem'}}>🧠 Cara Kerja Seonsem</h2>
          <p className="section-lead" style={{margin: '0 auto'}}>
            Semua dilakukan dengan sistem yang jelas & terarah untuk memastikan hasil yang nyata bagi bisnis Anda.
          </p>
        </div>
        <div className="grid-5" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem'}}>
          {proses.map((item, i) => (
            <div key={i} className="card" style={{padding: '1.5rem'}}>
              <span style={{fontSize: '1.5rem', marginBottom: '1rem', display: 'block', color: 'var(--primary)', fontWeight: '900'}}>{i+1}</span>
              <h3 style={{fontSize: '1.1rem', marginBottom: '0.75rem'}}>{item.title}</h3>
              <p style={{fontSize: '0.85rem', color: 'var(--muted)', lineHeight: '1.5'}}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
