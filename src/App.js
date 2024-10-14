import React,{lazy,Suspense,useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {Provider} from "react-redux"

import Header from './components/Header';
import Body from './components/Body';
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import Cart from "./components/Cart";
import appStore from "./utils/appStore";
import UserContext from "./utils/UserContext";

const Grocery = lazy(()=>import("./components/Grocery"))

const AppLayout = () => {
    const [userName, setUserName]=useState()

    useEffect(()=>{
        const data={
            name:"Konda Trivedi"
        }

        setUserName(data.name)
    },[])
    return(
        <Provider store={appStore}>
          <UserContext.Provider value={{loggedInUser: userName,setUserName}}>
                <div className="app">
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
        
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<ContactUs/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)

export default AppLayout