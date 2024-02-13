import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initCatalog } from "../store/actions/catalogActions";
import ProductCard from "./ProductCard";

function Catalog() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.catalog.products);

  useEffect(() => {
    dispatch(initCatalog());
  }, [dispatch]);

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Catalog;
