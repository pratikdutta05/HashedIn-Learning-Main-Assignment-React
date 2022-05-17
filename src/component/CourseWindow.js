import axios from "axios";
import React, { useEffect, useState } from "react";
import Course from "./Course";
import { useDispatch, useSelector } from "react-redux";
import { addAll } from "../actions";
import MyCart from "./MyCart";
import SearchBar from "./Search";
import ApplicationHeading from "./ApplicationHeading";

const CourseWindow = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addAll());
  }, [dispatch]);

  const { courses } = useSelector((state) => state.main);

  return (
    <div>
      <div>
        <ApplicationHeading value="Discover Latest Courses on React" />
      </div>
      <div className="courseSearch">
        <div className="courseList">
          <div className="category">
            <div>All Courses</div>

            <div className="sortPrice">
              <select name="price">
                <option value="price">Course Price</option>
              </select>
            </div>
          </div>

          <div className="lineItem">
            {courses.slice(0, 8).map((course) => {
              return <Course course={course} key={course.id} />;
            })}
          </div>
        </div>

        <div className="searchCourse">
          <div className="searchBut">
            <SearchBar />
          </div>
          <div className="cartdetails">
            <MyCart></MyCart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseWindow;
