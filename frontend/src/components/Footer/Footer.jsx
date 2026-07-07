import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="wrap">

        <div className="footer-top">

          <div className="footer-brand">
            <strong>Ganguly's Gourmet</strong>

            <p>
              Modern Bengali dining rooted in three generations
              of Kolkata home cooking.
            </p>
          </div>

          <div>
            <h4>Explore</h4>

            <ul>
              <li><a href="#story">Our Story</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#chefs-table">Chef's Table</a></li>
              <li><a href="#ambience">Ambience</a></li>
            </ul>
          </div>

          <div>
            <h4>Visit</h4>

            <ul>
              <li><a href="#reserve">Reservations</a></li>
              <li><a href="#">Private Events</a></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4>Hours</h4>

            <ul>
              <li>Mon – Fri : 12 PM – 11 PM</li>
              <li>Sat – Sun : 11 AM – 11:30 PM</li>
              <li>Kitchen closes 30 mins early</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© 2026 Ganguly's Gourmet. All Rights Reserved.</span>

          <span>14 Southern Avenue, Kolkata</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;