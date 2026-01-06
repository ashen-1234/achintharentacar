import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
              <p>
                Common questions about renting a vehicle from Achintha Rent a
                Car in Sri Lanka.
              </p>
            </div>

            <div className="all-questions">
              {/* Question 1 */}
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question ${getClassQuestion("q1")}`}
                >
                  <p>1. What documents are required to rent a car?</p>
                  <IconChevronDown />
                </div>
                <div
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  To rent a vehicle from Achintha Rent a Car, you need a valid
                  driving license, National Identity Card (NIC) or passport, and
                  a valid contact number. Foreign customers may require an
                  international driving permit or a temporary Sri Lankan driving
                  license.
                </div>
              </div>

              {/* Question 2 */}
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. Can I rent a car with or without a driver?</p>
                  <IconChevronDown />
                </div>
                <div
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  Yes, Achintha Rent a Car offers both self-drive and
                  chauffeur-driven rental options. If you prefer a relaxed and
                  comfortable journey, you can choose a vehicle with an
                  experienced local driver.
                </div>
              </div>

              {/* Question 3 */}
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. Are the rental vehicles insured and well maintained?</p>
                  <IconChevronDown />
                </div>
                <div
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  All vehicles provided by Achintha Rent a Car are well
                  maintained, regularly serviced, and insured according to Sri
                  Lankan regulations to ensure your safety and comfort
                  throughout the rental period.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
