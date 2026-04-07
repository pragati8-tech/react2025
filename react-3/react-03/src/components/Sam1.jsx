function Sam1(){
    //upar wali dunia ((statements)you can write if , else,for,let,while)
    let a= true
    let b= "same"
    let c= null
    let d= undefined
    console.log(a,b,c,d) // (console is only on upr wali dunia)

    return (
        //niche wali dunia ((expressions)you can not write if , else,for,let,while, but you can write ternary operator, map, filter))
        <div>
            <h1>hello guys</h1>
            <h1>A:{JSON.stringify(a)}</h1>
            <h1>B:{JSON.stringify(b)}</h1>
            <h1>C:{JSON.stringify(c)}</h1>
            <h1>D:{JSON.stringify(d)}</h1>
        </div>
    )
}
export default Sam1