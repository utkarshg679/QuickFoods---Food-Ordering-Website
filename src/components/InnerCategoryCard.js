import FoodCard from "./FoodCard";
import { useState } from "react";

const InnerCategoryCard = ({data , isExpanded , setShowIndex}) => {
    const handleToggle = () => {
        setShowIndex()
    }
    return (
        <div className="m-auto px-3 shadow-lg shadow-gray-500 rounded-md bg-amber-200  p-3 my-3 w-11/12" >
            <span className="text-xl flex justify-between" onClick={handleToggle}> {!data?.categories ? <span className="mx-2">{data?.title} ({(data?.itemCards?.length)})</span> : <span className="mx-2">{data?.title}</span>} <span className="mx-2" onClick={handleToggle}>{isExpanded ? "⬇️" : "⬆️"}</span></span>
                    {data?.itemCards?.map((item)=>{
                return (
                    <div className={isExpanded ? " cursor-pointer" : "hidden cursor-pointer"} key={data.itemCards.indexOf(item)}>
                    <FoodCard data={item} />
                    </div>
                    
                )}
            )}
        </div>
        )
}
export default InnerCategoryCard;