"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { theme } from "@/config/theme";
import Button from "@/components/ui/Button";

const links = [
  { label: "The Shift", href: "#the-shift" },
  { label: "What is GEO", href: "#what-is-geo" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Platforms", href: "#platforms" },
  { label: "Why Camus", href: "#why-camus" },
];

function TypewriterLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  const [displayed, setDisplayed] = useState(label);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (hovered) {
      let i = 0;
      setDisplayed("");
      timerRef.current = setInterval(() => {
        i++;
        setDisplayed(label.slice(0, i));
        if (i >= label.length) clearInterval(timerRef.current!);
      }, 42);
    } else {
      setDisplayed(label);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [hovered, label]);

  return (
    <a
      href={href}
      className="text-sm transition-colors duration-150 inline-block"
      style={{
        color: hovered ? "var(--color-accent)" : "var(--color-text)",
        fontFamily: "var(--font-sans)",
        textDecoration: "none",
        minWidth: `${label.length}ch`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {displayed}
      {hovered && displayed.length < label.length && (
        <span style={{ opacity: 0.4 }}>|</span>
      )}
    </a>
  );
}

interface NavProps {
  onOpenModal: () => void;
}

export default function Nav({ onOpenModal }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(240,241,242,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <Image
            src={theme.logo.src}
            alt={theme.logo.alt}
            width={theme.logo.width}
            height={theme.logo.height}
            className="h-7 w-auto"
            style={{ filter: "brightness(0) saturate(100%) invert(0%)" }}
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
          {links.map((link) => (
            <li key={link.href}>
              <TypewriterLink label={link.label} href={link.href} />
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block flex-shrink-0">
          <Button onClick={onOpenModal} size="sm">
            Get Your Free Diagnosis →
          </Button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--color-text)",
              transform: open ? "translateY(5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--color-text)",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--color-text)",
              transform: open ? "translateY(-5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{
            backgroundColor: "var(--color-bg)",
            borderColor: "var(--color-border)",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm"
              style={{ color: "var(--color-text)", textDecoration: "none" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button onClick={() => { setOpen(false); onOpenModal(); }} size="sm" className="self-start mt-2">
            Get Your Free Diagnosis →
          </Button>
        </div>
      )}
    </header>
  );
}
