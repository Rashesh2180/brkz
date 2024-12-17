import React, { useState } from "react";
import useFetch from "../../hooks/useFetch"; 
import Pagination from "../../components/pagination/Pagination"; 
import BuyModel from "../../components/buymaterial/buymodel/BuyModel"; 
import { useLocation } from "react-router-dom";

const SteelRebar = () => {
  const { loading, error, data } = useFetch("http://localhost:1337/api/products"); 
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredData = data?.data?.filter(product =>
    product.product_category === "steel-rebar"
  );

  const totalItems = filteredData ? filteredData.length : 0;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredData?.slice(indexOfFirstItem, indexOfLastItem);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = "auto"; 
  };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products: {error.message}</div>;

  return (
    <div className="relative">
      <div className="grid xl-2:grid-cols-5 md:grid-cols-3 grid-cols-2 xl:grid-cols-4 gap-10 mx-auto">
        {currentProducts && currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div key={product.documentId} className="w-full max-w-[400px] rounded-lg overflow-hidden">
              <div className="h-[200px] p-2 w-full rounded-lg bg-[hsla(0,0%,96%,.8)] relative">
                <img
                  src={product.img}
                  className="h-full w-full object-contain"
                  alt={product.product_name}
                />
                <div className="text-[10px] font-semibold absolute top-3 right-3 text-white bg-secondary-dark rounded-full p-1">
                  High cashback
                </div>
              </div>
              <p className="text-start text-base w-[98%] overflow-hidden text-ellipsis whitespace-nowrap font-medium text-secondary-light mt-2">
                {product.productTitle}
              </p>
              <button
                onClick={() => openModal(product)} 
                className="text-white font-semibold bg-primary hover:bg-primary hover:text-white border border-secondary-light block py-2 px-4 rounded-full mt-5 w-full"
              >
                Add
              </button>
            </div>
          ))
        ) : (
          <p className=" py-10 text-red-600 font-semibold text-xl text-center col-span-5">No products found in the selected categories</p>
        )}
      </div>

      {
        currentProducts.length > 15 && <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      }

      <BuyModel
        isOpen={isModalOpen}
        closeModal={closeModal}
        product={selectedProduct}
      />
    </div>
  );
};

export default SteelRebar;
