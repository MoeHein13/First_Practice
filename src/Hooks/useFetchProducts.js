import React, { useEffect, useState } from "react";
import axios from "axios";

function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      setProducts(response.data);
    } catch (error) {
      setError(`Error Occur during fetching.. error:${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error };
}

export default useFetchProducts;
