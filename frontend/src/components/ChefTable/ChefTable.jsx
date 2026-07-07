import "./ChefTable.css";
import useReveal from "../../hooks/useReveal";

function ChefTable() {
  return (
    <section id="chefs-table">
      <div className="wrap">
        <div className="spotlight reveal">
          <div className="spotlight-visual">
            <svg viewBox="0 0 160 160" fill="none">
              <ellipse
                cx="80"
                cy="90"
                rx="60"
                ry="30"
                fill="#0e2323"
                stroke="#e8c377"
                strokeWidth="1"
              />

              <path
                d="M40 90 Q80 60 120 90"
                stroke="#d9a441"
                strokeWidth="1.5"
                fill="none"
              />

              <circle cx="60" cy="88" r="4" fill="#b23a2e" />
              <circle cx="80" cy="82" r="4" fill="#b23a2e" />
              <circle cx="100" cy="88" r="4" fill="#b23a2e" />

              <path
                d="M50 50 Q80 20 110 50"
                stroke="#8c7a54"
                strokeWidth="1"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </div>

          <div>
            <p className="eyebrow">Chef's Table · Tonight Only</p>

            <h3>Ilish Bhapa, Steamed to Order</h3>

            <p>
              The dish the house is named for: Hilsa steamed over mustard seed
              and green chilli, sealed in banana leaf and served immediately
              after leaving the steamer. Only twelve orders are prepared every
              night.
            </p>

            <span className="price-tag">
              ₹950 · Serves One
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChefTable;