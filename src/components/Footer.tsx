import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-info">
              <img src="/logo/seonsem.png" alt="Seonsem Logo" style={{height: '40px', width: 'auto', marginBottom: '1.5rem'}} />
              <p style={{fontSize: '0.95rem', lineHeight: '1.8', opacity: '0.8'}}>
                Partner strategis transformasi digital yang fokus pada pertumbuhan bisnis nyata melalui website modern dan SEO terarah.
              </p>
            </div>
          </div>
          <div>
            <h4>Jasa & Layanan</h4>
            <Link href="/layanan/pembuatan-website/">Pembuatan Website</Link>
            <Link href="/layanan/jasa-seo/">Jasa SEO</Link>
            <Link href="/layanan/revamp-website/">Revamp Website</Link>
            <Link href="/layanan/pembuatan-website-lpk/">Website Khusus LPK</Link>
          </div>
          <div>
            <h4>Ask AI</h4>
            <p style={{fontSize: '0.85rem', marginBottom: '1.25rem'}}>Ask AI why Seonsem might be a fit for you:</p>
            <div className="chip-row">
              <span className="chip" style={{background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)'}}>Gemini</span>
              <span className="chip" style={{background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)'}}>ChatGPT</span>
              <span className="chip" style={{background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)'}}>Claude</span>
            </div>
            <div style={{marginTop: '2rem'}}>
              <h4>Perusahaan</h4>
              <Link href="/tentang-kami/">Tentang Kami</Link>
              <Link href="/portofolio/">Portofolio</Link>
              <Link href="/blog/">Blog</Link>
            </div>
          </div>
        </div>
        <div style={{paddingTop: '3rem', marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', fontSize: '0.85rem', opacity: '0.6'}}>
          <p>&copy; {new Date().getFullYear()} Seonsem Digital Agency. Member of Digital Growth Ecosystem. All rights reserved.</p>
        </div>
      </div>

      <aside className="flyer-sticky">
        <h4 style={{marginBottom: '0.5rem', fontSize: '1rem'}}>Audit SEO Gratis</h4>
        <p style={{fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.25rem'}}>Cek performa website Anda dalam 5 menit.</p>
        <Link href="/konsultasi/" className="btn btn-primary" style={{width: '100%', fontSize: '0.85rem', padding: '0.6rem'}}>
          Ambil Audit
        </Link>
      </aside>

      <a className="whatsapp-chat" href="https://wa.me/6280000000000" target="_blank" rel="noreferrer">
        <span style={{fontSize: '1.2rem'}}>💬</span> Chat WhatsApp
      </a>
    </footer>
  );
}
