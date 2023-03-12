import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative ">
                <img
                  src="./images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="Main Banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPhone 13 Pro.</h5>
                  <p>
                    From $999.00 or $42.62/month. <br /> for 24 month. Footnote{" "}
                    <sup>*</sup>{" "}
                  </p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-10 flex-wrap justify-content-between aligin-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="./images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="Main Banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>iPhone 13 Pro.</h5>
                    <p>From $999.00 or $42.62/mo. </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="./images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="Main Banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>But iPad Air</h5>
                    <p>From $999.00 or $42.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="./images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="Main Banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>But iPad Air</h5>
                    <p>From $999.00 or $42.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="./images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="Main Banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>But iPad Air</h5>
                    <p>From $999.00 or $42.62/mo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex aligin-items-center justify-content-between">
                <div className="d-flex aligin-items-center gap-15">
                  <img src="./images/service.png" alt="Services" />
                  <div>
                    <h6>Free Shiping </h6>
                    <p className="mb-0">From All orders over $5</p>
                  </div>
                </div>
                <div className="d-flex aligin-items-center gap-15">
                  <img src="./images/service-02.png" alt="Services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex aligin-items-center gap-15">
                  <img src="./images/service-03.png" alt="Services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an Expert</p>
                  </div>
                </div>
                <div className="d-flex aligin-items-center gap-15">
                  <img src="./images/service-04.png" alt="Services" />
                  <div>
                    <h6>Affordable Price</h6>
                    <p className="mb-0">Get Factory Default price</p>
                  </div>
                </div>
                <div className="d-flex aligin-items-center gap-15">
                  <img src="./images/service-05.png" alt="Services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="categories d-flex aligin-items-center flex-wrap justify-content-between">
            <div className="d-flex gap-30 align-items-center">
              <div>
                <h6>Music and Gaming </h6>
                <p>10 Items</p>
              </div>
              <img
                class="img-fluid"
                src="./images/headphone.jpg"
                alt="Camera"
              />
            </div>
            <div className="d-flex gap-30 align-items-center">
              <div>
                <h6>Cameras</h6>
                <p>10 Items</p>
              </div>
              <img class="img-fluid" src="./images/camera.jpg" alt="Camera" />
            </div>
            <div className="d-flex gap-30 align-items-center">
              <div>
                <h6>Samart Tv</h6>
                <p>10 Items</p>
              </div>
              <img class="img-fluid" src="./images/tv.jpg" alt="Camera" />
            </div>
            <div className="d-flex gap-30 align-items-center">
              <div>
                <h6>Speakers</h6>
                <p>10 Items</p>
              </div>
              <img class="img-fluid" src="./images/speaker.jpg" alt="Camera" />
            </div>
            <div className="d-flex gap-30 align-items-center">
              <div>
                <h6>Music and Gaming </h6>
                <p>10 Items</p>
              </div>
              <img
                class="img-fluid"
                src="./images/headphone.jpg"
                alt="Camera"
              />
            </div>
            <div className="d-flex gap-30 align-items-center">
              <div>
                <h6>Cameras</h6>
                <p>10 Items</p>
              </div>
              <img class="img-fluid" src="./images/camera.jpg" alt="Camera" />
            </div>
            <div className="d-flex gap-30 align-items-center">
              <div>
                <h6>Samart Tv</h6>
                <p>10 Items</p>
              </div>
              <img class="img-fluid" src="./images/tv.jpg" alt="Camera" />
            </div>
            <div className="d-flex gap-30 align-items-center">
              <div>
                <h6>Speakers</h6>
                <p>10 Items</p>
              </div>
              <img class="img-fluid" src="./images/speaker.jpg" alt="Camera" />
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading"> Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <div className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img className="img-fluid" src="images/famous-1.webp" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart watch series 7</h6>
                  <p>from $399 $16.60/mo. for 24 mo. </p>
                </div>
              </div>
            </div>
            <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-2.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
            <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
            <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-4.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <section className="special-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12"></div>
            <h3 className="section-heading">Speacial Products</h3>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="popular-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading"> Our Popular Products </h3>
            </div>
            <div className="row">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper home-wrapper-2">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="./images/brand-01.png" alt="Brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-02.png" alt="Brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-03.png" alt="Brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-04.png" alt="Brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-05.png" alt="Brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-06.png" alt="Brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-07.png" alt="Brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-08.png" alt="Brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading"> Our Lastes Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
