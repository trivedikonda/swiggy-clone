import { useState,useEffect } from "react"
import Shimmer from "./Shimmer.js"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu.js"
import RestaurantCategory from "./RestaurantCategory.js"

const RestaurantMenu=()=>{
    const [showIndex, setShowIndex] = useState(0)
    const {resId} = useParams()
    
    const resInfo = useRestaurantMenu(resId)
   

    if(resInfo==null) return <Shimmer/>

    const {name, cuisines, costForTwoMessage} =resInfo?.cards[2].card?.card?.info
    
    const {itemCards} =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    // console.log("RECOMMENDED", resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
        c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    // console.log("ICC",categories)
    
    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl"> {name} Restaurant</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")}-{costForTwoMessage}</p>
           {categories.map((category,index)=>(
            <RestaurantCategory 
            data={category?.card?.card} 
            key={category?.card?.card?.title}
            showItems={index===showIndex?true:false}
            setShowIndex={()=>setShowIndex(index)}/>
           ))}
        </div>
    )
}

export default RestaurantMenu