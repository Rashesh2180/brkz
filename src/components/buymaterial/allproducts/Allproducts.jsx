    import React,{useState} from "react";
    import BuyModel from "../buymodel/BuyModel";
    import { FaPlus } from "react-icons/fa";

    const data = [
    {
        id: 1,
        img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1694759809%2FProduct%2520Catalog%2Fnormal-multi-holes-block_aoxdgw.png&w=3840&q=75",
        product_name:"Normal Multi Holes Block"
    },
    {
        id: 2,
        img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1707657013%2FProduct%2520Catalog%2FRebar_cyizrr.png&w=3840&q=75",
        product_name:"Reinforcement Steel Rebar"
    },
    {
        id: 3,
        img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1707657013%2FProduct%2520Catalog%2FOPC_Bulk_Cement_xaskib.png&w=3840&q=75",
        product_name:"Bulk Cement (OPC)"
    },
    {
        id: 4,
        img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1707656907%2FProduct%2520Catalog%2FFinishing_Cement_pyhoyx_vww4mf.png&w=3840&q=75",
        product_name:"Finishing Cement"
    },
    {
        id: 5,
        img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1694764453%2FProduct%2520Catalog%2Fnormal-insulated-block_pb1kje.png&w=3840&q=75",
        product_name:"Normal Insulated Block"
    },
    {
        id: 6,
        img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1707657012%2FProduct%2520Catalog%2FOPC_x0quft.png&w=3840&q=75",
        product_name:"Ordinary Portland Cement (OPC)"
    },  {
        id: 7,
        img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1694084014%2FProduct%2520Catalog%2Fready-mix-SRC_lh3xul.png&w=3840&q=75",
        product_name:"Sulphate Resistant Concrete Ready Mix (SRC)"
    },  {
        id: 8,
        img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1694764453%2FProduct%2520Catalog%2Fnormal-insulated-block_pb1kje.png&w=3840&q=75",
        product_name:"Normal Insulated Block"
    },  {
        id: 9,
        img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1694764453%2FProduct%2520Catalog%2Fnormal-insulated-block_pb1kje.png&w=3840&q=75",
        product_name:"Normal Insulated Block"
    },  {
        id: 10,
        img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1694764453%2FProduct%2520Catalog%2Fnormal-insulated-block_pb1kje.png&w=3840&q=75",
        product_name:"Normal Insulated Block"
    },
    ];
    const AllProducts = () => {
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [selectedProduct, setSelectedProduct] = useState(null);
      
        const openModal = (product) => {
          setSelectedProduct(product);
          setIsModalOpen(true);
          document.body.style.overflow = 'hidden'; // Disable scrolling
        };
      
        const closeModal = () => {
          setIsModalOpen(false);
          setSelectedProduct(null);
          document.body.style.overflow = 'auto'; // Enable scrolling
        };
      
        const handleAddToCart = () => {
          alert(`${selectedProduct.product_name} added to cart!`);
          closeModal(); // Close modal after adding to cart
        };
      
        return (
          <div className="relative">
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-10">
              {data.map((ele) => (
                <div
                  key={ele.id}
                  className="max-w-[350px] w-full rounded-lg overflow-hidden"
                >
                  <div className="h-[200px] p-2 w-full rounded-lg bg-[hsla(0,0%,96%,.8)] relative">
                    <img
                      src={ele.img}
                      className="h-full w-full object-contain"
                      alt={ele.product_name}
                    />
                    <div className="text-[10px] font-semibold absolute top-3 right-3 text-white bg-secondary-dark rounded-full p-1">
                      High cashback
                    </div>
                  </div>
                  <p className="text-start text-base w-[98%]  overflow-hidden text-ellipsis whitespace-nowrap font-medium text-secondary-light mt-2">{ele.product_name}</p>
                  <button
                    onClick={() => openModal(ele)} // Open modal when clicked
                    className=" text-white font-semibold bg-primary hover:bg-primary hover:text-white border border-secondary-light block py-2 px-4 rounded-full mt-5  w-full"
                  >
                     Add
                  </button>
                </div>
              ))}
            </div>
      
            {/* Modal Component */}
            <BuyModel
              isOpen={isModalOpen}
              closeModal={closeModal}
              product={selectedProduct}
              onAddToCart={handleAddToCart}
            />
          </div>
        );
      };
    export default AllProducts;
