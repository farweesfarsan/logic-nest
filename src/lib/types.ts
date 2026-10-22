export type SocialKey = "github" | "linkedin" | "instagram" | "x";

export interface HeroStatistic {
  value: string;
  label: string;
}


export interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  images?: string[];
  name: string;
  imageAlt: string;
  href?: string;
  imageDetails?: {
  title: string;
  category: string;
  description: string;
  technologies: string[];
}[];
}


export interface Service {
  title: string;
  description: string;
  icon: "code" | "design" | "fullstack";
}

export interface Statistic {
  value: string;
  label: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}
