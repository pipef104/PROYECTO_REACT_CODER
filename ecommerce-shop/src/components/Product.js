import React, { useComponet } from "react";
//import link
import { Link } from "react-router-dom";
//import icons
import { BsPlus, BsEyeFill } from "react-icons/bs";

const Product = ({ product }) => {
  console.log(product);
  //Destructure product
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div
        className="border boder-[#e4e4e4] h-[300px] mb-4
      relative overflow-hidden group transition"
      >
        <div className="w-full h-full flex justify-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
          {/*button*/}
          <div
            className="absolute top60 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center
          gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <button>
              <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
                <BsPlus className="text-3x1" />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className="w-12 h-12 bg-white flex justify-center items-center text-primary
              drop-shadow-xl"
            >
              <BsEyeFill></BsEyeFill>
            </Link>
          </div>
        </div>
      </div>
      {/* Category and title and price */}
      <div>
        <div className="text-sm capitalize text-gary-500">{category}</div>
        <Link to={`/product/${id}`}>
        <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">{price}</div>
      </div>
    </div>
  );
};

export default Product;
