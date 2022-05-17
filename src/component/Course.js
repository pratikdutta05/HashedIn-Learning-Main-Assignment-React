import React from "react";
import starLogo from "../logo/star.png";
import { addToCart } from "../actions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

const Course = ({ course }) => {
  const dispatch = useDispatch();
  return (
    <div className="outerBox" key={course.id}>
      <div className="courseBox"></div>
      <div className="courseName">{course.title}</div>
      <div className="authorName">{course.author}</div>
      <div className="star">
        <img src={starLogo} alt="Google logo" />
      </div>
      <div className="coursePrice">Rs.{course.actual_price}</div>
      <div>
        <button
          className="addtoCart"
          onClick={() => {
            dispatch(addToCart(course));
            swal("", "Course successfully added in the Cart!", "success");
          }}
        >
          ADD TO CART
        </button>
      </div>
      <div className="arrow">{">"}</div>
    </div>
  );
};

export default Course;
