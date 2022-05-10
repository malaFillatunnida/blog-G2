import React from "react";
import { Image } from "react-bootstrap";

const aboutFounder = () => {
  return (
    <div className="AboutFounder">
      {/* Desktop */}
      <div className="container">
        <div className="d-none d-md-block">
          <div className="row mt-5 ">
            <div className="col-md-6">
              <div className="d-flex h-100">
                <div className="justify-content-center align-self-center">
                  <h4 style={{ color: "orange" }}>
                    <b> Pendiri </b>
                  </h4>
                  <h3>
                    <b>Ferry Sutanto</b>
                  </h3>
                  <p>
                    Ferry Sutanto adalah Pendiri dan Chief Executive Officer
                    G2Academy. Dia memimpin perusahaan karena memberdayakan
                    individu, profesional, dan organisasi global dengan
                    keunggulan teknologi ujung ke ujung.
                  </p>
                  <p>
                    Ferry memulai karirnya di Amerika Serikat sebagai Software
                    Engineer di Metrowerks sebelum naik ke Senior Software
                    Engineer di Redback Networks dan Technical Team Leader untuk
                    Cisco Systems pada tahun 2007.
                  </p>
                  <p>
                    Setelah kembali ke Indonesia pada tahun 2011, Ferry menjabat
                    sebagai Business Development Manager di GDP Venture dan
                    akhirnya menjadi Head of Technology di blibli.com pada tahun
                    2012.
                  </p>
                  <p>
                    Dari sana, ia menjadi terinspirasi untuk membangun G2Academy
                    dengan tujuan mengembangkan lebih banyak talenta IT papan
                    atas untuk Indonesia dan menciptakan kesenjangan teknologi
                    nol dalam ekosistem digital.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <Image
                src="https://www.g2academy.co/img/founder.a8423787.png"
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
                src="https://www.g2academy.co/img/founder.a8423787.png"
                width="100%"
              />
            </div>
            <div className="col-md-6">
              <div className="d-flex h-100">
                <div className="justify-content-center align-self-center">
                  <h4 style={{ color: "orange" }}>Pendiri</h4>
                  <h3>
                    <b>Ferry Sutanto</b>
                  </h3>
                  <p>
                    Ferry Sutanto adalah Pendiri dan Chief Executive Officer
                    G2Academy. Dia memimpin perusahaan karena memberdayakan
                    individu, profesional, dan organisasi global dengan
                    keunggulan teknologi ujung ke ujung.
                  </p>
                  <p>
                    Ferry memulai karirnya di Amerika Serikat sebagai Software
                    Engineer di Metrowerks sebelum naik ke Senior Software
                    Engineer di Redback Networks dan Technical Team Leader untuk
                    Cisco Systems pada tahun 2007.
                  </p>
                  <p>
                    Setelah kembali ke Indonesia pada tahun 2011, Ferry menjabat
                    sebagai Business Development Manager di GDP Venture dan
                    akhirnya menjadi Head of Technology di blibli.com pada tahun
                    2012.
                  </p>
                  <p>
                    Dari sana, ia menjadi terinspirasi untuk membangun G2Academy
                    dengan tujuan mengembangkan lebih banyak talenta IT papan
                    atas untuk Indonesia dan menciptakan kesenjangan teknologi
                    nol dalam ekosistem digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutFounder;
