import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import ResponsiveSidebar from '../sidebar/ResposniveSIdebar';

const DashboardHeader = () => {
  const [open, setOpen] = useState(false);

  // Handle the sidebar open/close
  const handle = () => setOpen(prev => !prev);

  // Disable/enable scroll when sidebar is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = 'auto'; // Enable scroll
    }
  }, [open]);

  return (
    <div className='lg:ml-60 flex justify-between gap-5 items-center py-5 relative top-0 bg-white'>
      <NavLink to="/" className="bg-primary h-10 w-10 lg:hidden text-white font-black rounded-full flex justify-center items-center">
        B
        {/* <img src="/assets/svg/logo/logo.svg" alt="" className="object-contain w-[183px] h-12" /> */}
      </NavLink>
      <div className='flex items-center gap-5 ml-auto'>
        <NavLink to="/mycart" className='border border-primary h-10 w-10 flex justify-center relative items-center rounded-full bg-primary'>
          <FaShoppingCart className='text-white text-2xl' />
          <div className='h-6 w-6 absolute -top-3 -right-2 rounded-full bg-secondary-dark flex justify-center items-center text-white text-xs font-semibold'>
            0
          </div>
        </NavLink>
        <button className='lg:hidden' onClick={handle}>
          {open ? <IoCloseSharp className='text-red-600 text-xl' /> : <FaBars className="text-primary text-xl" />}
        </button>

        {open && (
          <div className='absolute top-20 right-0 lg:hidden w-40 h-screen z-50'>
            <ResponsiveSidebar />
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardHeader;
