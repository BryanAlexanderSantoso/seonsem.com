import Link from "next/link";

export default function TentangKamiPage() {
  const values = [
    { title: "Terukur & Terarah", desc: "Kami tidak bekerja berdasarkan asumsi. Setiap strategi didasarkan pada data riset pasar dan kompetitor." },
    { title: "Kualitas Premium", desc: "Setiap baris kode dan elemen desain dibuat dengan standar tinggi untuk performa maksimal." },
    { title: "Transparansi Penuh", desc: "Laporan berkala dan komunikasi terbuka adalah kunci hubungan kami dengan setiap klien." }
  ];

  return (
    <div className="about-page">
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Our Story</span>
          <h1>Partner Pertumbuhan <span style={{color: 'var(--primary)'}}>Digital Anda</span></h1>
          <p className="lead">Seonsem lahir dari visi untuk membantu UMKM dan bisnis lokal memiliki kehadiran digital yang setara dengan perusahaan besar.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{alignItems: 'center'}}>
            <div>
              <h2 style={{marginBottom: '1.5rem'}}>Misi Kami</h2>
              <p style={{lineHeight: '1.8', color: 'var(--text-light)', fontSize: '1.1rem'}}>
                Kami percaya bahwa di era digital ini, website bukan lagi sekadar brosur online. Website adalah aset bisnis yang harus mampu menghasilkan leads, pelanggan, dan pertumbuhan yang berkelanjutan.
                <br /><br />
                Misi kami adalah menjembatani celah antara teknologi rumit dengan kebutuhan pemilik bisnis yang praktis, melalui solusi web dan SEO yang mudah dipahami namun berperforma tinggi.
              </p>
            </div>
            <div className="card" style={{background: 'var(--primary)', color: '#fff'}}>
              <h3 style={{color: '#fff', marginBottom: '1.5rem'}}>Kenapa Nama Seonsem?</h3>
              <p style={{opacity: '0.9', fontSize: '1.05rem'}}>
                Nama <strong>Seonsem</strong> melambangkan dedikasi kami dalam memberikan panduan digital yang bijak dan berorientasi pada masa depan, seperti seorang "sensei" atau mentor dalam ekosistem digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2>Nilai Utama Kami</h2>
            <p className="section-lead" style={{margin: '0 auto'}}>Prinsip yang kami pegang teguh dalam setiap project yang kami kerjakan.</p>
          </div>
          <div className="grid-3">
            {values.map(v => (
              <div key={v.title} className="card">
                <h3 style={{color: 'var(--primary)', marginBottom: '1rem'}}>{v.title}</h3>
                <p style={{color: 'var(--text-light)', fontSize: '0.95rem'}}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{textAlign: 'center'}}>
          <div className="card" style={{padding: '5rem'}}>
            <h2>Siap Melangkah Bersama Kami?</h2>
            <p className="section-lead" style={{margin: '0 auto 2.5rem'}}>Mari bangun masa depan digital bisnis Anda mulai hari ini.</p>
            <Link href="/konsultasi/" className="btn btn-primary">Mulai Konsultasi Gratis</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
