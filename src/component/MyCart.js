import React, { useEffect } from "react";
import CartLineItem from "./CartLineItem";
import { useSelector } from "react-redux";

const MyCart = () => {
  const { cart } = useSelector((state) => state.main);

  // const getTotal = () => {
  var total = 0;
  var num = cart.map((i) => parseInt(i.actual_price));

  console.log(num);

  if (num.length != 0) {
    total = num.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
    });
  }

  return (
    <div className="cartDtl">
      <div className="cartdetails">YOUR CART DETAILS</div>
      <div className="cartadd">
        {console.log(total)}
        {cart.map((item) => {
          return <CartLineItem item={item} key={item.id} />;
        })}
      </div>
      <div className="cartFooter">
        <div className="totalHeading">Total Cart Value</div>
        <div className="totalValue">Rs.{total}/-</div>
      </div>
    </div>
  );
};

export default MyCart;
