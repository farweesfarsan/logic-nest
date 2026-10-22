import { ArrowUpRight } from "lucide-react";
import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";

export function ProcessSection() {
  return (
    <section className="section-shell section-shell--space" id="process" aria-labelledby="process-title">
      <div className="container">
        <Reveal><SectionHeading id="process-title" eyebrow="HOW WE WORK" title="Process" description="A clear and collaborative approach to transforming ideas into meaningful digital experiences." /></Reveal>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.05}>
              <article className="process-card">
                <span className="process-card__number" aria-hidden="true">{step.number}</span>
                <span className="process-card__eyebrow">PHASE {step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <span className="process-card__rule" aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>
        <div className="process-cta">
          <p>Let&apos;s build something exceptional together.</p>
          <ButtonLink href="#contact" variant="secondary">Start a Project <ArrowUpRight size={15} aria-hidden="true" /></ButtonLink>
        </div>
      </div>
    </section>
  );
}
