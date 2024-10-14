// External Libraries
import { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Internal Modules/Components
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
    console.log("Header Rendered")
    const [isLoggedIn,setIsLoggedIn] = useState(false)


    const {loggedInUser} = useContext(UserContext)

    console.log("context data", loggedInUser)
    //If there's no dependency array => useEffect will be called on every render
    //If the dependency array is empty[] => useEffect is called on initial render(just once)
    //if the dependency array is [isLoggedIn] => useEffect is called everytime when isLoggedIn is updated
    useEffect(()=>{
        console.log("UseEffect called...")
    },[isLoggedIn])

    const btnName= isLoggedIn?"Logout":"Login"

    const onClickLogin=()=>{
            setIsLoggedIn(!isLoggedIn)
    }

    const onlineStatus = useOnlineStatus()


    // subscribing to the store using a selector

    const cartItems = useSelector((store)=>store.cart.items)
    console.log("CART ITEMS", cartItems)

    return (
        <div className="flex justify-between bg-slate-500 shadow-lg m-2">
            <div>
                <img className="w-28" src={LOGO_URL}  alt="app-logo"/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus?"✅":"🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/"> Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-xl">
                        <Link to="/cart">Cart {cartItems.length}</Link>
                    </li>
                    <button onClick={onClickLogin}>{btnName}</button>

                    <li className="px-4 font-bold">{loggedInUser}</li>
                
                </ul>
            </div>
        </div>
    )
}

export default Header