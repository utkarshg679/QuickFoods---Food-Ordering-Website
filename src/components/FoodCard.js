import { img_url } from "../utils/constants";
import AddItemButton from "./AddItemButton";

const FoodCard = (props) => {
    const {data} = props
    const {name , isVeg , id , imageId , defaultPrice , price , ratings , description } = data?.card?.info
    
    
    return (
        <div data-testid="foodCard" className="flex justify-between p-3 m-2  border-b-2 border-b-gray-400"  key={id}>
            <div className="flex flex-col w-3/4">
            <div className="flex">
                <div className="w-1/3 h-1/4"><h2 className="text-xl text-left">{name} {isVeg ? "🍅🥕" : "🍗🥩🍖"}</h2></div>
                <div className="w-1/3 h-1/4"><h2 className="text-xl">₹ {Math.floor(price/100) || Math.floor(defaultPrice/100)}</h2></div>
                <div className="w-1/3 h-1/4"><h3 className="text-xl">{ratings.aggregatedRating.rating ? <span>{ratings.aggregatedRating.rating}🌟</span>: ""}</h3></div>
            </div>
            <div className="p-2 ">
                <p className="text-left ">{description}</p>
            </div>
            </div>
            <div className="w-1/4">
                <div className="absolute ">
                    <AddItemButton data={data} />
                </div>
                <img className="w-40 h-32 border-double rounded-xl border-4 border-black" src={imageId ? `${img_url}${imageId}` : ""} />
            </div>
        </div>
    )
}

export default FoodCard;
