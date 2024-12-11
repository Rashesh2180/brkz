import React from 'react';
import { Routes, Route, Link, useLocation,NavLink } from 'react-router-dom';
import Login from '../../components/login/Login'; 
import Signup from '../../components/signup/Signup'; 
import entxt from "../../translationText/en.json"
import { FaWhatsapp } from "react-icons/fa";

const Auth = () => {

    const common = entxt.common
    const logintxt = entxt.login

    
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
//   const step = queryParams.get('step');

//   const isLoginStep = step === '1';
//   const isSignupStep = step === '2';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 bg-[#f4f7f8] relative">
         <NavLink to="/" className=" bg-primary h-10 w-10 text-white font-black  absolute left-3 top-3 rounded-full flex justify-center items-center">
      B
        {/* <img src="/assets/svg/logo/logo.svg" alt="" className="object-contain w-[183px] h-12" /> */}
      </NavLink>
      {/* <div className="mb-8 flex space-x-4">
        <Link 
          to="/auth?step=1" 
          className={`px-6 py-2 text-lg font-medium rounded-md transition-colors ${isLoginStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Login
        </Link>
        <Link 
          to="/auth?step=2" 
          className={`px-6 py-2 text-lg font-medium rounded-md transition-colors ${isSignupStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Sign Up
        </Link>
      </div> */}
      <div className=' h-full max-w-[500px] mx-auto bg-white p-6 rounded-xl shadow-xl w-full flex flex-col justify-center items-center'>
        <h1 className=' section-title'>{common.welcome}</h1>
        <p className=' section-subtitle'>{logintxt.number}</p>
        <div className=' mt-10 w-full border border-light-gray p-2 rounded-md flex items-center gap-2 '>
            <div className=' text-secondary-light text-sm font-semibold pr-3 border-r border-secondary-light'>+966</div>
        <input type="text" className=' outline-none border-none w-full' />

        </div>
        <button className=' bg-blue-600 rounded-lg w-full px-2 py-3 mt-10 flex justify-center items-center gap-3'>
        <FaWhatsapp className=' text-white' />
        <span className=' text-white text-sm font-semibold'>{logintxt.sendbutton}</span>

        </button>
        <button className=' mt-5 text-center text-sm text-primary font-semibold'>
            {logintxt.sms}

        </button>

      </div>

      {/* {isLoginStep && <Login />}
      {isSignupStep && <Signup />} */}
    </div>
  );
};

export default Auth;
