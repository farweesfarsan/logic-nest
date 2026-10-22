"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  X,
  Send,
  MessageCircle,
} from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";

// Replace this with your WhatsApp number.
// Use international format without +, spaces, or dashes.
const whatsappNumber = "94741379108";

export function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isWhatsAppConfirmOpen, setIsWhatsAppConfirmOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  useEffect(() => {
    if (!isOpen && !isWhatsAppConfirmOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setIsWhatsAppConfirmOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isWhatsAppConfirmOpen]);



async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  setIsSending(true);
  setSubmitStatus("");

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        phone,
        whatsapp,
        message,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to send your message.");
    }

    setSubmitStatus("Your message has been sent successfully!");
    setEmail("");
    setPhone("");
    setWhatsapp("");
    setMessage("");
  } catch (error) {
    setSubmitStatus(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  } finally {
    setIsSending(false);
  }
}


  function handleWhatsAppContinue() {
    const number = whatsappNumber.replace(/\D/g, "");

    if (!number || number.includes("X")) {
      alert("Please configure your WhatsApp number in contact.tsx.");
      return;
    }

    window.location.href = `https://wa.me/${number}`;
  }

  return (
    <section
      className="section-shell section-shell--space"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <Reveal>
          <div className="contact-banner">
            <div className="contact-banner__pattern" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div className="contact-banner__copy">
              <p className="eyebrow">HAVE A PROJECT IN MIND?</p>

              <h2 id="contact-title">
                Your vision, my expertise.
                <br />
                Let&apos;s create <span>something exceptional.</span>
              </h2>

              <p>
                Have a project in mind? Let&apos;s discuss how we can turn your
                ideas into a meaningful digital experience.
              </p>

              {profile.showAvailability ? (
                <span className="availability">
                  <span className="status-dot" aria-hidden="true" />
                  {profile.availability}
                </span>
              ) : null}
            </div>

            <div className="contact-banner__actions">
              <button
                className="button button--light"
                type="button"
                onClick={() => setIsOpen(true)}
              >
                <Mail size={15} aria-hidden="true" />
                Let&apos;s Talk
                <ArrowUpRight size={15} aria-hidden="true" />
              </button>

              <button
                className="button button--whatsapp"
                type="button"
                onClick={() => setIsWhatsAppConfirmOpen(true)}
              >
                <MessageCircle size={16} aria-hidden="true" />
                WhatsApp
                <ArrowUpRight size={15} aria-hidden="true" />
              </button>

              <ButtonLink href="#projects" variant="contact-quiet">
                View My Work
                <ArrowDown size={15} aria-hidden="true" />
              </ButtonLink>

              <span className="contact-banner__email">
                {profile.email || "Contact email not configured"}
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Email contact popup */}
      {isOpen && (
        <div
          className="contact-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div
            className="contact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          >
            <button
              className="contact-modal__close"
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close contact form"
            >
              <X size={20} />
            </button>

            <div className="contact-modal__icon">
              <Mail size={22} />
            </div>

            <p className="eyebrow">LET&apos;S CONNECT</p>
            <h2 id="contact-modal-title">Send me a message</h2>

            <p className="contact-modal__description">
              Tell me a little about your project. I&apos;d love to hear from you.
            </p>

            <form className="contact-modal__form" onSubmit={handleSubmit}>
              <label htmlFor="contact-email">Your email address</label>
              <input
                id="contact-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                required
              /> 
              <label htmlFor="contact-phone">Phone Number</label>
              <input
                id="contact-phone"
                type="tel"
                placeholder=""
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                autoComplete="tel"
                maxLength={25}
                required
              />

              <label htmlFor="contact-whatsapp">
                WhatsApp Number 
              </label>
              <input
                id="contact-whatsapp"
                type="tel"
                placeholder=""
                value={whatsapp}
                onChange={(event) => setWhatsapp(event.target.value)}
                autoComplete="tel"
                maxLength={25}
              />


              <label htmlFor="contact-message">Your message</label>
              <textarea
                id="contact-message"
                placeholder="Tell me about your project..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={5}
                required
              />


              <button
                className="button button--primary contact-modal__submit"
                type="submit"
                disabled={isSending}
              >
                <Send size={15} aria-hidden="true" />
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {submitStatus && (
                <p role="status" aria-live="polite">
                  {submitStatus}
                </p>
              )}

            </form>

          <p className="contact-modal__note">
            Your message will be sent directly to my inbox.
          </p>
          </div>
        </div>
      )}

      {/* WhatsApp confirmation popup */}
      {isWhatsAppConfirmOpen && (
        <div
          className="contact-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsWhatsAppConfirmOpen(false);
            }
          }}
        >
          <div
            className="contact-modal contact-modal--confirmation"
            role="dialog"
            aria-modal="true"
            aria-labelledby="whatsapp-modal-title"
          >
            <button
              className="contact-modal__close"
              type="button"
              onClick={() => setIsWhatsAppConfirmOpen(false)}
              aria-label="Close WhatsApp confirmation"
            >
              <X size={20} />
            </button>

            <div className="contact-modal__icon contact-modal__icon--whatsapp">
              <MessageCircle size={24} />
            </div>

            <p className="eyebrow">WHATSAPP</p>

            <h2 id="whatsapp-modal-title">Let&apos;s chat!</h2>

            <p className="contact-modal__description">
              Would you like to continue to WhatsApp and start a conversation
              with me?
            </p>

            <div className="contact-modal__actions">
              <button
                className="button button--secondary"
                type="button"
                onClick={() => setIsWhatsAppConfirmOpen(false)}
              >
                Cancel
              </button>

              <button
                className="button button--whatsapp"
                type="button"
                onClick={handleWhatsAppContinue}
              >
                <MessageCircle size={16} aria-hidden="true" />
                OK, Continue
              </button>
            </div>

            <p className="contact-modal__note">
              You&apos;ll be redirected to WhatsApp.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
