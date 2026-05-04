export default function Brands() {
  const clientBrands = [
    "Nusa Training", "Karya Mandiri", "Mitra Edukasi", 
    "Global Skill", "Sahabat Karier", "Cakrawala Institute",
  ];

  return (
    <section className="section" style={{paddingTop: '0'}}>
      <div className="container">
        <p style={{textAlign: 'center', marginBottom: '3rem', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)'}}>
          Dipercaya Oleh Bisnis & Institusi
        </p>
        <div className="brand-grid">
          {clientBrands.map((brand) => (
            <div key={brand} className="brand-item">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
