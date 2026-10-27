import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  let product;

  switch (id) {
    case "1":
      product = "Product A";
      break;

    case "2":
      product = "Product B";
      break;

    case "3":
      product = "Product C";
      break;

    default:
      product = "Product not found";
  }

  return (
    <div>
      <h1>{product}</h1>
    </div>
  );
};

export default Product;
