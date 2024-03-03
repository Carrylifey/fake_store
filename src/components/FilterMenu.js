import React, { useContext, useState, useEffect } from "react";
//import of product context
import { ProductContext } from "../contexts/ProductContext";
const FilterMenu = ({ onFilterChange }) => {
  const { products } = useContext(ProductContext);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState({
    min: 0,
    max: 1000,
  });
  const [isAvailable, setIsAvailable] = useState(false);

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );
  const handleAvailabilityChange = () => {
    setIsAvailable((prev) => !prev);
  };

  useEffect(() => {
    onFilterChange({
      category: selectedCategory,
      priceRange: selectedPriceRange,
      availability: isAvailable,
    });
  }, [selectedCategory, selectedPriceRange, isAvailable, onFilterChange]);

  return (
    <div>
      <div className="mb-4 flex justify-around items-center ">
        <span>
          <label htmlFor="availability">Availability:</label>
          <input
            type="checkbox"
            id="availability"
            checked={isAvailable}
            onChange={handleAvailabilityChange}
          />
        </span>
        {/* Category Filter */}
        <div className="relative inline w-auto flex-shrink-0">
          {/* Adding Tailwind CSS classes for styling */}
          <select
            id="category"
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category} className="py-2">
                {category}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            {/* Adding a little dropdown icon */}
            <svg
              className="fill-current h-4 w-4 transform rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 3l-7 7 1.41 1.41L10 5.83l5.59 5.58L18 10l-8-8z"
              />
            </svg>
          </div>
        </div>
        {/* Price Range Filter */}
        <span>
          <label htmlFor="priceRange">
            Price Range: ${selectedPriceRange.min}
          </label>
          <input
            type="range"
            id="priceRange"
            min={0}
            max={1000}
            step={10}
            value={selectedPriceRange.max}
            onChange={(e) =>
              setSelectedPriceRange({
                min: selectedPriceRange.min,
                max: Number(e.target.value),
              })
            }
          />
          <span>${selectedPriceRange.max}</span>
        </span>
        {/* Availability Filter */}
      </div>
    </div>
  );
};

export default FilterMenu;
