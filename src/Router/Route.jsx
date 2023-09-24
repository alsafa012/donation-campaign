import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/ErrorPage/Error";
import MainLayout from "../Layout/mainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
// import PhoneDetails from "../Pages/Donation/PhoneDetails";


const myCreatedRouter = createBrowserRouter([
     {
          path : "/",
          element:<MainLayout></MainLayout>,
          errorElement:<Error></Error>,
          children:[
               {
                    path:"/",
                    element:<Home></Home>,
                    loader :()=>fetch("/categories.json"),
                    
               },
               {
                    path : "/donation",
                    element:<Donation></Donation>
               },
               {
                    path : "/statistics",
                    element:<Statistics></Statistics>,
               },
               // {
               //      path: "/category/:id",
               //      element:<PhoneDetails></PhoneDetails>,
               //      loader:()=>fetch(`/categories.json`)
               // }
          ]

          
          
     }
])

export default myCreatedRouter;