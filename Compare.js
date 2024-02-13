import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCompare } from "../store/actions/compareActions";
import { getImage } from "../server";

function Compare() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.compare.products);

  const handleRemoveFromCompare = (productId) => {
    dispatch(removeFromCompare(productId));
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={getImage(product.image)} alt={product.model} />
          <h3>{product.brand}</h3>
          <p>{product.model}</p>
          <button onClick={() => handleRemoveFromCompare(product.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Compare;
