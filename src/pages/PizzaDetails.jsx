import React, { useState, useEffect, useRef } from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules

import { Autoplay, Pagination, Navigation } from "swiper";
import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";

import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";

import "../styles/product-details.css";
import TopProductCard from "../components/UI/product-card/TopProductCard.jsx";
import { NavLink } from "react-router-dom";
const FoodDetails = () => {
  const [tab, setTab] = useState("desc");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
 function convertMoney(num) {
   return num.toLocaleString("it-IT", {
     style: "currency",
     currency: "VND",
   });
 }
  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc, image01 } = product;

  const relatedProduct = products.filter((item) => category === item.category);

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(enteredName, enteredEmail, reviewMsg);
  };

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (

    <Helmet title={title}>
      <div className="breadcumb">
        <h1>{title}</h1>
        <p>
          <NavLink to="/">Trang chủ &gt;&gt;</NavLink>
          {title}
        </p>
      </div>
     
        <section className="Product-details">
          <Container>
            <Row>
              <Col lg="2" md="2">
                <div className="product__images ">
                  <div
                    className="img__item mb-3"
                    onClick={() => setPreviewImg(product.image01)}
                  >
                    <img src={product.image01} alt="" className="w-50" />
                  </div>
                  <div
                    className="img__item mb-3"
                    onClick={() => setPreviewImg(product.image02)}
                  >
                    <img src={product.image02} alt="" className="w-50" />
                  </div>

                  <div
                    className="img__item"
                    onClick={() => setPreviewImg(product.image03)}
                  >
                    <img src={product.image03} alt="" className="w-50" />
                  </div>
                </div>
              </Col>

              <Col lg="4" md="4">
                <div className="product__main-img">
                  <img src={previewImg} alt="" className="w-100" />
                </div>
              </Col>

              <Col lg="6" md="6">
                <div className="single__product-content">
                  <h2 className="product__title mb-3">{title}</h2>
                  <p className="product__price">
                    {" "}
                    Giá tiền : <span>{convertMoney(price)}</span>
                  </p>
                  <p className="category mb-5">
                    Phân loại : <span>{category}</span>
                  </p>

                  <button onClick={addItem} className="addTOCart__btn">
                    Thêm vào giỏ
                  </button>
                </div>
              </Col>

              <Col lg="12">
                <div className="tabs d-flex align-items-center gap-5 py-3">
                  <h6
                    className={` ${tab === "desc" ? "tab__active" : ""}`}
                    onClick={() => setTab("desc")}
                  >
                    Miêu tả
                  </h6>
                  <h6
                    className={` ${tab === "rev" ? "tab__active" : ""}`}
                    onClick={() => setTab("rev")}
                  >
                    Đánh giá
                  </h6>
                </div>

                {tab === "desc" ? (
                  <div className="tab__content">
                    <p>{desc}</p>
                  </div>
                ) : (
                  <div className="tab__form mb-3">
                    <div className="review pt-5">
                      <p className="user__name mb-0">Jhon Doe</p>
                      <p className="user__email">jhon1@gmail.com</p>
                      <p className="feedback__text">great product</p>
                    </div>

                    <div className="review">
                      <p className="user__name mb-0">Jhon Doe</p>
                      <p className="user__email">jhon1@gmail.com</p>
                      <p className="feedback__text">great product</p>
                    </div>

                    <div className="review">
                      <p className="user__name mb-0">Jhon Doe</p>
                      <p className="user__email">jhon1@gmail.com</p>
                      <p className="feedback__text">great product</p>
                    </div>
                    <form className="form" onSubmit={submitHandler}>
                      <div className="form__group">
                        <input
                          type="text"
                          placeholder="Họ và tên"
                          onChange={(e) => setEnteredName(e.target.value)}
                          required
                        />
                      </div>

                      <div className="form__group">
                        <input
                          type="text"
                          placeholder="Email"
                          onChange={(e) => setEnteredEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div className="form__group">
                        <textarea
                          rows={5}
                          type="text"
                          placeholder="Đánh giá"
                          onChange={(e) => setReviewMsg(e.target.value)}
                          required
                        />
                      </div>

                      <button type="submit" className="addTOCart__btn">
                        Gửi tin
                      </button>
                    </form>
                  </div>
                )}
              </Col>

              <Col lg="12" className="mb-5 mt-4">
                <h2 className="related__Product-title">Sản phẩm liên quan</h2>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section top-product">
          <div className="container">
            <Swiper
              slidesPerView={1}
              loop={true}
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="mySwiper"
            >
              {relatedProduct.map((item) => (
                <SwiperSlide>
                  <TopProductCard item={item} key={item.id} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
     
    </Helmet>
  );
};

export default FoodDetails;
