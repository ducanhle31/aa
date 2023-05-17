import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet.jsx";

import products from "../assets/fake-data/products.jsx";
import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import TopProductCard from "../components/UI/product-card/TopProductCard.jsx";




import {NavLink } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


import "../styles/hero-section.css";import "../styles/home.css";


const Home = () => {

const [category, setCategory] = useState("ALL");
const [allProducts, setAllProducts] = useState(products);

const [hotHat, setHotHat] = useState([]);

useEffect(() => {
  const filteredPizza = products.filter((item) => item.category === "Hat");
  const slicePizza = filteredPizza.slice(0, 4);
  setHotHat(slicePizza);
}, []);

useEffect(() => {
  if (category === "ALL") {
    setAllProducts(products);
  }

  if (category === "RAUCU") {
    const filteredProducts = products.filter(
      (item) => item.category === "Raucu"
    );

    setAllProducts(filteredProducts);
  }

  if (category === "HOAQUA") {
    const filteredProducts = products.filter(
      (item) => item.category === "Hoaqua"
    );

    setAllProducts(filteredProducts);
  }

  if (category === "HAT") {
    const filteredProducts = products.filter(
      (item) => item.category === "Hat"
    );

    setAllProducts(filteredProducts);
  }
   if (category === "THIT") {
     const filteredProducts = products.filter(
       (item) => item.category === "Thit"
     );

     setAllProducts(filteredProducts);
   }
}, [category]);

  return (
    <Helmet title="Trang chủ">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <p
              className="hero-subtitle"
              style={{ fontFamily: '"Rubik", sans-serif' }}
            >
              Sale 25% tất cả sản phẩm.
            </p>
            <h2 className=" hero-titlee ">
              Thực phẩm hữu cơ
              <span className="span">giàu dinh dưỡng.</span>
            </h2>
            <p className="hero-text">Tốt cho sức khỏe, tốt cho cuộc sống.</p>
            <NavLink to="/pizzas" className="btn btn-primary">
              <span className="span">Mua ngay</span>
            </NavLink>
          </div>
          <figure className="hero-banner">
            <img
              src="/images/—Pngtree—healthy eating fruit and vegetable_6783161.png"
              width={603}
              height={634}
              loading="lazy"
              alt="Vegetables"
              className="w-100"
            />
          </figure>
        </div>
      </section>

      <section className="section offers">
        <div className="container">
          <>
            <Swiper
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                520: {
                  slidesPerView: 1,
                },
                950: {
                  slidesPerView: 2,
                },
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                <li className="offers-item">
                  <div className="offers-card">
                    <figure className="card-banner">
                      <img
                        src="/images/offer-1.png"
                        width={292}
                        height={230}
                        loading="lazy"
                        alt="Fresh vegetables package"
                        className="w-100"
                      />
                    </figure>
                    <div className="card-content">
                      <p className="card-subtitle">Giảm tới 25%</p>
                      <h3 className="h3 card-title">Trái cây &amp; rau củ.</h3>
                      <NavLink to="/pizzas" className="btn btn-primary">
                        Mua ngay
                      </NavLink>
                    </div>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <li className="offers-item">
                  <div className="offers-card">
                    <figure className="card-banner">
                      <img
                        src="/images/products/wheat_PNG108.png"
                        width={336}
                        height={244}
                        loading="lazy"
                        alt="Healthy & fresh beef"
                        className="w-100"
                      />
                    </figure>
                    <div className="card-content">
                      <p className="card-subtitle">Giảm tới 25%</p>
                      <h3 className="h3 card-title">Ngũ cốc giàu dinh dưỡng</h3>
                      <NavLink to="/pizzas" className="btn btn-primary">
                        Mua ngay
                      </NavLink>
                    </div>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <li className="offers-item">
                  <div className="offers-card">
                    <figure className="card-banner">
                      <img
                        src="/images/offer-2.png"
                        width={336}
                        height={244}
                        loading="lazy"
                        alt="Healthy & fresh beef"
                        className="w-100"
                      />
                    </figure>
                    <div className="card-content">
                      <p className="card-subtitle">Giảm tới 25%</p>
                      <h3 className="h3 card-title">Thực phẩm tươi sống</h3>
                      <NavLink to="/pizzas" className="btn btn-primary">
                        Mua ngay
                      </NavLink>
                    </div>
                  </div>
                </li>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </section>

      <section className="section product">
        <div className="container">
          <h2 className="h2 section-title">DANH MỤC SẢN PHẨM</h2>
          <center style={{ marginBottom: 25, marginTop: "-25px" }}>
            <img src="/images/back-ground/bg_title.png" alt="" />
          </center>
          <div className="food__category filter-list  ">
            <button
              className={`filter-btn filter-text  ${
                category === "ALL" ? "foodBtnActive" : ""
              } `}
              onClick={() => setCategory("ALL")}
            >
              Tất cả
            </button>
            <button
              className={`filter-btn filter-text  d-flex align-items-center gap-2 ${
                category === "RAUCU" ? "foodBtnActive" : ""
              } `}
              onClick={() => setCategory("RAUCU")}
            >
              Rau củ
            </button>

            <button
              className={`filter-btn filter-text d-flex align-items-center gap-2 ${
                category === "HOAQUA" ? "foodBtnActive" : ""
              } `}
              onClick={() => setCategory("HOAQUA")}
            >
              Hoa quả
            </button>

            <button
              className={`filter-btn filter-text d-flex align-items-center gap-2 ${
                category === "HAT" ? "foodBtnActive" : ""
              } `}
              onClick={() => setCategory("HAT")}
            >
              Các loại hạt
            </button>
            <button
              className={`filter-btn filter-text d-flex align-items-center gap-2 ${
                category === "THIT" ? "foodBtnActive" : ""
              } `}
              onClick={() => setCategory("THIT")}
            >
              Thực phẩm tươi sống
            </button>
          </div>

          <div className=" grid-list  products ">
            {allProducts.map((item) => (
              <ProductCard item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <p className="section-subtitle">Ưu đãi mùa hè</p>
          <h2 className="h2 section-title">Giảm đến 50% tất cả sản phẩm.</h2>
          <p className="cta-text">
            THỰC PHẨM LUÔN TƯƠI MỚI, KHÔNG CHẤT ĐỘC HẠI.
          </p>
          <NavLink to="/pizzas" className="btn btn-primary">
            <span>Mua ngay</span>
          </NavLink>
        </div>
      </section>

      <section className="section top-product">
        <div className="container  ">
          <h2 className="h2 section-title">SẢN PHẨM BÁN CHẠY</h2>
          <center style={{ marginBottom: 25, marginTop: "-25px" }}>
            <img src="/images/back-ground/bg_title.png" alt="" />
          </center>

          {/* Swiper */}
          <>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                520: {
                  slidesPerView: 2,
                },
                950: {
                  slidesPerView: 3,
                },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
             
              {hotHat.map((item) => (
                <SwiperSlide>
                  <TopProductCard item={item} key={item.id} />
                </SwiperSlide>
              ))}

           
            </Swiper>
          </>
        </div>
      </section>

      <section className="section partner">
        <div className="container">
          <h2 className="h2 section-title">Đối tác của chúng tôi</h2>

          <>
            <Swiper
              loop={true}
              spaceBetween={30}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                520: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                950: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                <li className="partner-item">
                  <figure className="partner-logo">
                    <img
                      src="/images/partner-1.png"
                      width={132}
                      height={134}
                      loading="lazy"
                      alt="Partner logo"
                    />
                  </figure>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <li className="partner-item">
                  <figure className="partner-logo">
                    <img
                      src="/images/partner-2.png"
                      width={132}
                      height={134}
                      loading="lazy"
                      alt="Partner logo"
                    />
                  </figure>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="partner-item">
                  <figure className="partner-logo">
                    <img
                      src="/images/partner-3.png"
                      width={132}
                      height={134}
                      loading="lazy"
                      alt="Partner logo"
                    />
                  </figure>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <li className="partner-item">
                  <figure className="partner-logo">
                    <img
                      src="/images/partner-4.png"
                      width={132}
                      height={134}
                      loading="lazy"
                      alt="Partner logo"
                    />
                  </figure>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <li className="partner-item">
                  <figure className="partner-logo">
                    <img
                      src="/images/partner-5.png"
                      width={132}
                      height={134}
                      loading="lazy"
                      alt="Partner logo"
                    />
                  </figure>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <li className="partner-item">
                  <figure className="partner-logo">
                    <img
                      src="/images/partner-6.png"
                      width={132}
                      height={134}
                      loading="lazy"
                      alt="Partner logo"
                    />
                  </figure>
                </li>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <h2 className="h2 section-title">NHẬN XÉT CỦA KHÁCH HÀNG</h2>
          <center style={{ marginBottom: 25, marginTop: "-25px" }}>
            <img src="/images/back-ground/bg_title.png" alt="" />
          </center>
          {/* Swiper */}
          <>
            <Swiper
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                520: {
                  slidesPerView: 2,
                },
                950: {
                  slidesPerView: 3,
                },
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="testi-card">
                  <div className="card-header">
                    <img
                      src="/images/quote-left.png"
                      width={25}
                      height={25}
                      aria-hidden="true"
                      alt=""
                    />
                    <img
                      src="/images/brand/profile1.jpg"
                      width={90}
                      height={90}
                      loading="lazy"
                      alt="Pamelia Hamrick"
                      className="card-avatar"
                    />
                    <img
                      src="/images/quote-right.png"
                      width={25}
                      height={25}
                      aria-hidden="true"
                      alt=""
                    />
                  </div>
                  <div className="rating-wrapper">
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                  </div>
                  <blockquote className="card-text">
                    Nhờ có Organic tôi đã yên tâm chọn lựa những món thực phẩm
                    đầy dinh dưỡng và đảm bảo sức khỏe dành đến cho gia đình
                    thân yêu.
                  </blockquote>
                  <h3 className="card-title">Minh Tâm</h3>
                  <p className="card-subtitle">Designer</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="testi-card">
                  <div className="card-header">
                    <img
                      src="/images/quote-left.png"
                      width={25}
                      height={25}
                      aria-hidden="true"
                      alt=""
                    />
                    <img
                      src="/images/brand/profile2.jpg"
                      width={90}
                      height={90}
                      loading="lazy"
                      alt="Pamelia Hamrick"
                      className="card-avatar"
                    />
                    <img
                      src="/images/quote-right.png"
                      width={25}
                      height={25}
                      aria-hidden="true"
                      alt=""
                    />
                  </div>
                  <div className="rating-wrapper">
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                  </div>
                  <blockquote className="card-text">
                    Nhờ có Organic tôi đã yên tâm chọn lựa những món thực phẩm
                    đầy dinh dưỡng và đảm bảo sức khỏe dành đến cho gia đình
                    thân yêu.
                  </blockquote>
                  <h3 className="card-title">Minh Thúy</h3>
                  <p className="card-subtitle">Designer</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="testi-card">
                  <div className="card-header">
                    <img
                      src="/images/quote-left.png"
                      width={25}
                      height={25}
                      aria-hidden="true"
                      alt=""
                    />
                    <img
                      src="/images/brand/profile3.jpg"
                      width={90}
                      height={90}
                      loading="lazy"
                      alt="Pamelia Hamrick"
                      className="card-avatar"
                    />
                    <img
                      src="/images/quote-right.png"
                      width={25}
                      height={25}
                      aria-hidden="true"
                      alt=""
                    />
                  </div>
                  <div className="rating-wrapper">
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                  </div>
                  <blockquote className="card-text">
                    Nhờ có Organic tôi đã yên tâm chọn lựa những món thực phẩm
                    đầy dinh dưỡng và đảm bảo sức khỏe dành đến cho gia đình
                    thân yêu.
                  </blockquote>
                  <h3 className="card-title">Tâm</h3>
                  <p className="card-subtitle">Designer</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <li className="testi-item">
                  <div className="testi-card">
                    <div className="card-header">
                      <img
                        src="/images/quote-left.png"
                        width={25}
                        height={25}
                        aria-hidden="true"
                        alt=""
                      />
                      <img
                        src="/images/brand/profile4.jpg"
                        width={90}
                        height={90}
                        loading="lazy"
                        alt="Pamelia Hamrick"
                        className="card-avatar"
                      />
                      <img
                        src="/images/quote-right.png"
                        width={25}
                        height={25}
                        aria-hidden="true"
                        alt=""
                      />
                    </div>
                    <div className="rating-wrapper">
                      <i class="ri-star-fill"></i>
                      <i class="ri-star-fill"></i>
                      <i class="ri-star-fill"></i>
                      <i class="ri-star-fill"></i>
                      <i class="ri-star-fill"></i>
                    </div>
                    <blockquote className="card-text">
                      Nhờ có Organic tôi đã yên tâm chọn lựa những món thực phẩm
                      đầy dinh dưỡng và đảm bảo sức khỏe dành đến cho gia đình
                      thân yêu.
                    </blockquote>
                    <h3 className="card-title">Minh Tú</h3>
                    <p className="card-subtitle">Designer</p>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="testi-card">
                  <div className="card-header">
                    <img
                      src="/images/quote-left.png"
                      width={25}
                      height={25}
                      aria-hidden="true"
                      alt=""
                    />
                    <img
                      src="/images/brand/profile7.jpg"
                      width={90}
                      height={90}
                      loading="lazy"
                      alt="Pamelia Hamrick"
                      className="card-avatar"
                    />
                    <img
                      src="/images/quote-right.png"
                      width={25}
                      height={25}
                      aria-hidden="true"
                      alt=""
                    />
                  </div>
                  <div className="rating-wrapper">
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                  </div>
                  <blockquote className="card-text">
                    Nhờ có Organic tôi đã yên tâm chọn lựa những món thực phẩm
                    đầy dinh dưỡng và đảm bảo sức khỏe dành đến cho gia đình
                    thân yêu.
                  </blockquote>
                  <h3 className="card-title">Hà Duy</h3>
                  <p className="card-subtitle">Designer</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="testi-card">
                  <div className="card-header">
                    <img
                      src="/images/quote-left.png"
                      width={25}
                      height={25}
                      aria-hidden="true"
                      alt=""
                    />
                    <img
                      src="/images/brand/profile3.jpg"
                      width={90}
                      height={90}
                      loading="lazy"
                      alt="Pamelia Hamrick"
                      className="card-avatar"
                    />
                    <img
                      src="/images/quote-right.png"
                      width={25}
                      height={25}
                      aria-hidden="true"
                      alt=""
                    />
                  </div>
                  <div className="rating-wrapper">
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                  </div>
                  <blockquote className="card-text">
                    Nhờ có Organic tôi đã yên tâm chọn lựa những món thực phẩm
                    đầy dinh dưỡng và đảm bảo sức khỏe dành đến cho gia đình
                    thân yêu.
                  </blockquote>
                  <h3 className="card-title">Tâm</h3>
                  <p className="card-subtitle">Designer</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </section>

      {/*  */}

      <section className="section blog">
        <div className="container">
          <h2 className="h2 section-title">TIN TỨC MỚI NHẤT</h2>
          <center style={{ marginBottom: 25, marginTop: 25 }}>
            <img src="/images/back-ground/bg_title.png" alt="" />
          </center>
          <div className="blogs">
            <div className="box-container">
              <div className="box">
                <div className="image">
                  <img src="/images/Thư mục mới/blog-1.jpg" alt="" />
                </div>
                <div className="content">
                  <div className="icons">
                    <NavLink to="/">
                      <i class="ri-calendar-2-fill"></i>
                      21st may, 2021
                    </NavLink>
                    <NavLink to="/">
                      <i class="ri-account-box-fill"></i>
                      by admin
                    </NavLink>
                  </div>
                  <h3>Rau xanh tăng giá vì trời mưa</h3>
                  <p>
                    Khoảng gần một tuần nay, do ảnh hưởng của những cơn mưa lớn
                    kéo dài liên tiếp nên nguồn ...
                  </p>
                  <NavLink to="/blogdetails" className="btn">
                    Xem thêm
                  </NavLink>
                </div>
              </div>
              <div className="box">
                <div className="image">
                  <img src="/images/Thư mục mới/blog-2.jpg" alt="" />
                </div>
                <div className="content">
                  <div className="icons">
                    <NavLink to="/">
                      <i class="ri-calendar-2-fill"></i>
                      21st may, 2021
                    </NavLink>
                    <NavLink to="/">
                      <i class="ri-account-box-fill"></i>
                      by admin
                    </NavLink>
                  </div>
                  <h3>Nhập khẩu rau quả vượt mốc 1 tỷ USD</h3>
                  <p>
                    Theo báo cáo từ Bộ NN&amp;PTNT, giá trị xuất khẩu hàng rau
                    quả tháng 9 năm 2017 ước đạt 294 triệu USD...
                  </p>
                  <NavLink to="/blogdetails" className="btn">
                    Xem thêm
                  </NavLink>
                </div>
              </div>
              <div className="box">
                <div className="image">
                  <img src="/images/Thư mục mới/blog-3.jpg" alt="" />
                </div>
                <div className="content">
                  <div className="icons">
                    <NavLink to="/">
                      <i class="ri-calendar-2-fill"></i>
                      21st may, 2021
                    </NavLink>
                    <NavLink to="/">
                      <i class="ri-account-box-fill"></i>
                      by admin
                    </NavLink>
                  </div>
                  <h3>Bí quyết bảo quản nho đen</h3>
                  <p>
                    Bí quyết lựa chọn và bảo quản nho tươi – Nho rất ngon và tốt
                    cho sức khỏe...
                  </p>
                  <NavLink to="/blogdetails" className="btn">
                    Xem thêm
                  </NavLink>
                </div>
              </div>
              <div className="box">
                <div className="image">
                  <img src="/images/Thư mục mới/blog-4.jpg" alt="" />
                </div>
                <div className="content">
                  <div className="icons">
                    <NavLink to="/">
                      <i class="ri-calendar-2-fill"></i>
                      21st may, 2021
                    </NavLink>
                    <NavLink to="/">
                      <i class="ri-account-box-fill"></i>
                      by admin
                    </NavLink>
                  </div>
                  <h3>Những loại trái cây Nhật đắt như vàng</h3>
                  <p>
                    Nhật Bản là đất nước có nhiều loại hoa quả có chất lượng
                    thuộc hàng ngon nhất thế giới ...
                  </p>
                  <NavLink to="/blogdetails" className="btn">
                    Xem thêm
                  </NavLink>
                </div>
              </div>
              <div className="box">
                <div className="image">
                  <img src="/images/Thư mục mới/blog-5.jpg" alt="" />
                </div>
                <div className="content">
                  <div className="icons">
                    <NavLink to="/">
                      <i class="ri-calendar-2-fill"></i>
                      21st may, 2021
                    </NavLink>
                    <NavLink to="/">
                      <i class="ri-account-box-fill"></i>
                      by admin
                    </NavLink>
                  </div>
                  <h3>Công dụng của chanh ngâm mật ong</h3>
                  <p>
                    Chắc bạn đã biết, cả chanh và mật ong đều là những nguyên
                    liệu quý bởi những công năng, tác dụng của chúng...
                  </p>
                  <NavLink to="/blogdetails" className="btn">
                    Xem thêm
                  </NavLink>
                </div>
              </div>
              <div className="box">
                <div className="image">
                  <img src="/images/Thư mục mới/blog-6.jpg" alt="" />
                </div>
                <div className="content">
                  <div className="icons">
                    <NavLink to="/">
                      <i class="ri-calendar-2-fill"></i>
                      21st may, 2021
                    </NavLink>
                    <NavLink to="/">
                      <i class="ri-account-box-fill"></i>
                      by admin
                    </NavLink>
                  </div>
                  <h3>4 lý do bạn nên ăn dâu tây</h3>
                  <p>
                    Phòng tránh ung thư, điều chỉnh huyết áp, tăng cường hệ miễn
                    dịch... là những tác dụng bổ ích mà quả dâu tây mang đến cho
                    bạn.
                  </p>
                  <NavLink to="/blogdetails" className="btn">
                    Xem thêm
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section service">
        <div className="container">
          <ul className="service-list">
            <li className="service-item">
              <div className="item-icon">
                <img
                  src="/images/service-icon-1.png"
                  width={40}
                  height={40}
                  loading="lazy"
                  alt="Truck icon"
                />
              </div>
              <h3 className="h3 item-title">Vận chuyển siêu tốc</h3>
            </li>
            <li className="service-item">
              <div className="item-icon">
                <img
                  src="/images/service-icon-2.png"
                  width={40}
                  height={40}
                  loading="lazy"
                  alt="Payment card icon"
                />
              </div>
              <h3 className="h3 item-title">Thanh toán an toàn</h3>
            </li>
            <li className="service-item">
              <div className="item-icon">
                <img
                  src="/images/service-icon-3.png"
                  width={40}
                  height={40}
                  loading="lazy"
                  alt="Helpline icon"
                />
              </div>
              <h3 className="h3 item-title">Hỗ trợ 24/7</h3>
            </li>
          </ul>
        </div>
      </section>
    </Helmet>
  );
};

export default Home;
