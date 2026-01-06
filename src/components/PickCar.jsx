import { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";

function PickCar() {
  const [active, setActive] = useState(0);
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <section className="pick-section">
      <div className="container">
        <div className="pick-container">
          <div className="pick-container__title">
            <h3>Vehicle Models</h3>
            <h2>Our rental fleet</h2>
            <p>
              Choose from a variety of our vehicles for your next trip
            </p>
          </div>

          <div className="pick-container__car-content">
            {/* pick car */}
            <div className="pick-box">
              <button
                className={coloringButton("btn1")}
                onClick={() => {
                  setActive(0);
                  btnID("btn1");
                }}
              >
                Honda Fit Shuttle
              </button>

              <button
                className={coloringButton("btn2")}
                onClick={() => {
                  setActive(1);
                  btnID("btn2");
                }}
              >
                Honda Insight
              </button>

              <button
                className={coloringButton("btn3")}
                onClick={() => {
                  setActive(2);
                  btnID("btn3");
                }}
              >
                Toyota Camry
              </button>

              <button
                className={coloringButton("btn4")}
                onClick={() => {
                  setActive(3);
                  btnID("btn4");
                }}
              >
                Suzuki Alto
              </button>

              <button
                className={coloringButton("btn5")}
                onClick={() => {
                  setActive(4);
                  btnID("btn5");
                }}
              >
                Wagon R
              </button>

              <button
                className={coloringButton("btn6")}
                onClick={() => {
                  setActive(5);
                  btnID("btn6");
                }}
              >
                Every
              </button>
            </div>

            {/* car details */}
            <CarBox data={CAR_DATA} carID={active} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PickCar;
