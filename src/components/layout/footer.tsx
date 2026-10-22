import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { footerLinks } from "@/data/navigation";
import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/ui/social-links";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="footer-wordmark" href="#home" aria-label={`${profile.name} — back to top`}>
          {profile.name}
          <span className="footer-wordmark__period" aria-hidden="true">.</span>
        </Link>
        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link href={link.href} key={link.href}>{link.label}</Link>
          ))}
        </nav>
        <SocialLinks className="footer-socials" />
      </div>
    </footer>
  );
}
