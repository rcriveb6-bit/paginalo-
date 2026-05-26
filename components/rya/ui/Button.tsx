import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "gold",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled,
  className = "",
  fullWidth,
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-xs",
    lg: "px-8 py-4 text-sm",
  };

  const classes = `${variant === "ghost" ? "btn-outline" : `btn-${variant}`} ${sizeClasses[size]} inline-flex items-center justify-center gap-2 cursor-pointer ${fullWidth ? "w-full" : ""} ${disabled ? "opacity-40 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
