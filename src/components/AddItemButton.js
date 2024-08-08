import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const AddItemButton = ({ data }) => {
  const itemCountList = useSelector((store) => store.cart.itemCounts);
  const dispatch = useDispatch();

  const [hovered1 , setHovered1] = useState(false)
  const [hovered2 , setHovered2] = useState(false)


  // Local state to manage count
  const [count, setCount] = useState(itemCountList[data.card.info.id] || 0);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    setCount((prevCount) => prevCount + 1);
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
    setCount((prevCount) => Math.max(0, prevCount - 1)); // Ensure count doesn't go below 0
  };

  return (
    <div className=" bg-black text-white shadow-xl rounded-lg mt-24 ml-12">
     {count!==0 ?
      <span>
      <button 
        onMouseOver={() => setHovered1(true)}
        onMouseOut={() => setHovered1(false)}
        className={`px-2 py-1 w-1/3 ${hovered1 ? 'bg-gray-300 text-black' : 'bg-transparent'}`}
        onClick={() => handleRemoveItem(data)}>
        -
      </button>
        <span className=" w-1/3">{count}</span>
      <button 
        onMouseOver={() => setHovered2(true)}
        onMouseOut={() => setHovered2(false)}
        className={`px-2 py-1 w-1/3 ${hovered2 ? 'bg-gray-300 text-black' : 'bg-transparent'}`}
        onClick={() => handleAddItem(data)}>
        +
    </button>        
      </span>
      :
      <span className="p-3" onClick={() => handleAddItem(data)}>ADD</span>
     }
    </div>
  );
};

export default AddItemButton;
