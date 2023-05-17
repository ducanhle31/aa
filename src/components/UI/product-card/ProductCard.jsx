import React from "react";


import parse from "html-react-parser";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, title, image01, price,del,star, extraIngredients } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,star,
        title,
        image01,
        del,
        price,
        extraIngredients
      })
    );
  };
   const countStar = (star) => {
     let resultStart = "";
     let full;
     let half;
     let nostar;
     if (star % 1 == 0) {
       full = star;
       nostar = 5 - star;
       half = 0;
     } else {
       full = star - 0.5;
       nostar = 5 - star - 0.5;
       half = 1;
     }
     for (let i = 0; i < full; i++) {
       resultStart += `<IonIcon name="star-sharp"></IonIcon>`;
     }
     resultStart += half ? `<IonIcon name="star-half-sharp"></IonIcon>` : "";
     for (let i = 0; i < nostar; i++) {
       resultStart += `<IonIcon name="star-outline"></IonIcon>`;
     }
     return resultStart;
   };
    function convertMoney(num) {
      return num.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
    }
  return (
    <div>
      <div className="product__element product-card filterDiv ">
        <figure className="card-banner">
          <img
            className="images"
            width={189}
            height={189}
            loading="lazy"
            alt="Pizza"
            src={image01}
          />

          <div className="btn-wrapper">
            {" "}
            <Link to={`/pizzas/${id}`}>
              <button className="product-btn" aria-label="Quick View">
                <i class="ri-eye-line"></i>
                <div className="tooltipp">Xem thêm</div>
              </button>
            </Link>
          </div>
        </figure>
        <div className="rating-wrapper">{countStar(star)}</div>
        <h3 className="h4 card-title product__name">
          <Link to={`/pizzas/${id}`}>{title}</Link>
        </h3>
        <div className="price-wrapper">
          <del className="del">{convertMoney(del)}</del>
          <data className="price product__price">{convertMoney(price)}</data>
        </div>

        <button
          onClick={addToCart}
          className="btn btn-primary btn__add__to__cart"
        >
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
