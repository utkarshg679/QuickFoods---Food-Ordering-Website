import UserClass from "./UserClass";
import User from "./User";
import React from "react";
import UserContext from "../utils/UserContext"

class About extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent Constructor")
    }
    componentDidMount(){
        console.log("Parent Component did Mount")
    }
    render(){
        console.log("Parent Render")
        return (
            <div>
                <h1>About Me</h1>
                <div>
                    Logged In User : 
                    <UserContext.Consumer>
                        {({loggedInUser})=> <span> {loggedInUser}</span> }
                    </UserContext.Consumer>
                </div>
                <UserClass name={"Utkarsh Gupta (Class)"} Location={"Gwalior (Class)"}/>
                {/* <User name = {"Utkarsh Gupta (Function)"} Location={"Gwalior (Function)"}/> */}
            </div>
        )
    }
}
export default About;