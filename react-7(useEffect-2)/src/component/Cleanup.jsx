import {useState,useEffect} from 'react'

function Cleanup(){
    const [timer,setTimer] = useState(0)
   useEffect(()=>{
    
       setTimeout(()=>{

            setTimer(timer+1)
        },1000)
   
   },[timer])
  
    return(
        <div>
            <h1>{timer}</h1>
        </div>
    )
}
export default Cleanup


// function Cleanup(){
//     const [timer,setTimer] = useState(0)
//    useEffect(()=>{
    
//        const interval= setInterval(()=>{

//             setTimer(prev=>prev+1)
//         },1000)
//     return () => clearInterval(interval)
//    },[])
  
//     return(
//         <div>
//             <h1>{timer}</h1>
//         </div>
//     )
// }
// export default Cleanup