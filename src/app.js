import React,{lazy,Suspense, useState , useEffect} from "react";
import ReactDOM from "react-dom/client"
import Nav_bar from "./components/Nav_bar"  // .js lagao ya na lagao fark nhi padega
import Body from "./components/Body"
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Error from "./components/Error"
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const Grocery = lazy(()=> import("./components/Grocery"))
const App_layout = () =>{

    const [userName , setUserName] = useState("")
    useEffect(()=>{
        // making an api call to recieve the user info(name only here)
        const data = {
            name: "Utkarsh Gupta"
        }
        setUserName(data.name)
    },[])

    return (
        // technically this **Provider** defines scope .. like here the appStore is defining its scope in both NavBar and all the rem. Outlet
        <Provider store={appStore}> 
            <UserContext.Provider value={{ loggedInUser : userName , setUserName}}>
                <div className="App-Layout">
                    <Nav_bar/>
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App_layout/>,
        children: [{
            path: "/",
            element: <Body />
        
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/grocery",
            element: <Suspense fallback={
            <div><h1>Loading.....</h1>
            <Shimmer /></div>
            }><Grocery/></Suspense>
        },
        {
            path: "/contact_us",
            element: <ContactUs />
        },
        {
            path: "/cart",
            element: <Cart />
            },
        {
            path: "/restaurants/:resId",
            element: <RestaurantMenu />
            },
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)
