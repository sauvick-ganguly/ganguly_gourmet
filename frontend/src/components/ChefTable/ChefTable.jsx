import "./ChefTable.css";
import useReveal from "../../hooks/useReveal";
import ilishBhapa from "../../assets/ilishBhapa.jpg";

function ChefTable() {
  return (
    <section id="chefs-table">
      <div className="wrap">
        <div className="spotlight reveal">
          <div className="spotlight-visual">
            <img
              src={ilishBhapa}
              alt="Ilish Bhapa"
              className="chef-image"
            />
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