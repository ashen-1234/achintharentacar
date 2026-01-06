import { useEffect, useState } from "react";
import { IconCar, IconInfoCircleFilled, IconX } from "@tabler/icons-react";
import { IconMapPinFilled, IconCalendarEvent } from "@tabler/icons-react";

function BookCar() {
  const [modal, setModal] = useState(false);

  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  const handleChange = (setter) => (e) => setter(e.target.value);

  const sriLankaCities = [
    "Colombo","Dehiwala","Nugegoda","Mt. Lavinia","Moratuwa","Negombo",
    "Wattala","Gampaha","Ja-Ela","Kelaniya","Homagama","Kaduwela",
    "Ratmalana","Borella","Piliyandala","Bandaragama","Panadura",
    "Avissawella","Minuwangoda","Wathupitiwala","Divulapitiya",
    "Kiribathgoda","Kadawatha","Seeduwa","Ragama","Horana",
    "Malabe","Peliyagoda","Kottawa","Meegoda","Kandy","Matale",
    "Nuwara Eliya","Dambulla","Galle","Matara","Hambantota","Jaffna",
    "Trincomalee","Batticaloa","Kurunegala","Puttalam","Anuradhapura",
    "Polonnaruwa","Badulla","Monaragala","Ratnapura","Balangoda","Ella",
    "Haputale","Ambalangoda","Tangalle","Weligama","Hikkaduwa","Mirissa",
    "Nuwara Eliya","Talawakele","Hatton","Gampola","Mannar","Mullaitivu",
    "Vavuniya","Chavakachcheri","Kalmunai","Ampara","Akkaraipattu",
    "Mahiyanganaya","Nikaweratiya","Kuliyapitiya","Chilaw","Madampe",
    "Welimada","Bandarawela","Passara","Pelmadulla","Eheliyagoda",
    "Boralesgamuwa","Hanwella","Panagamuwa","Kalubowila","Thalahena",
    "Seethawaka","Kadawatha","Rajagiriya","Nawala","Biyagama","Malwana",
    "Kolonnawa","Kahathuduwa","Angoda","Kottawa East"
  ];

  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (!pickUp || !dropOff || !pickTime || !dropTime || !carType) {
      errorMsg.style.display = "flex";
    } else {
      setModal(true);
      errorMsg.style.display = "none";
    }
  };

  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(false);
    document.querySelector(".booking-done").style.display = "flex";
  };

  const hideMessage = () => {
    document.querySelector(".booking-done").style.display = "none";
  };

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "auto";
  }, [modal]);

  return (
    <>
      <section id="booking-section" className="book-section">
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a car</h2>

              <p className="error-message">
                All fields required! <IconX width={20} height={20} />
              </p>

              <p className="booking-done">
                Check your email to confirm an order.{" "}
                <IconX width={20} height={20} onClick={hideMessage} />
              </p>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <IconCar className="input-icon" /> &nbsp; Select Your Car Type <b>*</b>
                  </label>
                  <select value={carType} onChange={handleChange(setCarType)}>
                    <option>Select your car type</option>
                    <option>Honda Fit Shuttle</option>
                    <option>Honda Insight</option>
                    <option>Toyota Camry</option>
                    <option>Suzuki Alto</option>
                    <option>Wagon R</option>
                    <option>Every</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconMapPinFilled className="input-icon" /> &nbsp; Pick-up <b>*</b>
                  </label>
                  <select value={pickUp} onChange={handleChange(setPickUp)}>
                    <option>Select pick-up location</option>
                    {sriLankaCities.map((place, i) => (
                      <option key={i}>{place}</option>
                    ))}
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconMapPinFilled className="input-icon" /> &nbsp; Drop-off <b>*</b>
                  </label>
                  <select value={dropOff} onChange={handleChange(setDropOff)}>
                    <option>Select drop-off location</option>
                    {sriLankaCities.map((place, i) => (
                      <option key={i}>{place}</option>
                    ))}
                  </select>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Pick‑up <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handleChange(setPickTime)}
                    type="date"
                  />
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Drop‑off <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleChange(setDropTime)}
                    type="date"
                  />
                </div>

                <button onClick={openModal} type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- MODAL ------------------- */}
      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        <div className="booking-modal__title">
          <h2>Complete Reservation</h2>
          <IconX onClick={() => setModal(false)} />
        </div>

        <div className="booking-modal__message">
          <h4>
            <IconInfoCircleFilled /> Upon completing this reservation enquiry,
            you will receive:
          </h4>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>

        <div className="booking-modal__person-info">
          <h4>Personal Information</h4>
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label>First Name <b>*</b></label>
                <input value={name} onChange={handleChange(setName)} type="text" />
              </span>
              <span>
                <label>Last Name <b>*</b></label>
                <input value={lastName} onChange={handleChange(setLastName)} type="text" />
              </span>
              <span>
                <label>Phone Number <b>*</b></label>
                <input value={phone} onChange={handleChange(setPhone)} type="tel" />
              </span>
              <span>
                <label>Age <b>*</b></label>
                <input value={age} onChange={handleChange(setAge)} type="number" />
              </span>
            </div>

            <div className="info-form__1col">
              <span>
                <label>Email <b>*</b></label>
                <input value={email} onChange={handleChange(setEmail)} type="email" />
              </span>
              <span>
                <label>Address <b>*</b></label>
                <input value={address} onChange={handleChange(setAddress)} type="text" />
              </span>
            </div>

            <div className="info-form__2col">
              <span>
                <label>City <b>*</b></label>
                <input value={city} onChange={handleChange(setCity)} type="text" />
              </span>
              <span>
                <label>Zip Code <b>*</b></label>
                <input value={zipcode} onChange={handleChange(setZipCode)} type="text" />
              </span>
            </div>

            <div className="reserve-button">
              <button onClick={confirmBooking}>Reserve Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookCar;
