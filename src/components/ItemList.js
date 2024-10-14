import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"

import { CDN_URL } from "../utils/constants"

const ItemList=({items})=>{

    const dispatch = useDispatch(addItem)
    const handleAddItemToCart = (item) =>{
        // dispatches an action called addItems
        dispatch(addItem(item))
    }

    
    return(
        <div>
            {items.map(item=>(
                
            <div className="border-b-2 p-2 m-2 border-gray-200 text-left flex justify-between" 
            key={item.card.info.id}
            data-testid="foodItems">
                <div className="w-9/12">
                <div className="py-2">
                    <span className="font-semibold text-bold text-slate-900 text-m">{item.card.info.name}</span>
                    <span className="font-semibold text-bold text-slate-900 text-m"> - ₹ {item.card.info.price?item.card.info.price/100 :item.card.info.defaultPrice/100 }</span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4 ">
                <div className="absolute">
                    <button 
                    className="p-2 mx-8 my-14 rounded-lg bg-white shadow-lg text-sm font-semibold text-green-900"
                    onClick={()=>handleAddItemToCart(item)}
                    >ADD</button>

                </div>
                    <img className="rounded object-cover" src={CDN_URL + item.card.info.imageId}/>
                </div>
            </div>
        ))}
        </div>
    )
}

export default ItemList