import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function TestimonialsSection() {
  return (
    <section className="section-shell section-shell--space" id="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <Reveal><SectionHeading id="testimonials-title" eyebrow="SAMPLE FEEDBACK" title="Testimonials" description="Sample testimonial cards illustrate the layout; replace them with approved client feedback before publishing." /></Reveal>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={(index % 3) * 0.04}>
              <article className="testimonial-card">
                <div className="testimonial-card__top"><Quote size={17} aria-hidden="true" /><span>SAMPLE</span></div>
                <p className="testimonial-card__quote">“{item.quote}”</p>
                <div className="testimonial-card__person">
                  <span className="testimonial-card__avatar" aria-hidden="true">{item.initials}</span>
                  <span><strong>{item.name}</strong><small>{item.role}</small></span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="testimonial-note">All feedback shown is demo copy. Replace only with approved testimonials and permission.</p>
      </div>
    </section>
  );
}
