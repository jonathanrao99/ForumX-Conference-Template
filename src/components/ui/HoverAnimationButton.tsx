"use client";

import Link from "next/link";

type HoverAnimationButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function HoverAnimationButton({
  href,
  children,
  className = "",
  onClick,
}: HoverAnimationButtonProps) {
  return (
    <Link href={href} className={`btn-hover-anim ${className}`} onClick={onClick}>
      <span className="text-container">
        <span className="text">{children}</span>
      </span>
    </Link>
  );
}
