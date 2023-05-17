import React from "react";

import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <div>
      <section className="section newsletter">
        <div className="newsletter-card">
          <p className="section-subtitle">-- Theo dõi chúng tôi --</p>
          <h2 className="h2 section-title">
            Đăng kí nhận tin <span className="span">khuyến mãi 20% .</span>
          </h2>
          <form action="" className="newsletter-form">
            <input
              type="email"
              name="email"
              placeholder="Nhập Email "
              required=""
              className="input-email"
            />
            <button type="submit" className="btn btn-primary btnn">
              <span>Đăng ký</span>
            </button>
          </form>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-brand">
              <Link to="/" className="logo">
                Orga<span className="span">nic</span>
              </Link>
              <p className="footer-text">
                Organic chuyên cung cấp những sản phẩm được kiểm soát chặt chẽ
                từ khâu con giống, chế biến thức ăn, chăm sóc sức khỏe vật nuôi
                đến giết mổ, bao gói, bảo quản và vận chuyển một cách tốt nhất,
                sạch nhất cho thị trường.
              </p>
              <ul className="social-list">
                <li>
                  <Link href="/" className="social-link">
                    <img
                      src="/images/btn/user-1.svg"
                      width="30px"
                      height="30px"
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link to="/" className="social-link">
                    <img
                      src="/images/btn/user-2.svg"
                      width="30px"
                      height="30px"
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link to="/" className="social-link">
                    <img
                      src="/images/btn/user-3.svg"
                      width="30px"
                      height="30px"
                      alt=""
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Liên kết</p>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to="/shop" className="footer-link">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link to="/blog" className="footer-link">
                  Tin tức
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Liên hệ
                </Link>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Liên hệ</p>
              </li>
              <li className="footer-item">
                <div className="contact-icon">
                  <i class="ri-map-pin-line"></i>
                </div>
                <address className="contact-link">
                  Thụy Phương, Bắc TỪ Liêm, HN.
                </address>
              </li>
              <li className="footer-item">
                <div className="contact-icon">
                  <i class="ri-phone-line"></i>
                </div>
                <Link to="/" className="contact-link">
                  034 444 9999
                </Link>
              </li>
              <li className="footer-item">
                <div className="contact-icon">
                  <i class="ri-mail-fill"></i>
                </div>
                <Link to="/" className="contact-link">
                  organic.com
                </Link>
              </li>
            </ul>
            <div className="footer-list">
              <p className="footer-list-title">Bản tin</p>
              <p className="newsletter-text">
                Bạn sẽ nhận được thông báo khi có tin mới.
              </p>
              <form action="" className="footer-form">
                <input
                  type="email"
                  name="email"
                  placeholder="Địa chỉ Email *"
                  required=""
                  className="footer-input"
                />
                <button
                  type="submit"
                  className="footer-form-btn"
                  aria-label="Submit"
                >
                  <i class="ri-mail-fill"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              © 2023{" "}
              <Link to="/" className="copyright-link">
                organic
              </Link>
            </p>
            <ul className="footer-bottom-list">
              <li>
                <Link to="/" className="footer-bottom-link">
                  Chính sách bảo mật
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
