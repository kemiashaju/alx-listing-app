export interface CardProps {
  title: string;
  description?: string;
  imageSrc?: string;
  ctaText?: string;
  onCta?: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}
