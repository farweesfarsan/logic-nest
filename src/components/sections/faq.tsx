"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faq";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-shell section-shell--space section-tint" id="faq" aria-labelledby="faq-title">
      <div className="container faq-container">
        <Reveal><SectionHeading id="faq-title" eyebrow="GOOD TO KNOW" title="Frequently Asked Questions" description="Answers to common questions about my services and process." /></Reveal>
        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-question-${index + 1}`;
            const answerId = `faq-answer-${index + 1}`;
            return (
              <Reveal key={item.question} delay={index * 0.025}>
                <article className={`faq-item${isOpen ? " is-open" : ""}`}>
                  <h3>
                    <button
                      id={buttonId}
                      className="faq-item__trigger"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span className="faq-item__number">0{index + 1}</span>
                      <span>{item.question}</span>
                      <ChevronDown className="faq-item__chevron" size={18} aria-hidden="true" />
                    </button>
                  </h3>
                  <motion.div
                    id={answerId}
                    role="region"
                    aria-labelledby={buttonId}
                    aria-hidden={!isOpen}
                    className="faq-item__answer-wrap"
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
                    style={!isOpen ? { pointerEvents: "none" } : undefined}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
