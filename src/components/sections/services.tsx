import { Code2, MonitorSmartphone, PanelsTopLeft, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const serviceIcons: Record<(typeof services)[number]["icon"], LucideIcon> = {
  code: Code2,
  design: PanelsTopLeft,
  fullstack: MonitorSmartphone,
};

export function ServicesSection() {
  return (
    <section className="section-shell section-shell--space section-tint" id="services" aria-labelledby="services-title">
      <div className="container">
        <Reveal><SectionHeading id="services-title" eyebrow="WHAT I DO" title="Services" description="Digital solutions designed to help your business stand out and grow." /></Reveal>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal key={service.title} delay={index * 0.05}>
                <article className="service-card">
                  <div className="service-card__icon"><Icon size={24} strokeWidth={1.7} aria-hidden="true" /></div>
                  <span className="service-card__index">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ArrowUpRight className="service-card__arrow" size={17} aria-hidden="true" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
