import React from "react";

const MyCart = () => {
  return (
    <div className="cartDtl">
      <div className="cartdetails">YOUR CART DETAILS</div>
      <div className="cartadd">
        Your cart is empty right now. Please add courses in the cart from the
        list{" "}
      </div>
      <div className="cartFooter">
        <div className="totalHeading">Total Cart Value</div>
        <div className="totalValue">Rs. 0/-</div>
      </div>
    </div>
  );
};

export default MyCart;
