import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"

const Cart = () =>{
    //The hook useSelector specifies that we are selecting the small portion of the store.
    const cartItems = useSelector((store)=>store.cart.items) //subscribing to the store and extracting the items
    //Always subscribe to the small portion of the store
    
    //NOTE: Less Efficient, Never subscribe to the whole store
    // const store = useSelector((store)=>store)
    // const cartItems =store.cart.items
    const dispatch = useDispatch()
    const handleEmptyCart=()=>{
        dispatch(clearCart())
    }
    return(
        <div className="m-10 p-10 text-center">
           <h1 className="text-2xl font-bold">Cart</h1>
           <div className="w-6/12 m-auto">
           <button onClick={handleEmptyCart} className="rounded p-2 m-2 text-white bg-black">Clear Cart</button>
            {cartItems.length===0&&
            <p>Your cart is empty,There's nothing to show......
                Add Items to the cart.
            </p>}
            <ItemList items={cartItems}/>
        </div>
        </div>
    )
}

export default Cart