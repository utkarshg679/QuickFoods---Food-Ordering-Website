import React from "react"

class UserClass extends React.Component {
    constructor(props){
        super(props) // super is used to call the constructor of the parent class
        console.log("Child Constructor")
        this.state = {
        count:0,
    }
    }
    ComponentDidMount(){
        console.log("Child Component Did Mount")
    }
    
    render(){ 
        console.log("Child Render")

        const {name , Location } = this.props
        return (
            <div>
                <h1>Name : {name}</h1>
                <h2>Location : {Location}</h2>
                <h3>Contact : @utkarshg679</h3>
                <h3>Count : {this.state.count}</h3>
                <button onClick={
                    () => {
                        this.setState({
                            count : this.state.count + 1,
                        })
                    }
                }>Count Increase</button>
            </div>
        )
    }
}

export default UserClass;