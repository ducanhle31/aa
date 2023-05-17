import React from "react";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers.jsx";
import Carts from "../UI/cart/Carts.jsx";
import Top from "./Totop.jsx";
import { useSelector } from "react-redux";
import "../Footer/Layout.css"
const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);

  return (
    <div>
      <Header />
      {showCart && <Carts />}
      <div>
        <Routes />
      </div>

      <Footer />

      <Top />
  
    </div>
  );
};

export default Layout;
