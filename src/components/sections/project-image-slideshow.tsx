
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ProjectImageSlideshowProps {
  images: string[];
  alt: string;
  onSlideChange?: (index: number) => void;
}

export function ProjectImageSlideshow({
  images,
  alt,
  onSlideChange,
}: ProjectImageSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Reset the slideshow when its images change.
  useEffect(() => {
    setActiveIndex(0);
  }, [images]);

  // Notify the parent after the active index has updated.
  useEffect(() => {
    onSlideChange?.(activeIndex);
  }, [activeIndex, onSlideChange]);

  // Change slides without updating the parent inside
  // React's state updater function.
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [images]);

  if (!images.length) return null;

  return (
    <div
      className="project-card__slideshow"
      role="region"
      aria-label={alt}
    >
      <div
        className="project-card__slides"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <div
            className="project-card__slide"
            key={`${src}-${index}`}
          >
            <Image
              src={src}
              alt={`${alt} — image ${index + 1}`}
              fill
              sizes="(max-width: 759px) 100vw, 46vw"
              className="project-card__image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
