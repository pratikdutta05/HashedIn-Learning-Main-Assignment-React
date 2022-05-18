import React from "react";
import ApplicationHeading from "./ApplicationHeading";
import { useSelector } from "react-redux";
import Course from "./Course";
import MyCartLineItem from "./MyCartLineItem";

const AddToCartScreen = () => {
  const { courses, cart } = useSelector((state) => state.main);

  var total = 0;
  var num = cart.map((i) => parseInt(i.actual_price));

  if (num.length != 0) {
    total = num.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
    });
  }

  return (
    <div>
      <div>
        <ApplicationHeading value="Shoping Cart" />
      </div>
      <div className="addToCartSh">{cart.length} Courses in Cart</div>
      <div className="cartAmount">
        <div className="listCartItem">
          <div>
            {cart.map((item) => {
              return <MyCartLineItem item={item} key={item.id} />;
            })}
          </div>
        </div>
        <div className="totalAmount">
          <div className="totalCartAmount">Total Amount</div>
          <div className="totalPrice">Rs. {total}/-</div>
          <div className="totalDiscount">You have saved Rs 0/-</div>
          <div>
            <button className="totalCheckout">CHECKOUT</button>
          </div>
        </div>
      </div>
      <div className="recomCourse">
        <div className="recomandedHeader">Recomanded Course</div>
        <div className="recomndedlineItem">
          {courses.slice(0, 2).map((course) => {
            return <Course course={course} key={course.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AddToCartScreen;
