import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productDetails } from "../store/actions/catalogActions";
import { getImage } from "../server";

function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.catalog.selected);

  useEffect(() => {
    dispatch(productDetails(id));
  }, [dispatch, id]);

  if (!selected) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={getImage(selected.image)} alt={selected.model} />
      <h3>{selected.brand}</h3>
      <p>{selected.model}</p>
      {/* Render other product details */}
    </div>
  );
}

export default Product;
