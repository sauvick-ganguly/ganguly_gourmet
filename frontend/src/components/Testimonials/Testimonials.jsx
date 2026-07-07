import { useState, useEffect } from "react";
import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      text: `"The Kosha Mangsho tastes like someone's actual grandmother made it — because, it turns out, she did."`,
      author: "— Debjani R., Kolkata",
    },
    {
      text: `"I've eaten Ilish Bhapa across three continents. This was the first time it tasted like home."`,
      author: "— Arjun M., London",
    },
    {
      text: `"Booked for a birthday, stayed for the mishti doi. We're already planning the next visit."`,
      author: "— Priya & Sourav",
    },
  ];

  const [current, setCurrent] = useState(0);
  useEffect(() => {
  const timer = setInterval(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, 5500);

  return () => clearInterval(timer);
}, [testimonials.length]);

  return (
    <section id="testimonials">
      <div className="wrap testi-wrap">
        <p className="eyebrow">What Guests Say</p>

        <div className="testi-slide active">
          <p>{testimonials[current].text}</p>

          <div className="who">
            {testimonials[current].author}
          </div>
        </div>

        <div className="testi-controls">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={
                current === index
                  ? "testi-dot active"
                  : "testi-dot"
              }
              onClick={() => setCurrent(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;