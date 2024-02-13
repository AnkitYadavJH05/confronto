import { initCatalog as fetchCatalog, getProductDetails } from "../../server";

export const initCatalog = () => async (dispatch) => {
  const products = await fetchCatalog();
  dispatch({ type: "INITIALIZE_CATALOG", products });
};

export const productDetails = (id) => async (dispatch) => {
  const selected = await getProductDetails(id);
  dispatch({ type: "PRODUCT_DETAILS", selected });
};
