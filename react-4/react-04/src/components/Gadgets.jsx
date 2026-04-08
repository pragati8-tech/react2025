

function Gadgets({arr}) {
  // console.log(arr);
  return (
    arr.map((item)=>{
      return (

       <ol style={item.price>50000?{border:"2px solid black"}:{}}>
        <li>{item.id}</li>
         <li>{item.name}</li>
        <li>{item.description}</li>
        <li>{item.price}</li>
       </ol>
      )
    })
  )
}

export default Gadgets