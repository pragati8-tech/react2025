import { useState } from "react";
function Person({name,age}){
    const [user,setUser] = useState(name)
    const [agee,setAge] = useState(age)

    function handleClick(){
        setUser("Prajal")
        setAge(0)
    }

    return (
        <div>
            <h1>Name: {user}</h1>
            <h1>Age: {agee}</h1>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}
export default Person