## why is using keys necessary ?

    ==> because keys help react to uniquely identify all the restaurants

## why using indexes as keys is considered a bad practise?

    ==> Agar list mein koi item add, remove, ya rearrange hota hai, to index change ho jata hai. Iska matlab hai ki agar aap index ko keys ke roop mein istemal karte hain, to React ko har ek item ko pehchanne ke liye har bar puri list ko dubara se traverse karna padega, jo performance ko affect karta hai.

## React Hooks

==> These are normal JS utility functions

    - ==> Two types of HOOKS:
    - useState() -> used to create superpowerful state variables in react
    - useEffect()
    - Always use HOOKS inside the fucntional components
    - Using HOOKS inside if-else statements can create inconsistensies in the code

## Mess with React , React messes with You !!

## Whenever my state variable updates , React will re-render my Components!!

## ##React doesn't make our app fast , React only manages the DOM-Manipulation , for eg. when we hit the filter button it swiftly refreshes the page

##

    let [Res_card , setRes_card] = useState(resList)

- this is how we create a state variable ,, its value cannot be
  updated like a normal variable ,, we will have to use setRes_card() fn to do so..........
  --> This is simply ""ARRAY DE-STRUCTURING""

##

    useEffect(() => {
    console.log("useEffect implemented")}, [])

- useEffect is called as soon as the rendering is completed

- Remember that , at the end of the day useEffect and useState are just JS normal functions!!

##

## Why does this work:

    const [buttonName,setbuttonName] = useState("Login")

- This works because whenever we call the setbuttonName() fn the whole component will be re-rendered thus over-writing a new const variable with a different variable

## _Important_ : How is React so damn efficient in DOM Manipulation ?

Whenever a component is re-rendered in the DOM , the react fiber ( React DOM Reconciliation ) does'nt change the entire DOM .Instead it
compares the new Virtual DOM and the Old Virtual DOM and looks out for the changes . After that it re-renders only those changes into the existing DOM .

## Important :

    We should never use <a></a> tag to route to some other page as when we click it , it refreshes the entire page.We will use "Link" (By react-router-dom) to do this ..
    Link component work exactly similar to the <a></a> tag

## Important :

    if no dependency array is not present => useEffect is called on every Render
    if dependency array is empty = [] => useEffect is only called on initial render(just once)
    if dependency array is present = [] => called everytime buttonName is updated

    useEffect(() => {
        console.log("useEffect called")
    }, [])

## There are 2 Types of Routing :

- Client Side Routing
  --> Example : Using Link from "react-router-dom" , we just load the components that are already present with us
- Server Side Routing
  --> Example : Using normal "<a>(Anchor)</a>" tag in our code , we are first sending the request to the server , them the server is sending us the entire new webpage

## Important :-

Invoking a class- Based Component means creating an instance of that class.

##

    * First the Constructor is called , then the Render() , then the componentDidMount()

##

## Custom Hooks

    * We can create user-defined hooks in our code !!

## Important :-

    ## In order to make our app usable , we have to make our app lighter/Optimised . To do this we have to break the code into smaller chunks ...This process is called Chunking , Code Splitting or Dynamic Bundling

    ## That is why we do Lazy Loading with Suspense
    Lazy Loading also called dynamic Import or On-Demand Loading just reduces the burden of the bundled file

    ## Suspense is Used to atleast show something (fallback/temporary content like Shimmer etc.) on the screen , until the component's code is dynamically loaded

##

## Higher Order Components

    These are types of Components that take in another components and give out a new modified component!!

##

## Lifting State Up

    The one part in the RestaurantMenu component we removed the State variables functionality from the CategoryCard Component and gave it to the RestaurantMenu component (ITS PARENT) is called "Lifting State Up".We did it to let the parent control the expansions and all....

## Data Drilling 🚫 ,, Context Creating 👍

    Earlier when we had to supply the data to the child , we were sending our data through props ...this process was very complicated , and it got even more when the number of children got increased ..

    This is why React supports this amazing thing called Context creation ...

     ** To use Context Creation in global scope we have to use <(UserContext).Provider>..<(UserContext).Provider /> where UserContext is the name of the Context file where the context is created
     ** Like this UserContext we can create multiple contexts...
     ** In our case the root of our whole program is the "app.js" file
     ** In app.js , we can use <(UserContext).Provider>..<(UserContext).Provider /> through which we can supply data to other conponents .. be it Nav_bar or Body or others..

## Redux ToolKit

    ## Working explaination through an example (Write operation) :-
        Redux is an entirely different library from React . Redux is a library located in a centralised location in our system . It's data simply divided into several slices with each of them serving different purposes for our application .

        ## Example : Suppose a case when we have built an Add button on our FoodCard . When we press the Add button , the RTK first performs an operation called "Dispatch the Action " in which inside the  "action" , there is a function call made . This function call is called <a>Reducer<a/> function.
        This "Reducer" function does the job of updating the slice of the Redux Store .

        ## Reading from the Redux slices (Read operation) : Suppose we have to Read the data from the Redux slices and display it on the Cart icon section on the Nav_bar . Now what we will do ... we will use something called a Selector . We will use a selector to read the data from the Redux Slice Store . This process is called ""Subscribing to the Store"".

    -   Remember that there is only ""one reducer"" in the Redux store 
    -   That redux store is divided into several slices , each containing thier own reducer 
    -   That's why ... in appStore we write word "reducer" and in cartSlice we write the word "reducers"

##  Types of testings(for Developers)

    - Unit Testing (Testing of a single unit / Component of our Project)
    - Intergration Testing (Testing in which multiple components are talking to each other )
    - End to End Testing     

    - We built the app using Parcel so we will use React Testing Library...This lib. uses "jest" behind the scenes

## Setting up Testing in our App

    - Install React Testing Library
    - Install jest
    - Installing Babel dependencies
    - Configure Babel
    - Configure Parcel Config file to disable default babel transpilation
    - Jest - npx jest --init
    - Seperately setting up JSDom library  
    - install @babel/preset-react - to make JSX work in test cases
    - include @babel/preset-react in the babel config file
    - install @testing-library/jest-dom #   Q u i c k F o o d s - - - F o o d - O r d e r i n g - W e b s i t e  
 