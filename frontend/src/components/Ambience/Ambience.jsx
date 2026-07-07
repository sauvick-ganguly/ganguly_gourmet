import "./Ambience.css";
import useReveal from "../../hooks/useReveal";


function Ambience() {
  return (
    <section id="ambience" className="section-alt">
      <div className="wrap">
        <div className="menu-head reveal">
          <p className="eyebrow">The Room</p>

          <h2>An Old-Kolkata Dining Room</h2>

          <p>
            Terracotta motifs, brass lamps, and a courtyard table under
            the same mango tree that shaded the original bhojanalay.
          </p>
        </div>

        <div className="ambience-grid reveal">

          <div className="tile t1 wide">
            <svg viewBox="0 0 100 100">
              <path
                d="M50 15 L60 40 L85 40 L65 55 L72 80 L50 65 L28 80 L35 55 L15 40 L40 40 Z"
                stroke="#e8c377"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>

          <div className="tile t2">
            <svg viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="30"
                stroke="#d9a441"
                strokeWidth="1"
                fill="none"
              />

              <circle
                cx="50"
                cy="50"
                r="14"
                stroke="#d9a441"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>

          <div className="tile t3">
            <svg viewBox="0 0 100 100">
              <path
                d="M20 80 Q50 20 80 80 Z"
                stroke="#b23a2e"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>

          <div className="tile t4">
            <svg viewBox="0 0 100 100">
              <path
                d="M20 50 Q50 20 80 50 Q50 80 20 50 Z"
                stroke="#8c7a54"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>

          <div className="tile t1">
            <svg viewBox="0 0 100 100">
              <path
                d="M50 20 V80 M20 50 H80"
                stroke="#e8c377"
                strokeWidth="1"
              />

              <circle
                cx="50"
                cy="50"
                r="22"
                stroke="#e8c377"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Ambience;