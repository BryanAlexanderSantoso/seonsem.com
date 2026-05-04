"use client";

import CardNav from './CardNav/CardNav';

const Header = () => {
  const items = [
    {
      label: "Layanan",
      bgColor: "var(--dark)",
      textColor: "#fff",
      links: [
        { label: "Web Dev", href: "/layanan/pembuatan-website/", ariaLabel: "Jasa Pembuatan Website" },
        { label: "SEO", href: "/layanan/jasa-seo/", ariaLabel: "Jasa SEO Terarah" },
        { label: "LPK", href: "/layanan/pembuatan-website-lpk/", ariaLabel: "Website Khusus LPK" }
      ]
    },
    {
      label: "Showcase", 
      bgColor: "var(--primary)",
      textColor: "#fff",
      links: [
        { label: "Portofolio", href: "/portofolio/", ariaLabel: "Hasil Project Kami" },
        { label: "Blog", href: "/blog/", ariaLabel: "Edukasi & Insight" }
      ]
    },
    {
      label: "Agency",
      bgColor: "#f8fafc", 
      textColor: "var(--dark)",
      links: [
        { label: "Tentang", href: "/tentang-kami/", ariaLabel: "Tentang Seonsem" },
        { label: "Kontak", href: "/kontak/", ariaLabel: "Hubungi Kami" }
      ]
    }
  ];

  return (
    <CardNav
      logo="/logo.png"
      items={items}
      baseColor="rgba(241, 245, 249, 0.7)"
      menuColor="var(--dark)"
      buttonBgColor="var(--primary)"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default Header;
