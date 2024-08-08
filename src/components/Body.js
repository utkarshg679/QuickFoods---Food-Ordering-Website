import Restaurant_card from "./Restaurant_card";
import { useEffect, useState , useContext } from "react";
import Shimmer from "./Shimmer"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {

    const [Res_cards , setRes_cards] = useState([]) 
    const [Temp_res_Cards , setTemp_res_Cards] = useState([]) 

    const OnlineStatus = useOnlineStatus()
    useEffect(() => {
        fetchData()
    }, [])  

    const [searchText , setsearchText] = useState("")
    const {loggedInUser , setUserName} = useContext(UserContext)
    const fetchData = async () => {
        const  data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2124007&lng=78.1772053&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        setRes_cards(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
        setTemp_res_Cards( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    // console.log(Res_cards)
    if (OnlineStatus === false){
        return (
            <h1>Looks like you are not Online.Please Check your Internet Connection</h1>
        )
    }
    return Res_cards.length === 0 ? <Shimmer/> :(
        <div className="search font-sans text-xl pl-24 bg-emerald-200 bg-gradient-to-br from-orange-100">
            <div className="flex">
            <div className="p-4 m-4">
                <input data-testid="searchInput" type="text" className="border-2 border-black rounded-lg shadow-lg px-2"  value={searchText} 
                    onChange={(e)=>{
                        setsearchText(e.target.value)
                    }}
                />
                <button className="bg-green-200 m-4 px-4 border-2 shadow-black shadow-md rounded-lg " onClick={
                    () =>{
                        const FilteredList = Res_cards.filter((res) => (res.info.name.toLowerCase()).includes(searchText.toLowerCase()))
                        setTemp_res_Cards(FilteredList)

                    }
                }>Search</button>
            
                
                <button data-testid="topRatedRes"
                className="bg-pink-200 m-4 px-4 py-0 border-2 shadow-black shadow-md rounded-lg "
                onClick={() => {
                    const FilteredList = Temp_res_Cards.filter((res)=>res.info.avgRating > 4)
                    setTemp_res_Cards(FilteredList)
                    // console.log(FilteredList)
                }}
                >Top Rated Restaurants</button>


            </div>
            <div className="p-4 m-4">
                <label>User Name : </label>
                <input type="text" className="border-2 border-black rounded-lg shadow-lg px-2"  value={loggedInUser} 
                onChange={(e)=>setUserName(e.target.value)}
                />
                
            
            </div>
            </div>
            <h2 className="font-bold text-3xl pl-4">Top Restaurant Chains in Gwalior</h2>
            <div className="flex flex-wrap "  >
                {Temp_res_Cards.map((restaurant) => (
                    <Link className="restaurantCard-Link" to={"/restaurants/"+restaurant.info.id}> <Restaurant_card key={restaurant.info.id} resData={restaurant} /></Link>
                ))}
            </div>
        </div>
        
    );
};


export default Body;