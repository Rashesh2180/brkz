import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa'; // Import all icons from 'react-icons/fa'
import enText from "../../translationText/en.json";

import { NavLink } from 'react-router-dom';

const getIcon = (iconName) => {
  const IconComponent = FaIcons[iconName];
  return IconComponent ? <IconComponent /> : null; 
};

const Sidebar = () => {
  const navList = enText.sidebarList;

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null); 
    } else {
      setOpenDropdown(index); 
    }
  };

  return (
    <div className="bg-white shadow-xl h-screen py-5 max-lg:hidden ">
       <NavLink to="/" className=" mx-auto bg-primary h-10 mb-5 w-10 text-white font-black rounded-full flex justify-center items-center">
      B
      </NavLink>
      <ul>
        {navList.map((item, index) => (
          <li key={item.text} className=''>
            <a className=' flex px-4 py-3  w-full justify-between text-secondary-light hover:text-secondary-dark capitalize items-center gap-2 text-base  font-semibold' href={item.href} onClick={(e) => { 
              e.preventDefault(); 
              toggleDropdown(index); 
            }}>
              <div className=' flex gap-2 items-center'>
              <i className="icon">{getIcon(item.icon)}</i> {item.text}
              </div>
              {item.subcategories && (
                <i className={`toggle-icon ${openDropdown === index ? 'open' : ''}`}>
                  {openDropdown === index ? <FaIcons.FaChevronUp /> : <FaIcons.FaChevronDown />}
                </i>
              )}
            </a>
            
            {item.subcategories && openDropdown === index && (
              <ul className="subcategories ml-2">
                {item.subcategories.map(sub => (
                  <li key={sub.text} className=' px-6'>
                    <a href={sub.href} className=' flex gap-2 items-center text-sm py-2 font-semibold hover:text-secondary-dark'>
                      <i className="icon">{getIcon(sub.icon)}</i> 
                      <div>{sub.text}</div>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
