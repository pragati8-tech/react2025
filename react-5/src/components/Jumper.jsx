import {useState} from "react"
function Jumper(){
    const [count,setCount] = useState(5)
    function jumperFunction(){
        setCount(count=>(count+1))
        setCount(count=>(count+1))
        setCount(count=>(count+1))
    }
    return(
        <>
        <button onClick={jumperFunction}>jumper</button>
        <h1>{count}</h1>
        </>
    )
}
export default Jumper