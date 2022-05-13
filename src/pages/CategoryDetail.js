import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const CategoryDetail = () => {
  return (
    <div className="categoryDetail mt-4 mb-5">
      <div className="container">
        <h3 className="text-center">Jenis Kategori</h3>
        <hr className="m-0" />
        <Row>
          <Col md={4} xs={12} className="mt-4">
            <Card className="shadow my-2">
              <div>
                <Card.Img
                  className="images"
                  src="https://insights.g2academy.co/wp-content/uploads/2021/12/Java-tips-for-beginners-scaled.jpg"
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    <h5> Tip Coding Java Untuk Pemula </h5>
                  </Card.Title>
                  <hr className="mt-0" />
                  <Card.Text className="category-text text-start">
                    Kiat Pengodean Java untuk Pemula –Digunakan oleh lebih
                    dari10 juta pengembang dan berjalan di 56 miliar perangkat
                    di seluruh dunia, Java dengan mudah menjadi salah satu
                    bahasa pemrograman paling populer di luar sana. Banyak
                    pengembang lebih menyukainya daripada yang lain karena
                    fleksibilitas dan portabelnya, memungkinkan mereka untuk
                    menulis kode untuk mesin dari berbagai arsitektur dan
                    platform.
                  </Card.Text>
                  <div className="categoryLink text-start">
                    <b>
                      <a href="/pageDetail">
                        Baca Selengkapnya <i className="bi bi-arrow-right"></i>
                      </a>
                    </b>
                  </div>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col md={4} xs={12} className="mt-4">
            <Card className="shadow my-2">
              <div>
                <Card.Img
                  className="images"
                  src="https://insights.g2academy.co/wp-content/uploads/2021/12/Java-tips-for-beginners-scaled.jpg"
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    Tip Coding Java Untuk Pemula
                  </Card.Title>
                  <hr className="mt-0" />
                  <Card.Text className="category-text text-start">
                    Kiat Pengodean Java untuk Pemula –Digunakan oleh lebih
                    dari10 juta pengembang dan berjalan di 56 miliar perangkat
                    di seluruh dunia, Java dengan mudah menjadi salah satu
                    bahasa pemrograman paling populer di luar sana. Banyak
                    pengembang lebih menyukainya daripada yang lain karena
                    fleksibilitas dan portabelnya, memungkinkan mereka untuk
                    menulis kode untuk mesin dari berbagai arsitektur dan
                    platform.
                  </Card.Text>
                  <div className="categoryLink text-start">
                    <b>
                      <a href="/pageDetail">
                        Baca Selengkapnya <i className="bi bi-arrow-right"></i>
                      </a>
                    </b>
                  </div>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col md={4} xs={12} className="mt-4">
            <Card className="shadow my-2">
              <div>
                <Card.Img
                  className="images"
                  src="https://insights.g2academy.co/wp-content/uploads/2021/12/Java-tips-for-beginners-scaled.jpg"
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    Tip Coding Java Untuk Pemula
                  </Card.Title>
                  <hr className="mt-0" />
                  <Card.Text className="category-text text-start">
                    Kiat Pengodean Java untuk Pemula –Digunakan oleh lebih
                    dari12 juta pengembang dan berjalan di 56 miliar perangkat
                    di seluruh dunia, Java dengan mudah menjadi salah satu
                    bahasa pemrograman paling populer di luar sana. Banyak
                    pengembang lebih menyukainya daripada yang lain karena
                    fleksibilitas dan portabelnya, memungkinkan mereka untuk
                    menulis kode untuk mesin dari berbagai arsitektur dan
                    platform.
                  </Card.Text>
                  <div className="categoryLink text-start">
                    <b>
                      <a href="/pageDetail">
                        Baca Selengkapnya <i className="bi bi-arrow-right"></i>
                      </a>
                    </b>
                  </div>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CategoryDetail;
