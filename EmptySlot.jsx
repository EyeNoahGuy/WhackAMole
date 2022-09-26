import { useEffect } from "react";
import Molehill from '../molehill.png'

const EmptySlot = (props) => {

    useEffect (()=>{
        let randSeconds = math.ceil(Math.random()*5000)
        let timer = setTimeout(()=> {
            props.toggle(true)
        },randSeconds)
        return () => clearTimeout(timer)
    })
    return (
        <div>
            <img style={{'width': '30vw'}} src={Molehill}/>
        </div>
    )
}
export default EmptySlot