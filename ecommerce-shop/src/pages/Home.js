import React, { useContext } from "react";
// import Product context
import { ProductContext } from "../contexts/ProductContext";
// import components
import Product from "../components/Product";

const Home = () => {
  // get product from product context
  const { products } = useContext(ProductContext);
  // get only electronics and Jewelery
  const filteredProduts = products.filter((item) => {
    return item.category === "electronics" || item.category === "Jewelery";
  });
  console.log(filteredProduts);
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm
          mx-auto md:max-w-none md:mx-0"
          >
            {filteredProduts.map((product) => {
              return <Product product={product} key={product.id}/>;
              //return <div className="w-full h-[300px] bg-pink-200" key={product.id}>{product.title}</div>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
