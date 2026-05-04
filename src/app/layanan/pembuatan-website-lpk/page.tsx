import Link from "next/link";

export default function LPKPage() {
  const problems = [
    "Tidak muncul di pencarian Google",
    "Website tidak menjelaskan program dengan jelas",
    "Calon siswa bingung harus mulai dari mana",
    "Tidak ada alur yang mengarahkan ke pendaftaran",
    "Informasi tersebar di banyak tempat (tidak terstruktur)"
  ];

  const valueStack = [
    { title: "Website Profesional & Modern", desc: "Meningkatkan kepercayaan sejak pertama kali dilihat" },
    { title: "Struktur Program yang Jelas", desc: "Membantu calon siswa memahami tanpa harus bertanya berulang" },
    { title: "Halaman Khusus Program", desc: "Jepang / Korea / dll — lebih fokus dan lebih mudah dipahami" },
    { title: "Integrasi WhatsApp", desc: "Calon siswa bisa langsung menghubungi tanpa hambatan" },
    { title: "SEO Dasar (Google Visibility)", desc: "Membantu LPK lebih mudah ditemukan di pencarian" }
  ];

  const process = [
    { title: "Pemahaman Kebutuhan & Tujuan", desc: "Tahap awal dimulai dengan memahami kondisi dan kebutuhan LPK secara menyeluruh." },
    { title: "Perancang Struktur yang Tepat", desc: "Kami menyusun struktur website berdasarkan alur berpikir calon siswa." },
    { title: "Pengembangan Website", desc: "Website mulai dikembangkan dengan fokus pada kecepatan dan UI profesional." },
    { title: "Integrasi Sistem", desc: "Integrasi WhatsApp, form pendaftaran, dan database leads." },
    { title: "Finalisasi & Peluncuran", desc: "Pengecekan akhir untuk memastikan semua fitur berjalan sempurna." }
  ];

  return (
    <div className="lpk-service-page">
      {/* Hero */}
      <section className="hero" style={{background: 'var(--primary-light)'}}>
        <div className="container" style={{textAlign: 'center', maxWidth: '900px'}}>
          <span className="eyebrow">🧩 Solusi Digital Khusus LPK</span>
          <h1 style={{fontSize: 'clamp(2.5rem, 6vw, 4rem)'}}>Banyak LPK Kehilangan Calon Siswa Setiap Hari <span style={{color: 'var(--primary)'}}>Tanpa Disadari</span></h1>
          <p className="lead" style={{margin: '0 auto 2.5rem'}}>
            Website yang tidak dirancang dengan benar bukan hanya “tidak efektif” — tapi bisa membuat calon siswa pergi ke LPK lain dalam hitungan detik. Kami membantu LPK membangun website yang bekerja sebagai sistem pendaftaran.
          </p>
          <div className="cta-row" style={{justifyContent: 'center'}}>
            <Link className="btn btn-primary" href="/konsultasi/">
              Konsultasi Gratis Sekarang
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section">
        <div className="container">
          <div className="hero-grid">
            <div className="card" style={{borderLeft: '4px solid #ef4444'}}>
              <h2 style={{fontSize: '1.75rem', marginBottom: '1.5rem'}}>Website LPK Saat Ini Sering Tidak Bekerja Seperti Seharusnya</h2>
              <p style={{marginBottom: '1.5rem', color: 'var(--muted)'}}>Banyak LPK memiliki program yang bagus, namun:</p>
              <ul style={{listStyle: 'none', padding: 0, display: 'grid', gap: '1rem'}}>
                {problems.map(p => (
                  <li key={p} style={{display: 'flex', gap: '0.75rem'}}>
                    <span style={{color: '#ef4444'}}>✕</span> {p}
                  </li>
                ))}
              </ul>
              <p style={{marginTop: '2rem', fontWeight: '700'}}>👉 Akibatnya: calon siswa membandingkan dan memilih LPK lain yang lebih jelas secara online.</p>
            </div>
            <div>
              <h2>Calon Siswa Tidak Memilih Secara Acak</h2>
              <p className="section-lead">Dari pola yang kami pelajari, calon siswa selalu melewati proses yang sama:</p>
              <div style={{display: 'grid', gap: '1rem', marginTop: '2rem'}}>
                {["Mencari informasi di Google", "Membandingkan beberapa LPK", "Menilai kejelasan program", "Mengecek kredibilitas", "Baru menghubungi via WhatsApp"].map((step, i) => (
                  <div key={i} style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                    <span style={{width: '24px', height: '24px', background: 'var(--primary)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold'}}>{i+1}</span>
                    <p style={{fontWeight: '500'}}>{step}</p>
                  </div>
                ))}
              </div>
              <p style={{marginTop: '2rem', padding: '1rem', border: '1px dashed var(--line)', borderRadius: 'var(--radius-md)', fontSize: '0.95rem'}}>
                <strong>Artinya:</strong> Website bukan sekadar “informasi”, tapi bagian dari proses pengambilan keputusan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section section-dark">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2>Kami Membangun Website LPK Sebagai Sistem, Bukan Sekadar Tampilan</h2>
            <p className="section-lead" style={{margin: '0 auto'}}>Mengubah pengunjung menjadi calon siswa yang aktif menghubungi LPK Anda.</p>
          </div>
          <div className="grid-3">
            {valueStack.map(item => (
              <div key={item.title} className="card">
                <h3 style={{fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--primary)'}}>{item.title}</h3>
                <p style={{fontSize: '0.95rem', color: 'var(--muted)'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <div className="container">
          <div className="card" style={{padding: '4rem', background: '#f8fafc'}}>
            <h2 style={{textAlign: 'center', marginBottom: '3rem'}}>🔍 Pengalaman di Ekosistem LPK & Sistem Pendaftaran</h2>
            <div className="grid-2">
              <div>
                <p style={{lineHeight: '1.8', color: 'var(--muted)'}}>
                  Kami memiliki pengalaman nyata dalam mengembangkan website untuk LPK Bhinneka, kekorea.com, dan epstopik.id. Kami memahami bagaimana calon siswa mencari informasi, membandingkan program, hingga akhirnya mendaftar.
                </p>
                <div style={{marginTop: '2rem', display: 'grid', gap: '1rem'}}>
                  <div className="chip">LPK Bhinneka - Sistem Leads Aktif</div>
                  <div className="chip">KeKorea.com - Platform Edukasi & Karir</div>
                  <div className="chip">EpsTopik.id - Learning Management System</div>
                </div>
              </div>
              <div className="card" style={{background: 'var(--dark)', color: '#fff'}}>
                <h3 style={{marginBottom: '1rem', color: 'var(--primary)'}}>Kesimpulan Pengalaman</h3>
                <p style={{fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.6'}}>
                  Keberhasilan website LPK ditentukan oleh bagaimana sistem tersebut membantu calon siswa menemukan informasi, mempermudah pengambilan keputusan, dan mengarahkan mereka untuk segera mendaftar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2>Proses Pengerjaan</h2>
            <p className="section-lead" style={{margin: '0 auto'}}>Sederhana, jelas, dan tidak membebani pihak LPK.</p>
          </div>
          <div style={{maxWidth: '800px', margin: '0 auto', display: 'grid', gap: '2rem'}}>
            {process.map((step, i) => (
              <div key={i} style={{display: 'flex', gap: '2rem'}}>
                <div style={{fontSize: '2rem', fontWeight: '900', color: 'var(--line)', opacity: '0.5'}}>0{i+1}</div>
                <div>
                  <h3 style={{marginBottom: '0.5rem'}}>{step.title}</h3>
                  <p style={{color: 'var(--muted)', fontSize: '0.95rem'}}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container">
          <div className="card" style={{background: 'var(--primary)', color: '#fff', textAlign: 'center', padding: '5rem 2rem'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem'}}>Siap Membangun Sistem Pendaftaran LPK Anda?</h2>
            <p style={{fontSize: '1.1rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto 2.5rem'}}>
              Konsultasikan kebutuhan LPK Anda sekarang secara gratis. Kami akan membantu merancang alur pendaftaran yang paling efektif.
            </p>
            <Link className="btn" href="/konsultasi/" style={{background: '#fff', color: 'var(--primary)', padding: '1rem 3rem', fontSize: '1.1rem'}}>
              Konsultasi via WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
