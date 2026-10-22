import Image from "next/image";
import { ArrowUpRight, BriefcaseBusiness, Code2, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { aboutExperience, skills, techStack } from "@/data/about";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SocialLinks } from "@/components/ui/social-links";

export function AboutSection() {
  return (
    <section className="section-shell section-shell--space section-tint" id="about" aria-labelledby="about-title">
      <div className="container">
        <Reveal><SectionHeading id="about-title" eyebrow="THE PERSON BEHIND THE PIXELS" title="About Me" description="A little about my background, skills, and approach to creating meaningful digital experiences." /></Reveal>
        <div className="about-layout">
          <Reveal>
            <article className="profile-card">
              <div className="profile-card__image-wrap">
                <Image src={profile.portrait} alt={profile.portraitAlt} fill sizes="(max-width: 760px) 88vw, 360px" className="profile-card__image" />
                <span className="profile-card__image-note">{profile.portraitNote}</span>
              </div>
              <div className="profile-card__body">
                <p className="eyebrow">PROFILE · SAMPLE</p>
                <h3>{profile.name}</h3>
                <p className="profile-card__role">{profile.title}</p>
                <p className="profile-card__location"><MapPin size={14} aria-hidden="true" />{profile.location}</p>
                <p className="profile-card__intro">{profile.profileCardIntroduction}</p>
                <SocialLinks className="profile-card__socials" />
                {profile.resumeUrl ? (
                  <a className="button button--secondary profile-card__resume" href={profile.resumeUrl} target="_blank" rel="noreferrer">View My Resume <ArrowUpRight size={15} aria-hidden="true" /></a>
                ) : (
                  <button className="button button--secondary profile-card__resume is-disabled" type="button" disabled title="Add a resume URL in src/data/profile.ts">Resume link not added <span aria-hidden="true">↗</span></button>
                )}
              </div>
            </article>
          </Reveal>

          <div className="about-cards">
            <Reveal>
              <article className="about-card about-card--intro">
                <div className="about-card__icon"><Sparkles size={17} aria-hidden="true" /></div>
                <p className="eyebrow">INTRODUCTION</p>
                <h3>Hello, I&apos;m <span className="accent-text">{profile.name}</span>.</h3>
                <p>{profile.aboutIntroduction}</p>
              </article>
            </Reveal>
            <Reveal delay={0.04}>
              <article className="about-card">
                <div className="about-card__icon"><Code2 size={17} aria-hidden="true" /></div>
                <p className="eyebrow">TOOLS I WORK WITH</p>
                <h3>My Tech Stack</h3>
                <ul className="tech-list">
                  {techStack.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="about-card">
                <div className="about-card__icon"><BriefcaseBusiness size={17} aria-hidden="true" /></div>
                <h3>Experience</h3>
                <ul className="experience-list">
                  {aboutExperience.map((item) => (
                    <li key={`${item.company}-${item.period}`}>
                      <span><strong>{item.role}</strong><small>{item.company}</small></span>
                      <time>{item.period}</time>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal delay={0.12}>
              <article className="about-card about-card--skills">
                <p className="eyebrow">SELECTED CAPABILITIES</p>
                <h3>Skills</h3>
                <ul className="skill-list">
                  {skills.map((skill) => <li key={skill}><span className="skill-list__dot" aria-hidden="true" />{skill}</li>)}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
