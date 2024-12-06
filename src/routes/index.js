import About from "../pages/about/About";
import Bnpl from "../pages/bnpl/Bnpl";
import BuyMaterial from "../pages/buymaterial/BuyMaterial";

const { createBrowserRouter } = require("react-router-dom");
const { default: App } = require("../App");
const { default: Home } = require("../pages/home/Home");


const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[{
            path:"",
            element:<Home/>
        },{
            path:"/buymaterial",
            element:<BuyMaterial/>
        },
        {
            path:"/BNPL",
            element:<Bnpl/>
        },
        {
            path:"/about",
            element:<About/>
        }
    ]
    }
])

export default router