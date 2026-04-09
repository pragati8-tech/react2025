import {useState} from "react"
function CounterApp(){
    const [count,setCount] = useState(0)
  
    function counterPlus(){
        setCount(count+1)
    }
    function counterMinus(){
        setCount(count-1)
    }
    return (
        <div>
            <button onClick={counterPlus}>+</button>
            <button onClick={counterMinus}>-</button>
            <div>{count}</div>
        </div>
    )
}
export default CounterApp

