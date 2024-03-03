import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import Searchandfilter from "../components/Searchandfilter";
import FilterMenu from "../components/FilterMenu";
const Home = () => {
  //states
  const { products, isLoading, searchTerm } = useContext(ProductContext);
  const [appliedFilters, setAppliedFilters] = useState({
    category: "",
    priceRange: { min: 0, max: 1000 },
    availability: false,
  });
  //function for filter chnage
  const handleFilterChange = (filters) => {
    // Ensure that the filters are different from the current state
    if (
      filters.category !== appliedFilters.category ||
      filters.priceRange !== appliedFilters.priceRange ||
      filters.availability !== appliedFilters.availability
    ) {
      setAppliedFilters(filters);
    }
  };
  //mapping for category and availblity and pricerange
  const filterdproducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) => {
      const matchesCategory =
        appliedFilters.category === "" ||
        product.category === appliedFilters.category;

      const matchesPriceRange =
        product.price >= appliedFilters.priceRange.min &&
        product.price <= appliedFilters.priceRange.max;

      const matchesAvailability =
        !appliedFilters.availability || product.available;

      return matchesCategory && matchesPriceRange && matchesAvailability;
    });

  //get
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Hero />
          <section className="py-16">
            <div className="container mx-auto ">
              <FilterMenu onFilterChange={handleFilterChange} />
              <div className="flex justify-center items-center">
                <Searchandfilter />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                {filterdproducts.map((product) => {
                  return <Product product={product} key={product.id} />;
                })}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
