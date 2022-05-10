import React from "react";
import { Image } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="container">
        <div className="mt-4">
          <h3 className="text-center">Hubungi Kami!</h3>
          <div className="row g-2 mt-3">
            <div className="col-md-6 p-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5000408248425!2d106.79639131431004!3d-6.197564662439782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6958ac2c5f9%3A0x76d1835570a756ad!2sCar%20Park%20Wisma%20Barito%20Pacific%20Tower%20B!5e0!3m2!1sid!2sid!4v1649143588698!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                loading="lazy"
              ></iframe>
            </div>
            <div className="col-md-6 p-3">
              <Image
                src="https://insights.g2academy.co/wp-content/uploads/2021/09/Logotype.png"
                alt=""
              />
              <p>BERASASI UNTUK MENCIPTAKAN NOL TEKNOLOGI GAP MASYARAKAT</p>
              <div className="contact-icon">
                <p>
                  <i className="bi bi-geo-alt-fill"></i> Wisma Barito Pacific,
                  Tower A Level Ground, Jl. Letjen S. Parman, Slipi, Jakarta
                  Barat
                </p>
                <p>
                  <i className="bi bi-whatsapp"></i> +62 857-7547-5917
                </p>
                <p>
                  <i className="bi bi-clock"></i> Sen - Sab, 09:00 - 18:00
                </p>
                <p>
                  <i className="bi bi-envelope-fill"></i> cs@g2academy.co
                </p>
                <p>
                  <i className="bi bi-instagram"></i> g2academyindonesia
                </p>
                <p>
                  <i className="bi bi-facebook"></i> G2Academy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
