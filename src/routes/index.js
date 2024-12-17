import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import BuyMaterial from '../pages/buymaterial/BuyMaterial';
import Bnpl from '../pages/bnpl/Bnpl';
import About from '../pages/about/About';
import Dashboard from '../pages/dashboard/Dashboard';
import Allproducts from '../components/buymaterial/allproducts/Allproducts';
import MyCart from '../pages/mycart/MyCart';
import Auth from '../pages/auth/Auth';
import Cement from '../pages/cement/Cement';  // Cement page for displaying cement category
import Concreate from '../pages/cement/Concreate';  // Concrete Ready Mix page
import BulkCement from '../pages/cement/BulkCement';
import AllProducts from '../components/buymaterial/allproducts/Allproducts';
import CementBags from '../pages/cement/CementBags';
import CementBoard from '../pages/cement/CementBoard';
import Block from '../pages/block/Block';
import AggregateSand from '../pages/aggregate-sand/AggregateSand';
import Aggregate from '../pages/aggregate-sand/Aggregate';
import Sand from '../pages/aggregate-sand/Sand';
import Steel from '../pages/steel/Steel';
import SteelRebar from '../pages/steel/SteelRebar';
import SteelProducts from '../pages/steel/SteelProducts';
import SteelCommercial from '../pages/steel/SteelCommercial';
import SteamBukhari from '../pages/block/SteamBukhari';
import Burkani from '../pages/block/Burkani';
import Normal from '../pages/block/Normal';
import Mixed from '../pages/block/Mixed';
import Red from '../pages/block/Red';
import SipoRex from '../pages/block/SipoRex';
import Wood from '../pages/wood/Wood';
import BlockWood from '../pages/wood/BlockWood';
import Plywood from '../pages/wood/Plywood';
import MdfBoards from '../pages/wood/MdfBoards';
import InterLock from '../pages/interlock/InterLock';
import KebarStone from '../pages/interlock/KebarStone';
import Tiles from '../pages/interlock/Tiles';
import InterLockRoute from '../pages/interlock/InterLockRoute';
import Gypsum from '../pages/gypsum/Gypsum';
import GypsumBoard from '../pages/gypsum/GypsumBoard';
import GypsumBags from '../pages/gypsum/GypsumBags';
import GypusmAccessories from '../pages/gypsum/GypusmAccessories';
import ChemicalAdhesives from '../pages/chemicalAdhesives/ChemicalAdhesives';
import Pesticides from '../pages/chemicalAdhesives/Pesticides';
import FinishingMaterials from '../pages/chemicalAdhesives/FinishingMaterials';
import Paints from '../pages/chemicalAdhesives/Paints';
import ToolsConsumbles from '../pages/tools-consumbles/ToolsConsumbles';
import Consumables from '../pages/tools-consumbles/Consumables';
import IndustrialTools from '../pages/tools-consumbles/IndustrialTools';
import SafetyMaterial from '../pages/tools-consumbles/SafetyMaterial';
import ElectricalTools from '../pages/tools-consumbles/ElectricalTools';
import Insulation from '../pages/insulation/Insulation';
import LiquidBitumen from '../pages/insulation/LiquidBitumen';
import StyroFoam from '../pages/insulation/StyroFoam';
import FillerBoard from '../pages/insulation/FillerBoard';
import WaterInsulation from '../pages/insulation/WaterInsulation';
import Geotextile from '../pages/insulation/Geotextile';
import ElectricalMaterial from '../pages/electrical-matrial/ElectricalMaterial';
import CableWire from '../pages/electrical-matrial/CableWire';
import BoxesCover from '../pages/electrical-matrial/BoxesCover';
import IndoorLighting from '../pages/electrical-matrial/IndoorLighting';
import Switch from '../pages/electrical-matrial/Switch';
import Sockets from '../pages/electrical-matrial/Sockets';
import ControlPanels from '../pages/electrical-matrial/ControlPanels';
import Fans from '../pages/electrical-matrial/Fans';
import CableManagement from '../pages/electrical-matrial/CableManagement';
import ElectricAccessories from '../pages/electrical-matrial/ElectricAccessories';
import Plumbing from '../pages/Plumbing/Plumbing';
import Pipes from '../pages/Plumbing/Pipes';
import WaterTank from '../pages/Plumbing/WaterTank';
import PvcFitting from '../pages/Plumbing/PvcFitting';
import UpvcFitting from '../pages/Plumbing/UpvcFitting';
import WaterPump from '../pages/Plumbing/WaterPump';
import ManholeCovers from '../pages/Plumbing/ManholeCovers';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/BNPL",
        element: <Bnpl />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "mycart", 
        element: <MyCart />
      },
      {
        path: "auth", 
        element: <Auth />
      }
    ]
  },
  {
    path: "/buymaterial",  
    element: <Dashboard />,
    children: [
      {
        path: "", 
        element: <AllProducts /> 
      },
      {
        path: "cement",
        element: <Cement />,  // Cement page to display cement categories
        children: [
          {
            path: "concrete-ready-mix",
            element: <Concreate />  // Concrete ready mix subcategory
          },
          {
            path: "bulk-cement", 
            element: <BulkCement />  // Bulk Cement subcategory
          },
          {
            path: "cement-bags",  
            element: <CementBags />  // Cement Bags subcategory
          },
          {
            path: "cement-board",  
            element: <CementBoard />  // Cement Board subcategory
          }
        ]
      },
      {
        path:"steel",
        element:<Steel/>,
        children:[
          {
            path:"steel-rebar",
            element:<SteelRebar/>
          },
          {
            path:"steel-products",
            element:<SteelProducts/>
          },
          {
            path:"industrial-steel-commercial",
            element:<SteelCommercial/>
          }
        ]
      
      },
      {

        path:"aggregate-and-sand",
        element:<AggregateSand/>,
        children:[
          {
            path:"aggregate",
            element:<Aggregate/>
          },
          {
            path:"sand",
            element:<Sand/>
          }
        ]
      
      },
      {
        path:"block",
        element:<Block/>,
        children:[
          {
            path:"steam-bukhari",
            element:<SteamBukhari/>
          },
          {
            path:"burkani",
            element:<Burkani/>
          },
          {
            path:"normal",
            element:<Normal/>
          },
          {
            path:"mixed",
            element:<Mixed/>
          },
          {
            path:"siporex",
            element:<SipoRex/>
          }
        ]
      
      },
      {
        path:"wood",
        element:<Wood/>,
        children:[
          {
            path:"block",
            element:<BlockWood/>
          },
          {
            path:"burkani",
            element:<Burkani/>
          },
          {
            path:"plywood",
            element:<Plywood/>
          },
          {
            path:"mdf-boards",
            element:<MdfBoards/>
          }
        ]
      
      },
      {
        path:"interlock-tiles-etc",
        element:<InterLock/>,
        children:[
          {
            path:"kerbstone",
            element:<KebarStone/>
          },
          {
            path:"tiles",
            element:<Tiles/>
          },
          {
            path:"interlock",
            element:<InterLockRoute/>
          },
         
        ]
      
      },
      {
        path:"gypsum",
        element:<Gypsum/>,
        children:[
          {
            path:"gypsum-board",
            element:<GypsumBoard/>
          },
          {
            path:"gypsum-bags",
            element:<GypsumBags/>
          },
          {
            path:"gypsum-accessories",
            element:<GypusmAccessories/>
          },
         
        ]
      
      },
      {
        path:"chemical-adhesives",
        element:<ChemicalAdhesives/>,
        children:[
          {
            path:"chemicals-pesticides",
            element:<Pesticides/>
          },
          {
            path:"finishing-materials",
            element:<FinishingMaterials/>
          },
          {
            path:"gypsum-accessories",
            element:<GypusmAccessories/>
          },
          {
            path:"paints",
            element:<Paints/>
          },
         
        ]
      
      },
      {
        path:"tools-consumables",
        element:<ToolsConsumbles/>,
        children:[
          {
            path:"consumables",
            element:<Consumables/>
          },
          {
            path:"industrial-tools",
            element:<IndustrialTools/>
          },
          {
            path:"safety-materials",
            element:<SafetyMaterial/>
          },
          {
            path:"electrical-tools",
            element:<ElectricalTools/>
          },
         
        ]
      
      },
      {
        path:"insulation",
        element:<Insulation/>,
        children:[
          {
            path:"liquid-bitumen",
            element:<LiquidBitumen/>
          },
          {
            path:"industrial-tools",
            element:<IndustrialTools/>
          },
          {
            path:"styrofoam",
            element:<StyroFoam/>
          },
          {
            path:"filler-board",
            element:<FillerBoard/>
          },
          {
            path:"water-insulation",
            element:<WaterInsulation/>
          },
          {
            path:"geotextile",
            element:<Geotextile/>
          }
         
        ]
      
      },
      {
        path:"electrical-material",
        element:<ElectricalMaterial/>,
        children:[
          {
            path:"cables-and-wires",
            element:<CableWire/>
          },
          {
            path:"boxes-and-cover",
            element:<BoxesCover/>
          },
          {
            path:"indoor-lighting",
            element:<IndoorLighting/>
          },
          {
            path:"switches",
            element:<Switch/>
          },
          {
            path:"sockets",
            element:<Sockets/>
          },
          {
            path:"control-panels",
            element:<ControlPanels/>
          },
          {
            path:"fans",
            element:<Fans/>
          },
          {
            path:"cable-management-system",
            element:<CableManagement/>
          },
          {
            path:"electrical-accessories",
            element:<ElectricAccessories/>
          }
         
        ]
      
      },
      {
        path:"plumbing",
        element:<Plumbing/>,
        children:[
          {
            path:"pipes",
            element:<Pipes/>
          },
          {
            path:"water-tank",
            element:<WaterTank/>
          },
          {
            path:"pvc-cpvc-fittings",
            element:<PvcFitting/>
          },
          {
            path:"upvc-fittings",
            element:<UpvcFitting/>
          },
          {
            path:"water-pumps",
            element:<WaterPump/>
          },
          {
            path:"manhole-covers",
            element:<ManholeCovers/>
          },
         
        ]
      
      }
    ]
  }
]);

export default router;
