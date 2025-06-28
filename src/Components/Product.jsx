import React from "react";

function Product({ item }) {
  return (
    <div className=" felx flex-col p-3 border w-150 mx-auto">
      <div className="flex flex-row items-center space-x-5 mb-3">
        <img src={item.image} alt={item.title} className="w-40" />
        <div className="font-bold"> Title : {item.title}</div>
      </div>
      <div>
        Price : <span className="font-bold">$ {item.price}</span>
      </div>
      <div>
        rating : {item.rating.rate} from {item.rating.count}
      </div>
    </div>
  );
}

export default Product;
