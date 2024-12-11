import React from 'react'
import { FaSearch } from "react-icons/fa";
const Searchbar = () => {
  return (
    <div className=' max-sm:max-w-full max-w-[40%] py-3 px-5 rounded-full w-full flex flex-row-reverse gap-2 items-center mt-10 border border-primary'>
        <input type="text"  className=' w-full flex-1 border-none  outline-none' placeholder=' search for products...'/>
        <FaSearch className=' text-primary' />

      
    </div>
  )
}

export default Searchbar
