import React from "react";
import ApplicationHeading from "./ApplicationHeading";
import { useSelector } from "react-redux";
import MyCartLineItem from "./MyCartLineItem";

const AddToCartScreen = () => {
  const { cart } = useSelector((state) => state.main);

  return (
    <div>
      <div>
        <ApplicationHeading value="Shoping Cart" />
      </div>
      <div className="addToCartSh">{cart.length} Courses in Cart</div>
      <div className="cartAmount">
        <div className="listCartItem">
          {cart.map((item) => {
            return <MyCartLineItem item={item} key={item.id} />;
          })}
        </div>
        <div className="totalAmount">Total Amount</div>
      </div>
    </div>
  );
};

export default AddToCartScreen;
