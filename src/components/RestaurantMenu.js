import Shimmer from "./Shimmer"
import React from "react"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import CategoryCard from "./CategoryCard"
import { useState } from "react"

const RestaurantMenu = () => {
    const [searchText , setsearchText] = useState("")
    const [showIndex , setshowIndex] = useState(null)
    const {resId} = useParams()
    const ResInfo = useRestaurantMenu(resId)
    console.log(ResInfo)
    if( ResInfo === null ) return <Shimmer /> ;

    
    const img_url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"

    // console.log(ResInfo)
    const {name , id , labels , costForTwoMessage , cuisines , avgRating} = ResInfo?.cards[2]?.card?.card?.info
    console.log(name)
    const ResMenu = ResInfo.cards[4]
    // console.log(ResMenu)
    let All = ResMenu?.groupedCard?.cardGroupMap?.REGULAR?.cards
    const ItemCategories = All.slice(1,All.length-2)
    // console.log(ItemCategories)
    // console.log(ItemCategories.map((items)=>items?.card?.card?.itemCards))
    
    
    return(
        
        <div className=" text-center font-bold p-3 bg-emerald-400 bg-gradient-to-br from-orange-300">
            <h1 className=" text-5xl">{name}</h1>
            <h1 className=" text-3xl">({cuisines.join(", ")})</h1>
            <h3 className=" text-2xl">{costForTwoMessage}</h3>
            <h3 className=" text-2xl">{labels[1].message}</h3>
            <h3 className=" text-2xl">{avgRating} ⭐</h3>
            <div className="flex flex-col justify-center items-center" key={name || id}>
                <h2 className="text-3xl mx-2 my-4">Menu</h2>
                
                
                {ItemCategories.map((category, index) => {
                    {/* console.log(index, category); */}
                    return (
                        <CategoryCard
                            key={category?.data?.title} // Make sure to provide a unique key
                            data={category?.card?.card}
                            isExpanded={index === showIndex ? true : false} 
                            setshowIndex={() => setshowIndex(index)}
                        />
                    );
                })}

                    </div>
            </div>
    )
}
export default RestaurantMenu;