import { IconMail, IconPhoneCall } from "@tabler/icons-react";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            {/* About Section */}
            <ul className="footer-content__1">
              <li>
                <span>Achintha</span> Rent a Car
              </li>
              <li>
                We offer a wide range of vehicles for all your travel and
                driving needs in Sri Lanka. Reliable, safe, and affordable cars
                for city trips, long journeys, and special occasions.
              </li>
              <li>
                <a href="tel:0761578228" className="contact-link">
                  <IconPhoneCall /> &nbsp; Achintha: 076 15 78 228
                </a>
              </li>
              <li>
                <a href="tel:0774732571" className="contact-link">
                  <IconPhoneCall /> &nbsp; Sandun: 077 47 32 571
                </a>
              </li>
              <li>
                <a href="mailto:achintharentacar@gmail.com" className="contact-link">
                  <IconMail /> &nbsp; achintharentacar@gmail.com
                </a>
              </li>
            </ul>

            {/* Company Links */}
            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>

            {/* Working Hours */}
            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri: 8:00AM - 8:00PM</li>
              <li>Sat: 8:00AM - 6:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            {/* Subscription */}
            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe with your email address for the latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address" />
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line for Developed By */}
        <div className="footer-bottom">
          <p>Developed by FleoLab</p>
        </div>
      </footer>

      {/* Add some basic CSS */}
      <style jsx>{`
        .contact-link {
          font-size: 16px; /* Ensure email matches phone size */
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .footer-bottom {
          text-align: center;
          padding: 10px 0;
          background-color: #111; /* or match your footer background */
          color: #fff;
          font-size: 14px;
          margin-top: 20px;
        }
      `}</style>
    </>
  );
}

export default Footer;
