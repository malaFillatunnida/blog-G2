import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="AboutHeader">
      {/* Desktop */}
      <div className="container">
        <div className="d-none d-md-block">
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="d-flex h-100">
                <div className="justify-content-center align-self-center">
                  <h2>
                    <strong>
                      Tingkatkan
                      <br />
                      Potensi Geek Anda
                    </strong>
                  </h2>
                  <p>
                    Kami menghadirkan solusi transformatif yang dirancang <br />
                    untuk membantu Anda berkembang di dunia digital.
                  </p>
                  <Link
                    className="btn btn-lg"
                    style={{
                      backgroundColor: "orange",
                      borderRadius: "10px",
                      color: "white",
                    }}
                    to="/contact"
                  >
                    Hubungi Kami
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <Image
                src="https://www.g2academy.co/img/hero.4e7737ff.png"
                width="100%"
              />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="d-sm-block d-md-none">
          <div className="row mt-4">
            <div className="col-md-6 mb-3">
              <Image
                src="https://www.g2academy.co/img/hero.4e7737ff.png"
                width="100%"
              />
            </div>
            <div className="col-md-6">
              <div className="d-flex h-100">
                <div className="justify-content-center align-self-center">
                  <h2>
                    <strong>Tingkatkan</strong>
                    <br />
                    Potensi Geek Anda
                  </h2>
                  <p>
                    Kami menghadirkan solusi transformatif yang dirancang untuk
                    membantu Anda berkembang di dunia digital.
                  </p>
                  <button
                    className="btn btn-lg"
                    style={{
                      backgroundColor: "orange",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  >
                    Hubungi Kami
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
