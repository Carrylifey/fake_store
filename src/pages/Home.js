import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import Searchandfilter from "../components/Searchandfilter";
const Home = () => {
  const { products, isLoading, searchTerm } =
    useContext(ProductContext);
  // const filterdproducts = products;

  const filterdproducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
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
            <Searchandfilter/>
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
