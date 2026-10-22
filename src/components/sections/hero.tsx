import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <section className="hero section-shell" id="home" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid container">
        <Reveal className="hero__copy">
          <p className="eyebrow hero__eyebrow"><span className="status-dot" aria-hidden="true" />{profile.eyebrow}</p>
          <h1 id="hero-title">Hi, I&apos;m <span className="hero__name">{profile.name}</span>, building <span className="accent-text">Digital Experiences.</span></h1>
          <p className="hero__description">{profile.shortIntroduction}</p>
          <div className="hero__actions">
            <ButtonLink href="#contact" variant="primary">Let&apos;s Talk <ArrowUpRight size={16} aria-hidden="true" /></ButtonLink>
            <ButtonLink href="#projects" variant="secondary">My Projects <ArrowDown size={15} aria-hidden="true" /></ButtonLink>
          </div>
        </Reveal>

        <Reveal className="hero__visual" delay={0.08}>
          <div className="hero__orb" aria-hidden="true" />
          <div className="hero__portrait-frame">
            <Image
              src={profile.portrait}
              alt={profile.portraitAlt}
              fill
              priority
              sizes="(max-width: 760px) 76vw, 42vw"
              className="hero__portrait"
            />
          </div>
          <div className="hero__visual-caption">{profile.portraitNote}</div>
          {profile.heroStatistics.map((stat, index) => (
            <div className={`floating-stat floating-stat--${index + 1}`} key={stat.label}>
              <span className="floating-stat__value">{stat.value}</span>
              <span className="floating-stat__label">{stat.label}</span>
            </div>
          ))}
          <span className="hero__orbit hero__orbit--one" aria-hidden="true" />
          <span className="hero__orbit hero__orbit--two" aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}
