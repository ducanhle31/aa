import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getCartTotal,
  removeItem,
  clearCard,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cartSlice";

const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div class="card">
      <div class="listCard">
        <h2 style={{ marginBottom: "30px" }}>Cart - {cart.length} items</h2>
        {cart?.map((data) => (
          <li>
            <img src={data.img} />

            <div>{data.title}</div>
            <div className="price">{data.price}</div>
            <div>
              <button onClick={() => dispatch(decreaseItemQuantity(data.id))}>
                -
              </button>
              <div class="count">{data.quantity}</div>
              <button onClick={() => dispatch(increaseItemQuantity(data.id))}>
                +
              </button>
            </div>
            <div>
              <button onClick={() => dispatch(removeItem(data.id))}>
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </div>
      <div class="checkOut">
        <h5 className="mb-0">Tóm tắt</h5>
        <span>Số lượng: {totalQuantity}</span>
        <div class="total">Tổng tiền:{totalPrice} </div>
        <button
          onClick={() => dispatch(clearCard(cart.data))}
          class="closeShopping"
        >
          Thanh toán
        </button>
      
      </div>
    </div>
  );
};

export default CartPage;
