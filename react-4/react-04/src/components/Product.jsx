

function Product({productName,price}){
    return (
        <div>
            <h1 style={{color:"blue", fontWeight:"bold"}}>i am buying {productName}, price is {price}</h1>
            <h1 style={{color:"green", fontStyle:"italic"}}> price is {price}</h1>
        </div>
    )
}
export default Product