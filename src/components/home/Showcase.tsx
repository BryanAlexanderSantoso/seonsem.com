export default function Showcase() {
  return (
    <section className="section section-dark">
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <span className="eyebrow">Real Results</span>
          <h2>Before vs After SEO</h2>
          <p className="section-lead" style={{margin: '0 auto'}}>Lihat bagaimana transformasi digital yang tepat dapat mengubah performa bisnis Anda secara drastis.</p>
        </div>
        
        <div className="grid-2">
          <div className="card" style={{padding: '0', overflow: 'hidden'}}>
            <div style={{padding: '1.5rem', background: '#fee2e2', color: '#991b1b', fontWeight: '700', textAlign: 'center'}}>BEFORE (Tanpa SEO)</div>
            <div style={{padding: '2rem'}}>
              <div style={{height: '200px', display: 'flex', alignItems: 'flex-end', gap: '4px', marginBottom: '1.5rem'}}>
                {[20, 15, 25, 10, 18, 12, 15].map((h, i) => (
                  <div key={i} style={{flex: 1, height: `${h}%`, background: '#fca5a5', borderRadius: '2px'}}></div>
                ))}
              </div>
              <ul style={{listStyle: 'none', padding: 0, fontSize: '0.9rem', color: 'var(--text-light)'}}>
                <li style={{marginBottom: '0.5rem'}}>✕ Ranking halaman 10+ Google</li>
                <li style={{marginBottom: '0.5rem'}}>✕ Traffic bulanan: &lt; 50 pengunjung</li>
                <li>✕ Leads/Order: Hampir nol</li>
              </ul>
            </div>
          </div>

          <div className="card" style={{padding: '0', overflow: 'hidden', borderColor: 'var(--primary)', borderWidth: '2px'}}>
            <div style={{padding: '1.5rem', background: 'var(--primary)', color: '#fff', fontWeight: '700', textAlign: 'center'}}>AFTER (Dengan Seonsem)</div>
            <div style={{padding: '2rem'}}>
              <div style={{height: '200px', display: 'flex', alignItems: 'flex-end', gap: '4px', marginBottom: '1.5rem'}}>
                {[30, 45, 60, 55, 80, 95, 100].map((h, i) => (
                  <div key={i} style={{flex: 1, height: `${h}%`, background: 'var(--primary)', borderRadius: '2px'}}></div>
                ))}
              </div>
              <ul style={{listStyle: 'none', padding: 0, fontSize: '0.9rem', fontWeight: '600'}}>
                <li style={{marginBottom: '0.5rem', display: 'flex', gap: '0.5rem'}}><span style={{color: 'var(--primary)'}}>✓</span> Dominasi Halaman 1 Google</li>
                <li style={{marginBottom: '0.5rem', display: 'flex', gap: '0.5rem'}}><span style={{color: 'var(--primary)'}}>✓</span> Kenaikan Traffic &gt; 500%</li>
                <li style={{display: 'flex', gap: '0.5rem'}}><span style={{color: 'var(--primary)'}}>✓</span> Leads Masuk Setiap Hari</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{marginTop: '4rem', padding: '2rem', background: '#fff', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)'}}>
          <div className="grid-2" style={{alignItems: 'center'}}>
            <div>
              <h3 style={{marginBottom: '1rem'}}>Mini Case Study: LPK Bhinneka</h3>
              <p style={{fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: '1.8'}}>
                Melalui optimasi struktur informasi dan integrasi sistem pendaftaran WhatsApp, LPK Bhinneka berhasil meningkatkan jumlah pendaftar online hingga 3x lipat dalam waktu kurang dari 4 bulan tanpa menambah budget iklan.
              </p>
            </div>
            <div style={{textAlign: 'right'}}>
              <div style={{fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)'}}>+300%</div>
              <p style={{fontWeight: '700', color: 'var(--dark)'}}>Peningkatan Leads</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
