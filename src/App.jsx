import { useState } from "react";
import useFetchProducts from "./Hooks/useFetchProducts";
import CategoryFilter from "./Components/CategoryFilter";
import ProductList from "./Components/ProductList";

function App() {
  const { products, loading, error } = useFetchProducts();
  const [selectCategory, setSelectCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const selectedProduct =
    selectCategory === "All"
      ? products
      : products.filter((product) => product.category === selectCategory);

  return (
    <div>
      {loading && (
        <h1 className="text-green-600 text-center mt-70 ">
          <strong>Loading...... </strong>
        </h1>
      )}
      {error && <div>{error}</div>}

      {!loading && !error && (
        <div className="bg-gray-400 font-serif ">
          <div className="border  rounded-3xl p-3 w-100 mx-auto">
            <h1 className="text-center text-4xl ">
              <strong className="text-emerald-800">Simple Ecommerce</strong>
            </h1>
          </div>
          <CategoryFilter
            category={categories}
            selectcat={selectCategory}
            selectCatChange={setSelectCategory}
          />
          <ProductList products={selectedProduct} />
        </div>
      )}
    </div>
  );
}

export default App;
