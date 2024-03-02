import React from "react";
import { createContext, useState, useEffect } from "react";

//createcontext
export const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  //product State
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  //fetch products
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsloading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsloading(false);
      }
    };

    fetchData();
  }, []);

  
  return (
    <ProductContext.Provider value={{ products, isLoading, setSearchTerm,searchTerm}}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
