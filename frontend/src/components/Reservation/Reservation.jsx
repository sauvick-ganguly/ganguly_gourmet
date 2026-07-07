import { useState } from "react";
import "./Reservation.css";
import useReveal from "../../hooks/useReveal";
import API from "../../api/reservationApi";

function Reservation() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    email: "",
    note: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.phone ||
      !form.date ||
      !form.time ||
      !form.guests ||
      !form.email
    ) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      await API.post("/api/reservations", form);

      setSubmitted(true);

      setForm({
        name: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
        email: "",
        note: "",
      });

    } catch (error) {
      console.log(error);
      console.log(error.response);

      alert(error.response?.data?.message || error.message);
    }
  };

  return (
    <section id="reserve" className="section-alt">
      <div className="wrap">
        <div className="reserve-box">

          <div className="reserve-info">
            <p className="eyebrow">Book a Table</p>

            <h2>Sunday Ilish waits for no one</h2>

            <p>
              Tell us when you'll be in, and we'll hold your table.
            </p>

            <div className="info-row">
              <div>
                <strong>14 Southern Avenue</strong>
                <span>Kolkata 700029</span>
              </div>
            </div>

            <div className="info-row">
              <div>
                <strong>12 PM – 11 PM</strong>
                <span>Open Daily</span>
              </div>
            </div>

            <div className="info-row">
              <div>
                <strong>+91 33 4022 8890</strong>
                <span>Reservations</span>
              </div>
            </div>
          </div>

          <form className="reserve-form" onSubmit={handleSubmit}>

            <div className="form-row">

              <div>
                <label>Name</label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Phone</label>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="form-row">

              <div>
                <label>Date</label>

                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Time</label>

                <select
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option>12:30 PM</option>
                  <option>1:30 PM</option>
                  <option>7:00 PM</option>
                  <option>8:00 PM</option>
                </select>
              </div>

            </div>

            <div className="form-row">

              <div>
                <label>Guests</label>

                <select
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                >
                  <option value="">Party Size</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5+</option>
                </select>
              </div>

              <div>
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div>
              <label>Special Request</label>

              <textarea
                name="note"
                value={form.note}
                onChange={handleChange}
              ></textarea>
            </div>

            <button className="form-submit">
              Confirm Reservation
            </button>

            {submitted && (
              <div className="form-msg show">
                Reservation request submitted successfully.
              </div>
            )}

          </form>

        </div>
      </div>
    </section>
  );
}

export default Reservation;