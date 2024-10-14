import {useState,useEffect, useContext} from 'react'
import RestaurantCard from "./RestaurantCard";
import Shimmer from './Shimmer';
import {Link} from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';


const Body=()=>{
    //Local state variable - super powerful variable
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants]=useState([])
    const [searchText, setSearchText]=useState("")
    
    const {loggedInUser,setUserName}=useContext(UserContext)

    const fetchedData=async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4248522&lng=78.6448085&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData=await data.json()
        setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


    useEffect(()=>{      //useEffect takes two arguments-arrow function: callback function,dependency array.
          fetchedData();
    },[])
    
   
    const onlineStatus = useOnlineStatus()

    if(onlineStatus==false)
        return(
            <h1>Looks like you're offline. Please check your internet connection.</h1>
    )

    

    return listOfRestaurants.length===0?(<Shimmer/>):(
        <div className="body">
            <div className="filter flex">
                <div className='search m-4 p-4'>
                    <input 
                    type="text" 
                    data-testid="searchInput"
                    className='border border-solid border-black' 
                    value={searchText} 
                    onChange={(e)=>{setSearchText(e.target.value)}}
                    />
                    <button  className='px-4 py-2 bg-green-100 m-4 rounded-lg' onClick={()=>{
                        //filter the restaurant cards and update the ui
                        const filteredRestaurants=listOfRestaurants.filter(eachRes=>eachRes.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurants(filteredRestaurants)

                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-200 rounded-lg" onClick={()=>{
                    //filter top rated rests
                    const filteredListOfRest=listOfRestaurants.filter(each=>each.info.avgRating>4)

                    console.log(filteredListOfRest)
                    setListOfRestaurants(filteredListOfRest)
                }}>Top Rated Restaurants</button>
                </div>

                <div className='search m-4 p-4 flex items-center'>
                    <label>Username: </label>
                    <input 
                    className='border border-solid border-black ml-3'
                    onChange={e=>setUserName(e.target.value)}
                    value={loggedInUser}
                    />
                </div>
                
            </div>
            <div className="flex flex-wrap">
                    {
                        filteredRestaurants.map((eachResData)=>(
                            <Link key={eachResData.info.id} to={"/restaurant/"+eachResData.info.id}>
                            <RestaurantCard resData={eachResData}/>
                          </Link>
                        ))
                    }
            </div>
        </div>
    )
}

export default Body