import React from "react";
import { FaTimes } from "react-icons/fa"; // Import the React icon for the close button

const BuyModel = ({ isOpen, closeModal, product, onAddToCart }) => {
  if (!isOpen) return null; // If the modal isn't open, return null

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 z-50 flex p-2 justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-xl w-full relative">
        <button
          onClick={closeModal} // Close modal when clicked
          className="absolute top-2 right-2 text-xl text-red-600"
        >
          <FaTimes />
        </button>
        <div className=" flex gap-5 flex-wrap max-sm:justify-center  py-5">
          <img
            src={product.img}
            alt={product.product_name}
            className="w-full h-36 object-cover rounded-lg mb-4 max-w-[200px]"
          />
          <h2 className="text-xl text-secondary-light font-semibold">
            {product.product_name}
          </h2>
        </div>
        {/* <div className="mt-4">
          <button
            onClick={onAddToCart}
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 w-full mt-4"
          >
            Add to Cart
          </button>
        </div> */}
        <form action="" className=" mt-4">
          <label
            htmlFor=""
            className=" block text-sm text-secondary-light font-semibold"
          >
            Brand <span className=" text-red-600">*</span>
          </label>
          <select
            name=""
            id=""
            className="border border-light-gray w-full  rounded-lg p-2 outline-none mt-2"
          >
            <option value="" className=" text-sm">Riyad</option>
            <option value="" className=" text-sm">saudi</option>

          </select>
          <div className=" mt-4">
            <label
              htmlFor=""
              className=" block text-sm text-secondary-light font-semibold"
            >
              Quantity <span className=" text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Select quantity"
              className=" border border-light-gray w-full  rounded-lg p-2 outline-none mt-2"
            />
          </div>
           <div className="mt-4">
          <button
            onClick={onAddToCart}
            className="bg-blue-500 font-semibold text-white p-2 rounded-lg hover:bg-blue-600 w-full mt-4"
          >
            Add to Cart
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default BuyModel;
