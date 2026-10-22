import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { FaqSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { ProcessSection } from "@/components/sections/process";
import { ProjectsSection } from "@/components/sections/projects";
import { ServicesSection } from "@/components/sections/services";
import { StatisticsSection } from "@/components/sections/statistics";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ServicesSection />
        <StatisticsSection />
        <ProcessSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
