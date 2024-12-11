import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import OfferBanner from '../../components/buymaterial/offerbanner/OfferBanner'
import Searchbar from '../../components/buymaterial/searchbar/Searchbar'
import Categories from "../../components/buymaterial/categories/Categories"
import DashboardHeader from '../../components/dashboardheader/DashboardHeader'
const Dashboard = () => {
  return (
    <div className=' min-h-[calc(100vh-120pc)] flex  overflow-y-auto'>
        <div className=' w-60 fixed left-0 top-0 '>
            <Sidebar/>

        </div>
        <div className=' lg:ml-60  px-5 py-3 overflow-x-hidden grow'>
          <div className=' sticky top-0'>
          <DashboardHeader/>
          </div>
          <OfferBanner/>
          <div className=' flex justify-end'>
            <Searchbar/>
           
          </div>
          <Categories/>
            <Outlet/>
        </div>


      
    </div>
  )
}

export default Dashboard
