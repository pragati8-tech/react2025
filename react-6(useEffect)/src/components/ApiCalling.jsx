import {useState, useEffect} from "react"
import axios from "axios"

// 3. Axios with async await
function ApiCalling(){
    const [data,setData] = useState([])

    useEffect( () => {
        async function calling(){
       
            let res = await axios.get("https://jsonplaceholder.typicode.com/todos")
            // console.log(res);
            setData(res.data)
        }
     calling()
    })

return(
    <div>
       {
        data.map(item =>{
            return (
                <div>

                    <div>ID:{item.id}</div>
                    <div>Title{item.title}</div>
                </div>
            )
        })
       }
    </div>
)
}

// 2. Axios with promise
// function ApiCalling(){
//     const [data,setData] = useState([])

//     useEffect( () => {
//        axios.get("https://jsonplaceholder.typicode.com/todos")
//        .then((res)=>setData(res.data))
       
//        .catch((err)=>console.log(err))
//     })

// return(
//     <div>
//        {
//         data.map(item =>{
//             return (
//                 <div>

//                     <div>ID:{item.id}</div>
//                     <div>Title{item.title}</div>
//                 </div>
//             )
//         })
//        }
//     </div>
// )
// }
export default ApiCalling
// call api ----------------------------------------------------------------------
// 1.fetch with async await
// 2. Axios with promise
// 3. Axios with async await
// function ApiCalling(){
//     const [data,setData] = useState([])

//     useEffect( () => {
//         async function fetchData(){

//             const response = await fetch("https://jsonplaceholder.typicode.com/todos")
//             const result = await response.json()
//             console.log(result);
//             // setData(result)
//         }
//         fetchData()
//     })

// return(
//     <div>
//        {
//         data.map(item =>{
//             return (
//                 <div>

//                     <div>ID:{item.id}</div>
//                     <div>Title{item.title}</div>
//                 </div>
//             )
//         })
//        }
//     </div>
// )
// }
// export default ApiCalling

// -----------------------------simple useEffect and fetch the data---------------------------------------------

// function ApiCalling(){
//     const [data,setData] = useState([])

//     useEffect( () => {
//         fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((res)=>res.json())
//         .then((data)=>
//         setData(data)
//         )
//         .catch(err => console.log(err))
//     }, [])

// return(
//     <div>
//        {
//         data.map(item =>{
//             return (
//                 <div>

//                     <div>ID:{item.id}</div>
//                     <div>Title{item.title}</div>
//                 </div>
//             )
//         })
//        }
//     </div>
// )
// }
// export default ApiCalling