const initialState = {
  products: [],
};

const compareReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_COMPARE":
      return {
        ...state,
        products: [...state.products, action.product],
      };
    case "REMOVE_FROM_COMPARE":
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.id),
      };
    default:
      return state;
  }
};

export default compareReducer;
