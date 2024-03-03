import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItems,
} from "../slice/shoppingSlice";

const Product = ({ name, price, image, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row items-center justify-center gap-8 px-10 mt-8 bg-[#393939] text-white shadow-lg rounded-lg w-[100%] md:w-[50%] mx-auto py-1">
      <img className="w-[75px] md:w-[100px]" src={image} alt={name} />
      <div className="w-[100px] md:w-[300px] px-10">
        <p className="text-sm md:text-xl font-medium">{name}</p>
        <p className="text-sm md:text-lg font-medium">{price.toFixed(2)}</p>

        <FaTrashAlt
          className="text-red-500 text-xl cursor-pointer"
          onClick={() => dispatch(removeItems({ name }))}
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-lg font-medium">Quantity</p>
        <div className="flex flex-row items-center gap-4 text-gray-200 font-medium">
          <button
            className="text-lg"
            onClick={() => {
              quantity === 1
                ? dispatch(removeItems({ name }))
                : dispatch(decreaseQuantity({ name }));
            }}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            className="text-lg"
            onClick={() => dispatch(increaseQuantity({ name }))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
