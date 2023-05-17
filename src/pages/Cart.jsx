import React from "react";
import { NavLink, Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-page.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

     function convertMoney(num) {
       return num.toLocaleString("it-IT", {
         style: "currency",
         currency: "VND",
       });
     }
  return (
    <Helmet title="Giỏ hàng">
      <div className="breadcumb">
        <h1>Giỏ hàng</h1>
        <p>
          <NavLink to="/">Trang chủ &gt;&gt;</NavLink>Giỏ hàng
        </p>
      </div>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-cente">Không có sản phẩm nào trong giỏ</h5>
              ) : (
                <>
                  <h5 className="mb-5">Đơn hàng của bạn</h5>
                  <table className="table table-borderless  align-middle">
                    <thead>
                      <tr className="tr">
                        <th className="th">Hình ảnh</th>
                        <th className="th">Tên </th>
                        <th className="th">Giá tiền</th>
                        <th className="th">Số lượng</th>
                        <th className="th">Xóa</th>
                      </tr>
                    </thead>
                    <tbody className="tbody">
                      {cartItems.map((item) => (
                        <Tr item={item} key={item.id} />
                      ))}
                    </tbody>
                  </table>
                </>
              )}

              <div className="mt-4 tong">
                <h6>
                  Tổng phụ :
                  <span className="cart__subtotal">
                    {convertMoney(totalAmount)}
                  </span>
                </h6>

                <div className="cart__page-btn">
                  <button className="addTOCart__btn me-4">
                    <Link to="/pizzas">Tiếp tục mua hàng</Link>
                  </button>
                  <button className="addTOCart__btn">
                    <Link to="/checkout">Tiến hành thanh toán</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}px</td>
      <td className="text-center cart__item-del">
        <i className="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart;
