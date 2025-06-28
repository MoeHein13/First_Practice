import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  const items = products.map((item) => {
    return <Product key={item.id} item={item} />;
  });

  return <div className="mx-auto ">{items}</div>;
}

export default ProductList;
