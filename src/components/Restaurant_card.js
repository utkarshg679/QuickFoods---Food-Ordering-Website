import {CDN_URL} from "../utils/constants"
const Restaurant_card = (props) =>{
    const {resData} = props
    // console.log(resData)
    const {name , avgRating , veg , cuisines , locality , cloudinaryImageId} = resData?.info
    const {slaString} = resData?.info?.sla
    
    return (
        
        <div data-testid="resCard" className="m-4 p-2 w-[300px] h-auto bg-gray-100 rounded-xl hover:bg-gray-200 shadow-2xl ">
            <img className="w-[380px] h-[220px] rounded-lg  "
            src={CDN_URL + cloudinaryImageId}
             alt=""/>
            <div className="my-4 bg-gray-300 items-center justify-center p-4 rounded-lg">
            <ul>
                <h3 className="font-bold">{name}</h3>
                <li><h4>{avgRating!=undefined ? avgRating + "⭐  " : "  "}</h4><h4>{slaString}</h4></li>
                <li><h4>{veg?"Veg. 🥕🍅":"Non-Veg. 🥩🍗"}</h4></li>
                <li><h4 className="truncate">{cuisines.join(", ")}</h4></li>
                <li><h4>{locality}</h4></li>
            </ul>
                
            </div>
        </div>
    )
}


export default Restaurant_card;