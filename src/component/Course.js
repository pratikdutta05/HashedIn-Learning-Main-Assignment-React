import React from "react";
import starLogo from "../logo/star.png";

const Course = ({ course }) => {
  return (
    <div className="outerBox">
      <div className="courseBox"></div>
      <div className="courseName">{course.title}</div>
      <div className="authorName">{course.author}</div>
      <div className="star">
        <img src={starLogo} alt="Google logo" />
      </div>
      <div className="coursePrice">Rs.{course.actual_price}</div>
      <div>
        <button className="addtoCart">ADD TO CART</button>
      </div>
      <div className="arrow">></div>
    </div>
  );
};

export default Course;
