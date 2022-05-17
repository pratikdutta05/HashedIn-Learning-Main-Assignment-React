const baseURl =
  "https://627ca708bf2deb7174de4ade.mockapi.io/course/v1/courses/";

export const addAll = () => {
  return function (dispatch) {
    fetch(baseURl)
      .then((response) => response.json())

      .then((data) =>
        dispatch({
          type: "SET_COURSE_DATA",

          data: data,
        })
      )
      .catch((error) =>
        dispatch({
          type: "FETCH_FAILED",

          data: error,
        })
      );
  };
};

// export const addToCart = (data) => {
//   return function (dispatch) {
//     dispatch({
//       type: "ADD_TO_CART",
//       data: data,
//     });
//   };
// };

export const addToCart = (data) => {
  return {
    type: "ADD_TO_CART",

    data: data,
  };
};
