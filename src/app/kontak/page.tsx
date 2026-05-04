import Link from "next/link";

export default function KontakPage() {
  return (
    <div className="contact-page">
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Get In Touch</span>
          <h1>Mari Mulai Obrolan <span style={{color: 'var(--primary)'}}>Strategis Anda</span></h1>
          <p className="lead">Siap mendiskusikan bagaimana kami bisa membantu bisnis Anda tumbuh? Hubungi kami melalui saluran di bawah ini.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{gap: '4rem'}}>
            <div>
              <h2 style={{marginBottom: '2rem'}}>Hubungi Kami</h2>
              <div style={{display: 'grid', gap: '2rem'}}>
                <div className="card">
                  <h3 style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>WhatsApp Business</h3>
                  <p style={{color: 'var(--text-light)', marginBottom: '1rem'}}>Konsultasi cepat via WhatsApp.</p>
                  <a href="https://wa.me/yournumber" className="btn btn-primary" style={{width: 'fit-content'}}>Chat WhatsApp</a>
                </div>
                <div className="card">
                  <h3 style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>Email Inquiry</h3>
                  <p style={{color: 'var(--text-light)', marginBottom: '1rem'}}>Untuk kerjasama atau custom project.</p>
                  <strong>hello@seonsem.com</strong>
                </div>
                <div className="card">
                  <h3 style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>Lokasi</h3>
                  <p style={{color: 'var(--text-light)', marginBottom: '1rem'}}>Kami berbasis di Indonesia, melayani klien di seluruh dunia secara remote.</p>
                  <strong>Jawa Tengah, Indonesia</strong>
                </div>
              </div>
            </div>
            
            <div>
              <div className="card" style={{padding: '3rem'}}>
                <h2 style={{marginBottom: '1.5rem', fontSize: '1.75rem'}}>Kirim Pesan</h2>
                <p style={{marginBottom: '2.5rem', color: 'var(--text-light)'}}>Isi formulir di bawah ini, kami akan menghubungi Anda kembali dalam 1x24 jam.</p>
                <form style={{display: 'grid', gap: '1.5rem'}}>
                  <div style={{display: 'grid', gap: '0.5rem'}}>
                    <label style={{fontSize: '0.9rem', fontWeight: '600'}}>Nama Lengkap</label>
                    <input type="text" style={{padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--line)', background: 'var(--bg-soft)'}} placeholder="Nama Anda" />
                  </div>
                  <div style={{display: 'grid', gap: '0.5rem'}}>
                    <label style={{fontSize: '0.9rem', fontWeight: '600'}}>Alamat Email</label>
                    <input type="email" style={{padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--line)', background: 'var(--bg-soft)'}} placeholder="email@anda.com" />
                  </div>
                  <div style={{display: 'grid', gap: '0.5rem'}}>
                    <label style={{fontSize: '0.9rem', fontWeight: '600'}}>Kebutuhan</label>
                    <select style={{padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--line)', background: 'var(--bg-soft)'}}>
                      <option>Pembuatan Website</option>
                      <option>Jasa SEO</option>
                      <option>Revamp Website</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div style={{display: 'grid', gap: '0.5rem'}}>
                    <label style={{fontSize: '0.9rem', fontWeight: '600'}}>Pesan</label>
                    <textarea style={{padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--line)', background: 'var(--bg-soft)', minHeight: '120px'}} placeholder="Ceritakan kebutuhan bisnis Anda..."></textarea>
                  </div>
                  <button type="button" className="btn btn-primary">Kirim Pesan Sekarang</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
