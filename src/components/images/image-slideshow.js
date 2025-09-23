"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import firstImg from "@/assets/1.png";
import secondImg from "@/assets/2.jpg";
import thirdImg from "@/assets/3.jpg";
import classes from "./image-slideshow.module.css";

const images = [
  { image: firstImg, alt: "A delicious, juicy burger" },
  { image: secondImg, alt: "A delicious, spicy curry" },
  { image: thirdImg, alt: "Steamed dumplings" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
