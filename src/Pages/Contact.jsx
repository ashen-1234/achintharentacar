import {
  IconMail,
  IconMailOpened,
  IconPhone,
  IconLocation,
} from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />

        <div className="container">
          <div className="contact-div">
            {/* Contact Info */}
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                Get in touch with Achintha Rent a Car for reliable and affordable
                vehicle rental services across Sri Lanka. We’re happy to assist
                you with bookings, inquiries, and custom travel needs.
              </p>

              <a href="tel:0761578228">
                <IconPhone /> &nbsp; Achintha: 076 15 78 228
              </a>

              <a href="tel:0774732571">
                <IconPhone /> &nbsp; Sandun: 077 47 32 571
              </a>

              <a href="mailto:achintharentacar@gmail.com">
                <IconMail /> &nbsp; achintharentacar@gmail.com
              </a>

              <a href="#">
                <IconLocation />
                &nbsp; Sri Lanka
              </a>
            </div>

            {/* Contact Form */}
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input
                  type="text"
                  placeholder='E.g: "Kasun Perera"'
                  required
                />

                <label>
                  Email <b>*</b>
                </label>
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  required
                />

                <label>
                  Message <b>*</b>
                </label>
                <textarea
                  placeholder="Tell us about your rental needs..."
                  required
                ></textarea>

                <button type="submit">
                  <IconMailOpened />
                  &nbsp; Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <IconPhone width={40} height={40} />
                <h3>076 15 78 228</h3>
              </span>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Contact;
