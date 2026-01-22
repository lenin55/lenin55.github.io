import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import FeaturedProjects from '@/components/FeaturedProjects';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import Background3D from '@/components/Background3D';

export default function Home() {
  return (
    <main className="mainContainer">
      <Background3D />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <FeaturedProjects />
      <Services />
      <Footer />
    </main>
  );
}
