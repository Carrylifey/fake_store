import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const Searchproduct = () => {
  const { setSearchQuery } = useContext(ProductContext);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  return (

      <input
        type="text"
        placeholder="Search for products..."
        onChange={handleSearch}
      />
  );
};

export default Searchproduct;
