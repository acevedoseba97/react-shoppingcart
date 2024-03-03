import { useEffect } from "react";
import reactLogo from "/react.svg";
import reduxLogo from "/redux.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ShoppingProduct from "./components/ShoppingProduct";
import { useDispatch, useSelector } from "react-redux";
import { updateTotal } from "./slice/shoppingSlice";

function App() {
  const { products } = useSelector((store) => store.shopping);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal());
  }, [products, dispatch]);

  return (
    <div className="w-full flex flex-col justify-center font-primary">
      <h1 className="text-center text-gray-100 text-3xl font-medium mt-2 py-2">
        Shopping Cart
      </h1>
      <div className="flex flex-row items-center justify-center gap-8">
        <img className="w-24 h-24 my-5" src={reactLogo} alt="React logo" />
        <img className="w-24 h-24 my-5" src={reduxLogo} alt="Redux logo" />
      </div>

      <Navbar />
      <ShoppingProduct />
    </div>
  );
}

export default App;
