import { CDN_URL } from "../utils/constants"
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard=(props)=>{
    const {loggedInUser} = useContext(UserContext)
    const{resData}=props;
    console.log("Res Data", resData)
    const {name,cuisines,avgRating,cloudinaryImageId,costForTwo,sla}=resData?.info;
    return(
        <div className="m-4 p-4 bg-stone-400 w-[250px] rounded-lg text-black hover:bg-slate-700">
            <img className="w-40 rounded-lg" src={CDN_URL+cloudinaryImageId} alt="pot"/>
            <h3 className="font-bold py-3 text-lg text-slate-200">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>. {costForTwo}</h4>
            <h4>{sla?.slaString}</h4>
            <p>{loggedInUser}</p>
        </div>
    )
}

export default RestaurantCard