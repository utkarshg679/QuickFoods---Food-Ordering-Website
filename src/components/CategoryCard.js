import FoodCard from "./FoodCard"
import InnerCategoryCard from "./InnerCategoryCard"
import { Component, useState } from "react"

const CategoryCard = ({data , isExpanded , setshowIndex}) => {
    const [ShowIndex , setShowIndex] = useState(null)

    const handleToggle = () => {
        setshowIndex();
        }
    return (
    <div className="m-auto px-3  shadow-lg shadow-gray-500 rounded-md bg-gray-100  p-3 my-3 w-1/2" key={data?.title} >
        <span className="text-xl flex justify-between" onClick={handleToggle}> {!data?.categories ? 
        <span className="mx-2">{data?.title} ({(data?.itemCards?.length)})</span> 
        : <span className="mx-2">{data?.title}</span>} 
        <span className="mx-2" >{isExpanded ? "⬇️" : "⬆️"}</span></span>
         
        { !data?.categories ? data?.itemCards?.map((item)=>{
            return (
                <div className={isExpanded ? "" : "hidden"} key={item?.id}>
                    <FoodCard data={item} />
                </div>
                
            )}
        )
        : data?.categories.map((ctg ,index)=>{
            
            return (
                <div className={isExpanded ? " cursor-pointer" : "hidden cursor-pointer"} key={ctg?.itemCards?.id}>
                <InnerCategoryCard 
                data={ctg}
                isExpanded={index === ShowIndex ? true : false}
                setShowIndex={()=> setShowIndex(index)}  />
                </div>
                
            )
        })
        }

    </div>
    )
}

export default CategoryCard;