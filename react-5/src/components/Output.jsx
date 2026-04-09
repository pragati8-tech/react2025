import {useState} from "react"
function Output ()  {
    const [count,setCount] = useState(12)
    function handleClick(){
        setCount(count+1)
        setCount(count => count+2)
    }
  return (
    <>
    <button onClick={handleClick}>click-{count}</button>
    </>
  )
}

export default Output