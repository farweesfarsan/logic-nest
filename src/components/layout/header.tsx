"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { headerLinks } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const closeOnDesktop = () => {
      if (window.innerWidth >= 760) setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    if (window.innerWidth < 760) window.requestAnimationFrame(() => toggleRef.current?.focus());
  };

  return (
    <header className="site-header">
      <nav className="nav-shell container" aria-label="Main navigation">
        <Link className="brand-mark" href="#home" aria-label={`${profile.brand} home`} onClick={closeMenu}>
          <span className="brand-mark__dot" aria-hidden="true" />
          {profile.brand}
        </Link>

        <div className="desktop-nav">
          {headerLinks.map((link) => (
            <Link className="nav-link" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <Link className="button button--primary nav-contact" href="#contact">
          Let&apos;s Talk <ArrowUpRight size={15} aria-hidden="true" />
        </Link>

        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      <div className={`mobile-nav-wrap${open ? " is-open" : ""}`}>
        <div className="mobile-nav container" id="mobile-navigation" aria-hidden={!open}>
          {headerLinks.map((link) => (
            <Link className="mobile-nav__link" href={link.href} key={link.href} tabIndex={open ? 0 : -1} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
          <Link className="button button--primary mobile-nav__contact" href="#contact" tabIndex={open ? 0 : -1} onClick={closeMenu}>
            Let&apos;s Talk <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}
