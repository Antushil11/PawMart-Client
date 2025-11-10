import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://i.ibb.co/whBstsZn/photo-1753286622777-64db3416885b-fm-jpg-ixid-M3wx-Mj-A3f-DB8-MHxwa-G90by1y-ZWxhd-GVkf-DE1f-Hx8-ZW58.jpg",
    tagline: "Find Your Furry Friend Today!",
    desc: "Explore pets waiting to fill your life with love and joy."
  },
  {
    image: "https://i.ibb.co/Wpz5cPLF/i-Stock-1322461027-1-2000x1334.jpg",
    tagline: "Adopt, Don’t Shop — Give a Pet a Home.",
    desc: "Your small step can make a big difference in a pet’s life."
  },
  {
    image: "https://i.ibb.co/4gSQmKNG/portrait-of-a-cute-fluffy-striped-kitten-on-a-ligh-2023-11-27-05-20-54-utc-1-scaled.jpg",
    tagline: "Because Every Pet Deserves Love and Care.",
    desc: "Join our mission to find homes for all our furry friends."
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-60 lg:h-[680px] md:h-[400px] overflow-hidden rounded-2xl shadow-lg  mt-4 ">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
            index === current ? "" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt="Pet Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
              {slide.tagline}
            </h2>
            <p className="text-lg md:text-2xl font-light max-w-2xl">
              {slide.desc}
            </p>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-white scale-125" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
