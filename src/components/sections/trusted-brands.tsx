import { Reveal } from "@/components/ui/reveal";

export function TrustedBrands() {
  return (
    <section className="trusted section-shell" aria-label="Sample client wordmarks">
      <div className="container">
        <Reveal>
          <p className="eyebrow trusted__eyebrow">TRUSTED BY TEAMS AT</p>
          <p className="trusted__notice">DEMO WORDMARKS · REPLACE WITH VERIFIED CLIENTS</p>
        </Reveal>
      </div>
    </section>
  );
}
