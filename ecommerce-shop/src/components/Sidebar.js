import React, { useContext } from "react";
// import link
import { Link } from "react-router-dom";

//import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
//import Components
import CartItem from "../components/CartItem";
//import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// import cart context
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const  {cart}  = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw]
  transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="Flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag (0)</div>
        {/** icon */}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2x1" />
        </div>
      </div>
      <div>
       {/* {cart.map(item => {
        return <div>Cart Item</div>
       })} */}
      </div>
    </div>
  );
};

export default Sidebar;
