import React from "react";
import Button from "./Card";

export interface CardProps {
  title: string;
  description?: string;
  imageSrc?: string;
  ctaText?: string;
  onCta?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  ctaText,
  onCta,
}) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow">
      {imageSrc && (
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <Button
          onClick={onCta}
          className="bg-indigo-600 text-white hover:bg-indigo-700"
        >
          {ctaText || "Details"}
        </Button>
      </div>
    </article>
  );
};

export default Card;
