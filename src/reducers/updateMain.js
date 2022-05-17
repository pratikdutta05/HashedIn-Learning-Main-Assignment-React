const initState = {
  courses: [],
  cart: [],
  errors: "",
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_COURSE_DATA":
      state = Object.assign({}, state, { courses: [...action.data] });
      return state;

    case "ADD_TO_CART":
      const cart = [...state.cart];

      if (cart.find((w) => w.id === action.data.id))
        return { ...state, errors: "Already added in cart" };
      else
        var obj = {
          ...state,

          cart: [...state.cart, { ...action.data }],

          errors: "",
        };
      return obj;
    default:
      return state;
  }
};

export default cartReducer;
