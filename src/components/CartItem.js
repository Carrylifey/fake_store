import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

const CartItem = ({ item }) => {
  const { removeFromCart, handleIncreaseAmount, handleDecreaseAmount } =
    useContext(CartContext);
  //destructuring Item
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-grey-200 w-full text-gray-500 font-medium">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title and remove icon */}
          <div className="flex justify-between mb-2 ">
            <Link
              to={`/product/${id}`}
              className="text-sm-uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/* remove icon */}
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-grey-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* qty */}
            <div
              className="flex flex-1 max-w-[100px] items-center h-full border
             text-primary font-medium"
            >
              {/* minus */}
              <div
                onClick={() => handleDecreaseAmount(id)}
                className="flex-1 flex justify-center items-center cursor-pointer h-full"
              >
                <IoMdRemove />
              </div>
              {/* amout */}
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={() => handleIncreaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* item price*/}
            <div className="flex-1 flex items-center justify-around">
              $ {price}
            </div>
            {/* final Price*/}
            <div className="flex-1 flex justify-end items-center text-primary font-semibold">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
