import type { HeroStatistic, SocialKey } from "@/lib/types";

export const profile = {
  name: "FARWEES",
  brand:"",
  title: "Full-Stack Developer",
  eyebrow: "CREATIVE DEVELOPER & DIGITAL DESIGNER",
  location: "Wellawatte,Colombo 06, Srilanka",
  profileCardIntroduction: "A replaceable profile starter for a developer who builds thoughtful digital experiences.",
  email: "farweesfarsan01@gmail.com",
  shortIntroduction:
    "I create modern websites, intuitive digital products, and high-performance web experiences that help businesses grow.",
  aboutIntroduction:
    "I'm a developer passionate about building elegant, high-performance digital experiences. I enjoy solving complex problems, creating intuitive interfaces, and turning ideas into useful products.",
  portrait: "/images/demo-portrait.webp",
  portraitAlt: "Fictional sample developer portrait; replace with your own photo",
  portraitNote: "Full Stack Developer & Business Developer",
  resumeUrl: "",
  socials: {
    github: "https://github.com/farweesfarsan",
    linkedin: "https://www.linkedin.com/in/farwees-farsan/",
    instagram: "https://www.instagram.com/farwees_jr?cplk=MWxwdjVndDluZ3Zjbg==",
    x: "https://x.com/farwees_farsan",
  } satisfies Record<SocialKey, string>,
  availability: "Available for selected freelance projects.",
  showAvailability: false,
  heroStatistics: [
    { value: "100+", label: "Users Reached" },
    { value: "15+", label: "Projects Delivered" },
    { value: "3+", label: "Years Experience" },
  ] satisfies HeroStatistic[],
} as const;
