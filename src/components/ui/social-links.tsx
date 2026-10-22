import { BriefcaseBusiness, Camera, GitBranch } from "lucide-react";
import { profile } from "@/data/profile";
import type { SocialKey } from "@/lib/types";

const socialItems: { key: SocialKey; label: string }[] = [
  { key: "github", label: "GitHub" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "instagram", label: "Instagram" },
  { key: "x", label: "X" },
];

function SocialGlyph({ platform }: { platform: SocialKey }) {
  if (platform === "github") return <GitBranch aria-hidden="true" />;
  if (platform === "linkedin") return <BriefcaseBusiness aria-hidden="true" />;
  if (platform === "instagram") return <Camera aria-hidden="true" />;
  return <span className="social-link__x" aria-hidden="true">X</span>;
}

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`social-links ${className}`.trim()} aria-label="Social profiles">
      {socialItems.map(({ key, label }) => {
        const href = profile.socials[key];
        return (
          <li key={key}>
            {href ? (
              <a className="social-link" href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <SocialGlyph platform={key} />
              </a>
            ) : (
              <span className="social-link social-link--placeholder" role="img" title={`${label} URL not configured`} aria-label={`${label} profile placeholder, URL not configured`}>
                <SocialGlyph platform={key} />
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
