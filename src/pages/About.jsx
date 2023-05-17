import React from 'react'
import "../styles/About.css"
import Helmet from "../components/Helmet/Helmet.jsx";
import { NavLink } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
export default function About() {
  return (
 <Helmet title="Giới thiệu">
   <main>
      <article>
        {/* 
  - #BREADCUMB
*/}
        <div className="breadcumb">
          <h1>Giới thiệu</h1>
          <p>
            {" "}
            <NavLink to="/">Trang chủ &gt;&gt;</NavLink>Giới thiệu
          </p>
        </div>
        {/*  */}
        <section className="container">
          <div className="about">
            <div className="content">
              <h3>Thực phẩm hữu cơ giàu dinh dưỡng.</h3>
              <p>
                Organic chuyên cung cấp những sản phẩm được kiểm soát chặt chẽ
                từ khâu con giống, chế biến thức ăn, chăm sóc sức khỏe vật nuôi
                đến giết mổ, bao gói, bảo quản và vận chuyển một cách tốt nhất,
                sạch nhất cho thị trường.
              </p>
              <p>
                Các sản phẩm rau hữu cơ của Michimart cung cấp đều nằm trong dự
                án ADDA được tổ chức Hệ thống bảo đảm cùng tham gia– PGS
                (Participatory Guarantee System) chứng nhận, đảm bảo tính hữu
                cơ.
              </p>
              <p>
                Thực phẩm sạch, trái cây an toàn đều có giấy chứng nhận an toàn
                VIETGAP, GLOBAL GAP, HACCP, có xuất xứ rõ ràng, không những sạch
                – mà còn ngon.
              </p>
            </div>
            <div className="image">
              <img src="/images/about-img.jpg" alt="" />
            </div>
          </div>
        </section>
        {/*  */}
        <section className="container">
          <div className="gallery">
            <div className="box-container">
              <div className="box">
                <img src="/images/slide/gallery-img-1.jpg" alt="" />
              </div>
              <div className="box">
                <img src="/images/slide/gallery-img-2.jpg" alt="" />
              </div>
              <div className="box">
                <img src="/images/slide/gallery-img-4.jpg" alt="" />
              </div>
              <div className="box">
                <img src="/images/slide/gallery-img-3.jpg" alt="" />
              </div>
              <div className="box">
                <img src="/images/slide/gallery-img-5.jpg" alt="" />
              </div>
              <div className="box">
                <img src="/images/slide/gallery-img-6.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        {/*  */}

        {/* 
  - #PARTNER
*/}
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
       
   
      </article>
    </main>
 </Helmet>

   
  )
}
