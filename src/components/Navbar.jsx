import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector((store) => store.shopping.quantity);

  return (
    <div className="flex flex-row justify-evenly mt-2 pt-4 text-lg text-gray-100">
      <p>Home</p>
      <p>
        Basket
        <span className="text-sm align-top bg-red-500 text-white rounded-full px-2 py-1 mx-1">
          {quantity}
        </span>
      </p>
    </div>
  );
};

export default Navbar;
