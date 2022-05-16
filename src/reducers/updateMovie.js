const initState = {
  courses: [],
};

const updateMovie = (state = initState, action) => {
  switch (action.type) {
    case "SET_MOVIE_DATA":
      return { ...state, courses: action.data };
    default:
      return state;
  }
};

export default updateMovie;
