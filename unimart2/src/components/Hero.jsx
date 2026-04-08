import { useState } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import "../styles/Hero.css";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

const slides = [
  {
    headline: "Everything You Need,",
    sub: "Delivered Fresh",
    body: "From groceries to gadgets, UniMart brings it all together, easy, fresh and affordable.",
    accent: "#f47c20",
    image: hero1,
  },
  {
    headline: "Fresh Produce,",
    sub: "Every Single Day",
    body: "Farm-fresh fruits and vegetables picked for quality and delivered straight to your door.",
    accent: "#3a7d1e",
    image: hero2,
  },
  {
    headline: "Big Savings,",
    sub: "Even Bigger Smiles",
    body: "Discover weekly deals, flash sales and exclusive member offers and all in one place.",
    accent: "#c0392b",
    image: hero3,
  },
];

export default function Hero() {
  const [idx, setIdx]       = useState(0);
  const [fading, setFading] = useState(false);

  const go = (dir) => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setIdx((p) => (p + dir + slides.length) % slides.length);
      setFading(false);
    }, 300);
  };

  const goTo = (i) => {
    if (fading || i === idx) return;
    setFading(true);
    setTimeout(() => {
      setIdx(i);
      setFading(false);
    }, 300);
  };

  const s = slides[idx];

  return (
    <section className={`hero ${s.bgClass}`}>
      <div
        className={`hero-bg ${fading ? "hero-hidden" : "hero-visible"}`}
        style={{ backgroundImage: `url(${s.image})` }}
      />
      <div className="hero-overlay" />

      <div className={`hero-content ${fading ? "hero-hidden" : "hero-visible"}`}>

        <h1 className="hero-headline">
          {s.headline}
          <br />
          <span className="hero-sub">{s.sub}</span>
        </h1>

        <p className="hero-body">{s.body}</p>

        <div className="hero-actions">
          <button className="hero-btn-primary" style={{ color: s.accent }}>
            Shop Now <FiArrowRight size={15} />
          </button>
        </div>

      </div>

      <div className={`hero-emoji ${fading ? "hero-hidden" : "hero-visible"}`}>
        {s.emoji}
      </div>

      <button className="hero-arrow hero-arrow-left"  onClick={() => go(-1)}><FiArrowLeft /></button>
      <button className="hero-arrow hero-arrow-right" onClick={() => go(1)}><FiArrowRight /></button>
    </section>
  );
}