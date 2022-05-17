import React from "react";

const CartLineItem = ({ item }) => {
  return (
    <div className="lineItemCart">
      <div className="nameBox">
        <div className="courseBox"></div>
        <div className="cartItemTitle">{item.title}</div>
      </div>
      <div className="lineItemPrice">Rs {item.actual_price}/-</div>
    </div>
  );
};

export default CartLineItem;
