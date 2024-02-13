import { getProductDetails } from "../../server";

export const addToCompare = (id) => async (dispatch, getState) => {
  const { compare } = getState();
  const productAlreadyExists = compare.products.some((p) => p.id === id);

  if (!productAlreadyExists) {
    const product = await getProductDetails(id);
    dispatch({ type: "ADD_TO_COMPARE", product });
  }
};

export const removeFromCompare = (id) => (dispatch) => {
  dispatch({ type: "REMOVE_FROM_COMPARE", id });
};
