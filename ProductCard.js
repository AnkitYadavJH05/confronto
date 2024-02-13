import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCompare } from "../store/actions/compareActions";
import { getImage } from "../server";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddToCompare = () => {
    dispatch(addToCompare(product.id));
  };

  const handleImageClick = () => {
    history.push(`/product/${product.id}`);
  };

  return (
    <div>
      <img
        src={getImage(product.image)}
        alt={product.model}
        onClick={handleImageClick}
      />
      <h3>{product.brand}</h3>
      <p>{product.model}</p>
      <button onClick={handleAddToCompare}>Add to Compare</button>
    </div>
  );
}

export default ProductCard;
