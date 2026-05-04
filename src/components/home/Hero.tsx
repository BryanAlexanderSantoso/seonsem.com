import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">🚀 Ranking Naik, Bisnis Ikut Naik</span>
          <h1>Website Anda Tidak Akan Menghasilkan Apa-Apa Jika <span style={{color: 'var(--primary)'}}>Tidak Muncul di Google</span></h1>
          <p className="lead">
            Banyak bisnis sudah punya website… Tapi tetap sepi pengunjung, sepi order, dan tidak menghasilkan. Itu bukan karena bisnisnya jelek, tapi karena tidak dioptimasi dengan benar.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/konsultasi/">
              Cek Apakah Website Anda Sudah Siap Bersaing
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="card problem-list" style={{borderLeft: '4px solid var(--primary)'}}>
            <h3 style={{marginBottom: '1.5rem'}}>Apakah ini terjadi pada Anda?</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.25rem'}}>
              {[
                "Website sudah dibuat, tapi tidak ada yang datang",
                "Sudah coba iklan, tapi mahal dan tidak stabil",
                "Kompetitor muncul di Google, Anda tidak",
                "Sudah keluar biaya, tapi belum ada hasil"
              ].map((text, i) => (
                <div key={i} style={{display: 'flex', gap: '0.85rem', alignItems: 'flex-start'}}>
                  <span style={{color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.2rem'}}>👉</span>
                  <p style={{fontSize: '1rem', color: 'var(--text)', fontWeight: '500'}}>{text}</p>
                </div>
              ))}
            </div>
            <div style={{marginTop: '2rem', padding: '1.25rem', background: 'var(--primary-light)', borderRadius: 'var(--radius-md)'}}>
              <p style={{fontSize: '0.95rem', fontWeight: '700', color: 'var(--primary)'}}>
                Kalau iya, berarti website Anda belum bekerja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
