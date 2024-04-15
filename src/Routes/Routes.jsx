import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import Root from "../Layout/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import Properties from "../Pages/Properties/Properties";
import Feature from "../Pages/Features/Feature";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../Pages/Update Profile/UpdateProfile";
import UserProfile from "../Pages/User Profile/UserProfile";

const router =createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('../../public/property.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/features',
                element:<Feature></Feature>,
            },
            {
                path:'/property/:id',
                element:<PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
                loader:()=>fetch('../../public/property.json')
            },
            {
                path:'/properties',
                element:<PrivateRoute><Properties></Properties></PrivateRoute>,
                loader:()=>fetch('../../public/property.json')
            },
            {
                path:'/updateProfile',
                element:<UpdateProfile></UpdateProfile>
            },
            {
                path:'/userProfile',
                element:<UserProfile></UserProfile>
            }
        ]
    }
])

export default router