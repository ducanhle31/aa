import React, { useRef} from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "reactstrap";

import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import "../../styles/LOginOut.css"
 import * as Components from "../../pages/Components";

const nav__links = [
  {
    display: "Trang chủ",
    path: "/home",
  },
  {
    display: "Sản phẩm",
    path: "/pizzas",
  },
  {
    display: "Giới thiệu",
    path: "/about",
  },

  {
    display: "Tin tức",
    path: "/blog",
  },
  {
    display: "Liên hệ",
    path: "/contact",
  },
  {
    display: "Giỏ hàng",
    path: "/cart",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);


   const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();
const loginEmailRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

    const [signIn, toggle] = React.useState(true);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  let navigate = useNavigate();

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  console.log(menuRef?.current?.classList.value);

 
  return (
    <div>
      <header className="header" ref={headerRef}>
        <Container>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo" onClick={() => navigate("/home")}>
              <h1 className="h1">
                <Link to="/" className="logo">
                  Orga<span className="span">nic</span>
                </Link>
              </h1>
            </div>
            {/* ======= menu ======= */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div
                className="menu d-flex align-items-center gap-5"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="header-logobutton">
                  <h1 className="h1">
                    <Link to="/" className="logo">
                      Orga<span className="span">nic</span>
                    </Link>
                  </h1>
                  <div className="header__closeButton">
                    <span onClick={toggleMenu}>
                      <i className="ri-close-fill"></i>
                    </span>
                  </div>
                </div>

                {nav__links.map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className={(navClass) =>
                      navClass.isActive ? "active__menu" : ""
                    }
                    onClick={toggleMenu}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
   


{/*  */}

            {/* ======== nav right icons ========= */}
            <div className="nav__right d-flex align-items-center gap-4">
              <span
                className="cart__icon header-action-btn"
                onClick={toggleCart}
              >
                <i className="ri-shopping-basket-line"></i>
                <span className="cart__badge">{totalQuantity}</span>
              </span>
                
              <span className="user  header-action">
                <label
                  htmlFor="show1"
                  className="show-btn1 header-action-btn"
                >
                  <i class="ri-user-line"></i>
                </label>
              </span>
             
 
              <div className="center1">
                <input type="checkbox" id="show1" />
                <div className="container1">
                 
                   <Components.Container>
                    <label htmlFor="show1" className="close-btn1" title="close">
                    <i class="ri-close-line"></i>
                  </label>
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form onSubmit={submitHandler}>
                      <Components.Title>Tạo tài khoản</Components.Title>
                      <Components.Input type='text' placeholder='Họ và tên' required
                    ref={signupNameRef} />
                      <Components.Input type='email' placeholder='Email'  required
                    ref={signupEmailRef} />
                      <Components.Input type='password' placeholder='Mật khẩu'  required
                    ref={signupPasswordRef} />
                      <Components.Button>Đăng ký</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form onSubmit={submitHandler}>
                       <Components.Title>Đăng nhập</Components.Title>
                       <Components.Input type='email' placeholder='Email'  required
                    ref={loginEmailRef} />
                       <Components.Input type='password' placeholder='Mật khẩu'   required
                    ref={loginPasswordRef} />
                       <Components.Anchor href='#'>Quên mật khẩu?</Components.Anchor>
                       <Components.Button>Đăng nhập</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Chào mừng trở lại!</Components.Title>
                      <Components.Paragraph>
                          Để giữ kết nối với chúng tôi, vui lòng đăng nhập bằng thông tin cá nhân của bạn.
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                         Đăng nhập
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Chào bạn!</Components.Title>
                        <Components.Paragraph>
                          Nhập thông tin cá nhân của bạn và bắt đầu hành trình với chúng tôi
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Đăng ký
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
                </div>
              </div>
              <div className="nav-open-btn">
                <span className="mobile__menu  " onClick={toggleMenu}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </header>

   
    </div>
  );
};

export default Header;
