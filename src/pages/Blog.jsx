import React from 'react'
import "../styles/Blog.css"

import { NavLink } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet.jsx";
export default function Blog() {
  return (
    <Helmet title="Tin tức">
 <main>
      <article>
        {/* 
  - #BREADCUMB
*/}
        <div className="breadcumb">
          <h1>Tin tức</h1>
          <p>
            <NavLink to="/">Trang chủ &gt;&gt;</NavLink>Tin tức
          </p>
        </div>
        {/* blog */}
        <section className="section blog">
          <div className="container">
            <h2 className="titles">Bài viết</h2>
            <div className="blogs">
              <div className="box-container">
                <div className="box">
                  <div className="image">
                    <img src="/images/Thư mục mới/blog-1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="icons">
                      <NavLink to="/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-calendar-date-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
                          <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z" />
                        </svg>
                        21st may, 2021
                      </NavLink>
                      <NavLink to="/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-person-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
                        by admin
                      </NavLink>
                    </div>
                    <h3>Rau xanh tăng giá vì trời mưa</h3>
                    <p>
                      Khoảng gần một tuần nay, do ảnh hưởng của những cơn mưa
                      lớn kéo dài liên tiếp nên nguồn ...
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-calendar-date-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
                          <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z" />
                        </svg>
                        21st may, 2021
                      </NavLink>
                      <NavLink to="/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-person-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-calendar-date-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
                          <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z" />
                        </svg>
                        21st may, 2021
                      </NavLink>
                      <NavLink to="/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-person-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
                        by admin
                      </NavLink>
                    </div>
                    <h3>Bí quyết bảo quản nho đen</h3>
                    <p>
                      Bí quyết lựa chọn và bảo quản nho tươi – Nho rất ngon và
                      tốt cho sức khỏe...
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-calendar-date-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
                          <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z" />
                        </svg>
                        21st may, 2021
                      </NavLink>
                      <NavLink to="/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-person-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-calendar-date-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
                          <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z" />
                        </svg>
                        21st may, 2021
                      </NavLink>
                      <NavLink to="/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-person-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-calendar-date-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
                          <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z" />
                        </svg>
                        21st may, 2021
                      </NavLink>
                      <NavLink to="/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          fill="currentColor"
                          className="bi bi-person-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
                        by admin
                      </NavLink>
                    </div>
                    <h3>4 lý do bạn nên ăn dâu tây</h3>
                    <p>
                      Phòng tránh ung thư, điều chỉnh huyết áp, tăng cường hệ
                      miễn dịch... là những tác dụng bổ ích mà quả dâu tây mang
                      đến cho bạn.
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
      
      </article>
    </main>
    </Helmet>
   
  );
}
