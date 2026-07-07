import { useEffect } from "react";
import "./Hero.css";


function Hero() {
  useEffect(() => {
    const group = document.getElementById("petalGroup");

    if (!group) return;

    group.innerHTML = "";

    const petalPath =
      "M200 200 C190 150,170 120,200 90 C230 120,210 150,200 200 Z";

    for (let i = 0; i < 8; i++) {
      const g = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g"
      );

      g.setAttribute(
        "transform",
        `rotate(${i * 45} 200 200)`
      );

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );

      path.setAttribute("d", petalPath);
      path.setAttribute("class", "alpona-stroke");
      path.style.animationDelay = `${i * 0.12}s`;

      g.appendChild(path);
      group.appendChild(g);
    }

    const outer = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );

    outer.setAttribute("cx", "200");
    outer.setAttribute("cy", "200");
    outer.setAttribute("r", "150");
    outer.setAttribute("class", "alpona-stroke");
    outer.style.animationDelay = "1s";
    outer.style.strokeDasharray = "950";
    outer.style.strokeDashoffset = "950";

    group.appendChild(outer);
  }, []);
  return (
    <>
      <section className="hero" id="top">
        <div className="alpona-field" aria-hidden="true">
          <svg viewBox="0 0 400 400">
            <g id="petalGroup"></g>

            <circle
              className="alpona-dot"
              cx="200"
              cy="200"
              r="4"
              style={{ animationDelay: "2.4s" }}
            ></circle>
          </svg>
        </div>

        <div className="hero-content">
          <p className="bn-line bn">
            গাঙ্গুলী গৌরমেট — কলকাতার রান্নাঘর
          </p>

          <h1>
            Ganguly's
            <br />
            <em>Gourmet</em>
          </h1>

          <p className="sub">
            Three generations of Kolkata home cooking, refined for a modern
            table — mustard, monsoon spice, and river fish, plated with quiet
            precision.
          </p>

          <div className="hero-ctas">
            <a href="#reserve" className="btn btn-primary">
              Reserve a Table
            </a>

            <a href="#menu" className="btn btn-ghost">
              Explore the Menu
            </a>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Kosha Mangsho</span>
          <span>Bhetki Paturi</span>
          <span>Chingri Malaikari</span>
          <span>Doi Ilish</span>
          <span>Mishti Doi</span>
          <span>Aam Sondesh</span>

          <span>Kosha Mangsho</span>
          <span>Bhetki Paturi</span>
          <span>Chingri Malaikari</span>
          <span>Doi Ilish</span>
          <span>Mishti Doi</span>
          <span>Aam Sondesh</span>
        </div>
      </div>
    </>
  );
}

export default Hero;