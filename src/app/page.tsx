import Hero from "@/components/home/Hero";
import Brands from "@/components/home/Brands";
import Process from "@/components/home/Process";
import Showcase from "@/components/home/Showcase";
import Benefits from "@/components/home/Benefits";
import Pricing from "@/components/home/Pricing";
import HomeBlog from "@/components/home/HomeBlog";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  const techStack = [
    "Next.js", "TypeScript", "Node.js", "Google Search Console", 
    "Google Analytics", "On-Page SEO", "Technical SEO", "API Integration"
  ];

  return (
    <div className="site-wrapper">
      <main>
        <Hero />
        <Brands />
        <Process />
        <Showcase />
        <Benefits />
        <Pricing />
        
        {/* Tech Stack */}
        <section className="section" style={{background: '#f8fafc'}}>
          <div className="container" style={{textAlign: 'center'}}>
            <h2 style={{marginBottom: '2rem'}}>Modern Tech Stack</h2>
            <div className="chip-row" style={{justifyContent: 'center'}}>
              {techStack.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <HomeCTA />
        <HomeBlog />
      </main>
    </div>
  );
}
