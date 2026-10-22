import { statistics } from "@/data/statistics";
import { Reveal } from "@/components/ui/reveal";

export function StatisticsSection() {
  return (
    <section className="section-shell stats-section" aria-label="Sample portfolio statistics">
      <div className="container">
        <Reveal>
          <div className="stats-bar">
            {statistics.map((stat) => (
              <div className="stats-bar__item" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
