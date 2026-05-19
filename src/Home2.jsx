import React, { useEffect } from "react";
import AOS from "aos";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

function Home2() {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom py-3">
        <div className="container">

          <a className="navbar-brand fw-bold fs-3">
            KAIRA
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav mx-auto gap-4 text-uppercase">

              <li className="nav-item">
                <a className="nav-link">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link">Shop</a>
              </li>

              <li className="nav-item">
                <a className="nav-link">Blog</a>
              </li>

              <li className="nav-item">
                <a className="nav-link">Pages</a>
              </li>

              <li className="nav-item">
                <a className="nav-link">Contact</a>
              </li>

            </ul>

            <div className="d-flex gap-3">

              <a className="text-dark text-uppercase small">
              </a>

              <a className="text-dark text-uppercase small">
                Cart (0)
              </a>

            </div>

          </div>

        </div>
      </nav>


      {/* Hero Section */}
      <section className="py-5 bg-light">

        <div className="container text-center">

          <h1
            className="display-4 fw-semibold mb-3"
            data-aos="fade-up"
          >
            New Collections
          </h1>

          <p
            className="text-muted col-md-6 mx-auto"
            data-aos="fade-up"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Saepe voluptas ut dolorum consequuntur.
          </p>


          {/* Swiper Slider */}
          <div className="mt-5">

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                320: {
                  slidesPerView: 1
                },
                768: {
                  slidesPerView: 2
                },
                1024: {
                  slidesPerView: 3
                }
              }}
            >

              <SwiperSlide>
                <img
                  src="/images/banner-image-6.jpg"
                  className="img-fluid"
                  alt="banner"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="/images/banner-image-1.jpg"
                  className="img-fluid"
                  alt="banner"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="/images/banner-image-2.jpg"
                  className="img-fluid"
                  alt="banner"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="/images/banner-image-3.jpg"
                  className="img-fluid"
                  alt="banner"
                />
              </SwiperSlide>

            </Swiper>

          </div>

        </div>

      </section>


      {/* New Arrivals */}
      <section className="py-5">

        <div className="container">

          <div className="d-flex justify-content-between align-items-center mb-4">

            <h4 className="text-uppercase">
              Our New Arrivals
            </h4>

            <a className="text-uppercase small">
              View All Products
            </a>

          </div>


          <div className="row">

            <div className="col-md-3">

              <img
                src="/images/product-item-1.jpg"
                className="img-fluid"
              />

              <h6 className="mt-3 text-uppercase">
                Dark florish onepiece
              </h6>

              <span>$95.00</span>

            </div>

            <div className="col-md-3">

              <img
                src="/images/product-item-2.jpg"
                className="img-fluid"
              />

              <h6 className="mt-3 text-uppercase">
                Baggy Shirt
              </h6>

              <span>$55.00</span>

            </div>

            <div className="col-md-3">

              <img
                src="/images/product-item-3.jpg"
                className="img-fluid"
              />

              <h6 className="mt-3 text-uppercase">
                Cotton Shirt
              </h6>

              <span>$65.00</span>

            </div>

            <div className="col-md-3">

              <img
                src="/images/product-item-4.jpg"
                className="img-fluid"
              />

              <h6 className="mt-3 text-uppercase">
                Crop Sweater
              </h6>

              <span>$50.00</span>

            </div>

          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="bg-light py-5">

        <div className="container">

          <div className="row">

            <div className="col-md-3">

              <h4>KAIRA</h4>

              <p className="text-muted">
                Gravida massa volutpat aenean odio.
              </p>

            </div>

            <div className="col-md-3">

              <h6 className="text-uppercase">
                Quick Links
              </h6>

              <ul className="list-unstyled small">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>

            </div>

            <div className="col-md-3">

              <h6 className="text-uppercase">
                Help & Info
              </h6>

              <ul className="list-unstyled small">
                <li>Track Order</li>
                <li>Shipping</li>
                <li>Returns</li>
              </ul>

            </div>

            <div className="col-md-3">

              <h6 className="text-uppercase">
                Contact
              </h6>

              <p className="small">
                contact@yourcompany.com
              </p>

            </div>

          </div>

        </div>

      </footer>

    </>
  );
}

export default Home2;

