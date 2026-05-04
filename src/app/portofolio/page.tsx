import Link from "next/link";

export default function PortofolioPage() {
  const projects = [
    {
      title: "LPK Bhinneka",
      category: "Web Development & SEO",
      desc: "Transformasi digital lembaga pelatihan kerja dengan sistem pendaftaran terintegrasi yang meningkatkan leads hingga 300%.",
      tags: ["Next.js", "Lead System", "Local SEO"]
    },
    {
      title: "KeKorea.com",
      category: "Educational Platform",
      desc: "Portal informasi dan panduan karir ke Korea Selatan dengan ribuan pengunjung bulanan aktif.",
      tags: ["SEO Strategy", "Content System", "UI/UX"]
    },
    {
      title: "EpsTopik.id",
      category: "LMS Platform",
      desc: "Sistem manajemen pembelajaran (LMS) khusus persiapan ujian EPS-TOPIK dengan fitur ujian online.",
      tags: ["Custom App", "Web App", "Scalable"]
    },
    {
      title: "Mitra Edukasi",
      category: "Company Profile",
      desc: "Website profil perusahaan profesional untuk institusi pendidikan tinggi.",
      tags: ["Branding", "Corporate", "Fast Loading"]
    }
  ];

  return (
    <div className="portfolio-page">
      <section className="hero" style={{background: 'var(--bg-soft)'}}>
        <div className="container">
          <span className="eyebrow">Project Showcase</span>
          <h1>Hasil Nyata yang Kami <span style={{color: 'var(--primary)'}}>Bangun Bersama Klien</span></h1>
          <p className="lead">Kami tidak sekadar membuat website, kami membangun sistem digital yang membantu bisnis Anda mencapai target nyata.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            {projects.map((project, i) => (
              <div key={i} className="card" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                <div style={{height: '240px', background: 'var(--primary-light)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: '900', color: 'var(--primary)', opacity: '0.5'}}>
                  {project.title}
                </div>
                <div>
                  <span style={{fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase'}}>{project.category}</span>
                  <h2 style={{fontSize: '1.5rem', margin: '0.5rem 0'}}>{project.title}</h2>
                  <p style={{color: 'var(--text-light)', marginBottom: '1.5rem'}}>{project.desc}</p>
                  <div className="chip-row">
                    {project.tags.map(tag => (
                      <span key={tag} className="chip">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{textAlign: 'center'}}>
          <h2>Ingin Bisnis Anda Ada di Daftar Ini?</h2>
          <p className="section-lead" style={{margin: '0 auto 2.5rem'}}>Mari diskusikan bagaimana kami bisa membantu mendigitalisasi bisnis Anda dengan strategi yang terarah.</p>
          <Link href="/konsultasi/" className="btn btn-primary">Mulai Konsultasi Gratis</Link>
        </div>
      </section>
    </div>
  );
}
