import { useState } from "react";
import "./Menu.css";
import useReveal from "../../hooks/useReveal";
import { menu } from "../../data/menu";

function Menu() {
    useReveal();
  const [activeTab, setActiveTab] = useState("starters");

  return (
    <section id="menu" className="section-alt">
      <div className="wrap">
        <div className="menu-head">
          <p className="eyebrow">The Menu</p>

          <h2>Shesh Pchallis, à la carte</h2>

          <p>
            A living menu built on four pillars of a Bengali thala —
            starters, fish & meat, vegetarian mains, and sweets.
          </p>
        </div>

        <div className="tabs">
          <button
            className={activeTab === "starters" ? "tab-btn active" : "tab-btn"}
            onClick={() => setActiveTab("starters")}
          >
            Shuru · Starters
          </button>

          <button
            className={activeTab === "mach" ? "tab-btn active" : "tab-btn"}
            onClick={() => setActiveTab("mach")}
          >
            Mach & Mangsho
          </button>

          <button
            className={activeTab === "veg" ? "tab-btn active" : "tab-btn"}
            onClick={() => setActiveTab("veg")}
          >
            Niramish · Veg
          </button>

          <button
            className={activeTab === "sweet" ? "tab-btn active" : "tab-btn"}
            onClick={() => setActiveTab("sweet")}
          >
            Misti · Sweets
          </button>
        </div>

<div className="dish-grid">
  {menu[activeTab].map((dish, index) => (
    <div className="dish" key={index}>
      <div>
        <div className="dish-name">
          {dish.name}

          {dish.tag && (
            <span className="tag">
              {dish.tag}
            </span>
          )}
        </div>

        <div className="dish-desc">
          {dish.desc}
        </div>
      </div>

      <div className="dish-price">
        {dish.price}
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}

export default Menu;