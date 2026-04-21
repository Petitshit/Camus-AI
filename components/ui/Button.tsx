"use client";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  size = "md",
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }[size];

  const base = `inline-flex items-center gap-2 rounded-full font-sans font-medium transition-all duration-200 cursor-pointer no-underline ${sizeClasses} ${className}`;

  const styles =
    variant === "primary"
      ? {
          backgroundColor: "var(--color-accent)",
          color: "var(--color-dark)",
          border: "none",
        }
      : {
          backgroundColor: "transparent",
          color: "var(--color-text)",
          border: "1.5px solid var(--color-brown)",
        };

  const hoverClass =
    variant === "primary"
      ? "hover:opacity-90"
      : "hover:bg-surface";

  if (href) {
    return (
      <a href={href} className={`${base} ${hoverClass}`} style={styles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${hoverClass}`} style={styles}>
      {children}
    </button>
  );
}
