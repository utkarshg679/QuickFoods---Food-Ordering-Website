import {LOGO_URL} from "../utils/constants";
import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Nav_bar = () =>{
    const OnlineStatus = useOnlineStatus()
    const {loggedInUser} = useContext(UserContext)
    const [buttonName,setbuttonName] = useState("Login")

    // Subscribing to the store using a selector
    const cart = useSelector((store) => store.cart.items)
    // console.log(cart)

    return (   
        <div className="font-sans text-xl flex bg-orange-400  bg-gradient-to-b from-blue-400 border-2 border-black shadow-lg shadow-black">
            <div className="logo-container">
                <Link className="w-1/6" to="/"><img className="w-1/2" src={LOGO_URL} alt="logo" /></Link>
            </div>
            <div className="nav-items w-5/6">
                <ul className="flex flex-nowrap justify-evenly gap-2 pt-4 pl-15 text-base">

                    <li>{(OnlineStatus === true) ? " Online ✅" : " Offline🔴"}</li>
                    <li><Link className="grocery" to="/grocery">🥕🍅Grocery</Link></li>
                    <li>🫴🏻Offers</li>
                    <li><Link className="nav" to="/about">❓About Us</Link></li>
                    <li><Link className="nav" to="/contact_us">✉️Contact Us</Link></li>
                    <li>🧑🏻‍🦱You</li>
                    <li className="font-bold"><Link to={"cart"}>🛒Cart ({cart.length})</Link></li>
                    <li><button className="login" onClick={() => (buttonName === "Login" ? setbuttonName("Logout") : setbuttonName("Login"))}>{buttonName}</button></li>
                    <li><h1 className="font-bold">{loggedInUser}</h1></li>
                </ul>
            </div>
        </div>      
    )
}

export default Nav_bar;