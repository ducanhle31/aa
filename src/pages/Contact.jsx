
import "../styles/Contact.css" ;import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
export default function Contact() {

const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };


  return (
    <Helmet title="Liên hệ">
       <main>
      <article>
        {/* 
  - #BREADCUMB
*/}
        <div className="breadcumb">
          <h1>Liên hệ</h1>
          <p>
            <NavLink to="/">Trang chủ &gt;&gt;</NavLink> Liên hệ
          </p>
        </div>
        {/* contact */}
        <section className="container">
          <div className="contact">
            <div className="icons-container">
              <div className="icons">
               <div> <i class="ri-phone-line"></i></div>
             
              
                <h3>Điện thoại</h3>
                <p>034.444.9999</p>
              </div>
              <div className="icons">
              <div> <i class="ri-mail-line"></i></div>
             
                <h3>Email</h3>
                <p>organic.com</p>
              </div>
              <div className="icons">
              <div>  <i class="ri-map-pin-line"></i></div>
            
              
                <h3>Địa chỉ</h3>
                <p>Thụy Phương, Bắc Từ Liêm, Hà Nội</p>
              </div>
            </div>
            <div className="row">
              <form action="" onSubmit={submitHandler}>
                <h3>Liên hệ với chúng tôi</h3>
                <div className="inputBox">
                  <input type="text" placeholder="Họ và tên" className="box"  required ref={signupNameRef} />
                  <input type="email" placeholder="Email" className="box"  required ref={signupEmailRef} />
                </div>
                <div className="inputBox">
                  <input
                    type="number"  required
                    placeholder="Số điện thoại " 
                    ref={signupPasswordRef}
                    className="box"
                  />
                  <input type="text"  required placeholder="Chủ đề " className="box" />
                </div>
                <textarea
                  placeholder="Lời nhắn"
                  cols={30}
                  rows={10}  required
                  defaultValue={""}
                />
               
                   <button type="submit" className="addTOCart__btn">
                 Gửi tin
                </button>
              </form>
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.6489708125914!2d105.77425111053716!3d21.08667788049617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134554a2d998dd5%3A0x2ee9ee775277367f!2zNDUgxJAuVGjhu6V5IFBoxrDGoW5nLCDEkMO0bmcgTmfhuqFjLCBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1678900914283!5m2!1svi!2s"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </section>
     
      </article>
    </main>
    </Helmet>
   
  );
}
