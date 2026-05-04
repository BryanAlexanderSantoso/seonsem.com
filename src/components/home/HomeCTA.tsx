import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="card" style={{background: 'linear-gradient(135deg, var(--dark), var(--dark-soft))', color: '#fff', textAlign: 'center', padding: '5rem 2rem'}}>
          <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem'}}>Siap Untuk Ranking Di Halaman Pertama?</h2>
          <p style={{fontSize: '1.1rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 2.5rem'}}>
            Jangan biarkan kompetitor mengambil pelanggan Anda. Ambil langkah pertama untuk mengamankan posisi bisnis Anda di Google hari ini.
          </p>
          <div className="cta-row" style={{justifyContent: 'center'}}>
            <Link className="btn btn-primary" href="/konsultasi/">
              Mulai Konsultasi Gratis
            </Link>
            <Link className="btn btn-outline" href="/kontak/" style={{color: '#fff', borderColor: 'rgba(255,255,255,0.2)'}}>
              Tanya Dulu Aja
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
