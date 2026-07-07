import "./Story.css";
import useReveal from "../../hooks/useReveal";
import storyImage from "../../assets/HooghlyBridge.jpg";


function Story() {
  useReveal();
  return (
    <section
      id="story"
      style={{
        backgroundImage: `url(${storyImage})`,
      }}
    >
      <div className="wrap story-grid">
        <div className="story-visual reveal">
          <svg viewBox="0 0 200 200" fill="none">
            <rect
              x="10"
              y="10"
              width="180"
              height="180"
              rx="14"
              stroke="#8c7a54"
              strokeWidth="1"
              opacity="0.5"
            />

            <path
              d="M100 40 C 60 60, 60 110, 100 160 C 140 110, 140 60, 100 40 Z"
              stroke="#e8c377"
              strokeWidth="1.4"
              fill="none"
            />

            <circle cx="100" cy="100" r="6" fill="#b23a2e" />

            <path
              d="M40 100 Q100 60 160 100"
              stroke="#e8c377"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />

            <path
              d="M40 100 Q100 140 160 100"
              stroke="#e8c377"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
          </svg>
        </div>

        <div className="story reveal">
          <p className="eyebrow">Our Story</p>

          <h2>
            From my thakurma's
            <br />
            kitchen to yours
          </h2>

          <p>
            Ganguly Gourmet began in 1974 as a fourteen-seat bhojanalay on
            Southern Avenue, run by Anjali Ganguly out of her mother's recipe
            notebook — mustard oil, five-spice panch phoron, and a Sunday ilish
            nobody was allowed to rush.
          </p>

          <p>
            Fifty years on, her daughter-in-law, Dipa Ganguly, trained in Lyon
            and came home to do one thing: keep the recipes exactly as strict,
            and build a kitchen precise enough to honour them. Nothing here is
            "fusion." It's the same grandmother's food, cooked with better
            tools.
          </p>

          <p className="signed">
            — The Ganguly Family
          </p>

          <div className="stat-row">
            <div>
              <strong>50+</strong>
              <span>Years of Recipes</span>
            </div>

            <div>
              <strong>3</strong>
              <span>Generations Cooking</span>
            </div>

            <div>
              <strong>120</strong>
              <span>Dishes on the Archive Menu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;