export default function Benefits() {
  return (
    <section className="section">
      <div className="container">
        <div className="hero-grid">
          <div>
            <h2>Mengapa Memilih Seonsem?</h2>
            <p className="section-lead">
              Pendekatan kami menggabungkan estetika modern dengan performa teknis SEO yang solid.
            </p>
            <div style={{display: 'grid', gap: '1.5rem', marginTop: '2rem'}}>
              {[
                { title: "Terarah", desc: "Setiap elemen website dibuat dengan tujuan bisnis yang jelas." },
                { title: "Performa Tinggi", desc: "Website cepat, responsif, dan siap untuk update Google terbaru." },
                { title: "Transparan", desc: "Laporan berkala dan strategi yang mudah dipahami pemilik bisnis." }
              ].map((item, i) => (
                <div key={i}>
                  <h4 style={{marginBottom: '0.25rem', color: 'var(--primary)'}}>{item.title}</h4>
                  <p style={{fontSize: '0.95rem', color: 'var(--muted)'}}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card" style={{background: 'var(--dark)', color: '#fff'}}>
            <h3 style={{marginBottom: '1.5rem'}}>Hasil Yang Terukur</h3>
            <div style={{display: 'grid', gap: '2rem'}}>
              <div>
                <span style={{fontSize: '2.5rem', fontWeight: '800', display: 'block'}}>250%</span>
                <p style={{color: '#94a3b8'}}>Rata-rata kenaikan traffic organik dalam 6 bulan.</p>
              </div>
              <div style={{height: '1px', background: 'rgba(255,255,255,0.1)'}}></div>
              <div>
                <span style={{fontSize: '2.5rem', fontWeight: '800', display: 'block'}}>15+</span>
                <p style={{color: '#94a3b8'}}>Industri yang telah kami bantu untuk go-digital.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
