import React, { useContext } from "react";
//import link
import { Link } from "react-router-dom";
//import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
//import components
import CartItem from "../components/CartItem";
//import context sidebar
import { SidebarContext } from "../contexts/SidebarContext";
//import Cart Context
import { CartContext } from "../contexts/CartContext";
const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total,itemAmount } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2x1 md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]  md:overflow-scroll`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        {/* icons */}
        <div className="uppercase text-sm font-semibold">Shopping Bag({itemAmount})</div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2x1" />
        </div>
      </div>
      <div className=" flex flex-col gap-y-2 h-[520px] lg:h[640px] overflow-y-auto">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className=" flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          {/* clear */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-400 w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={`/`}
          className=" bg-gray-200 flex p-4 
          justify-center items-center text-primary w-full font-medium"
        >
          View Cart
        </Link>
        <Link to='/checkout'
          className=" bg-gray-200 flex p-4 
          justify-center items-center text-primary w-full font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
