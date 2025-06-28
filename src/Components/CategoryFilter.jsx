import React from "react";

function CategoryFilter({ category, selectcat, selectCatChange }) {
  const handleClickCategory = (selectItem) => {
    selectCatChange(selectItem);
  };

  const filterCategories = category.map((cat) => {
    return (
      <div>
        <button
          key={cat}
          onClick={() => {
            handleClickCategory(cat);
          }}
          className={`border p-3 rounded-3xl text-black text-xl  font-bold ${
            cat === selectcat ? "bg-emerald-300" : ""
          }`}
        >
          {cat}
        </button>
      </div>
    );
  });
  return (
    <div
      className=" flex justify-between w-180 mx-auto mt-4 mb-10
  "
    >
      {filterCategories}
    </div>
  );
}

export default CategoryFilter;
