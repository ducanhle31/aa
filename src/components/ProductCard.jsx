import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function ProductCard() {
  
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  return (
  
      <div class="list">
        {items.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} />
            <div class="title">{item.title}</div>
            <div class="price"> {item.price}</div>
            <button onClick={() => dispatch(addToCart(item))}>
              Add To Card
            </button>
          </div>
        ))}
      </div>
    
  
  );
}
