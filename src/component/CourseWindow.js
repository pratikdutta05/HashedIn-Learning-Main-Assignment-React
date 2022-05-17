import axios from "axios";
import React, { useEffect, useState } from "react";
import Course from "./Course";
import { useDispatch, useSelector } from "react-redux";
import { setMovieData } from "../actions/index";
import MyCart from "./MyCart";
import SearchBar from "./Search";

const CourseWindow = () => {
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();

  const getCourses = async () => {
    await axios

      .get("https://627ca708bf2deb7174de4ade.mockapi.io/course/v1/courses")

      .then((response) => {
        setCourses(response.data);
      })

      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCourses().then((resp) => {
      console.log(resp);
      dispatch(setMovieData(resp.data));
    });
  }, []);

  //   useEffect(() => {
  //     getCourses();
  //     console.log(courses);
  //     dispatch(setMovieData(courses));
  //   }, []);

  const { courseList } = useSelector((state) => state.updateMovie);
  console.log(courseList);

  return (
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
          {courses.map((course) => {
            return <Course course={course} />;
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
  );
};

export default CourseWindow;
