import {useState} from 'react'
function Categoery(){
    const [isHero,setIsHero] = useState(true)
    function handleHero(){
        setIsHero(true)
    }
    function handleVillain(){
        setIsHero(false)
    }
    const characters ={
            hero:[
             {
                   name :"fererer",
                power:"Gekdjd, Rich",
                costume:"Suit"
             },
            {
                   name :"fererer2",
                power:"Gekdjd, Rich2",
                costume:"Suit2"
             }
            ],
            villains:[
                {
                          name :"fererer3",
                power:"Gekdjd, Rich3",
                costume:"Suit3"
                },
                {
                          name :"fererer4",
                power:"Gekdjd, Rich4",
                costume:"Suit4"
                }
            ]
    }
    return(
        <div>
            <button onClick={handleHero}>Heros</button>
            <button onClick={handleVillain}>Villians</button>
           <ol>
            {
                (isHero ? characters.hero:characters.villains).map(({name,power})=>{
                    return <li>{name} power is {power}</li>
                })
            }
           </ol>
        </div>
    )
}
export default Categoery