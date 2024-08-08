import { useDispatch, useSelector } from "react-redux";
import FoodCard from "./FoodCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const cartitemsCount = useSelector((store) => store.cart.itemCounts)
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        
        <div className="p-10">
            <h1 className="text-center text-2xl font-sans font- font-extrabold">
                {cartItems.length !== 0 ? `Your Cart: ${cartItems.length}` : "Looks like you haven't added your favorite Food to the Cart. Just go to your favorite Restaurant and select your Favorite Cuisines 😋😋 !!"}
            </h1>
            {cartItems.length !== 0 && (
                <div className="mx-96 shadow-lg shadow-gray-500 rounded-md bg-gray-100 p-5 w-1/2">
                    <button className="p-2 bg-stone-700 shadow-2xl shadow-black text-white rounded-lg" onClick={handleClearCart}>
                        Clear Cart 🗑️
                    </button>
                    {cartItems.map((item) => (
                        <FoodCard key={item.card.info.id} data={item} />
                    ))}
                    <div className="font-bold text-right p-3 bg-amber-500 rounded-lg m-3">
                    Total Amount : {cartItems.reduce((acc,currItem) =>acc+=Math.floor(currItem.card.info.price/100) * cartitemsCount[currItem.card.info.id]  ,0)}
                    </div>
                </div>
            )}
        </div>
        
        
    );
};

export default Cart;
