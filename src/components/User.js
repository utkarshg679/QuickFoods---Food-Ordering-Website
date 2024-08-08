import { useState } from "react";

const User = (props) => {
    const {name , Location} = props
    const [count] = useState(0)
    return (
        <div>
            <h1>Name : {name}</h1>
            <h2>Location : {Location}</h2>
            <h3>Contact : @utkarshg679</h3>
            <h3>Count : {count}</h3>
        </div>
    )
}
export default User;