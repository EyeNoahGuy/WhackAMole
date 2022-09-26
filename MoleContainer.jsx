import {useState} from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

const MoleContainer = (props) => {
    
    let [Mole, setTheMole] = useState(false)
    
    const handleClick = (e) => {
        props.setScore(props.score+1)
        setTheMole(false)
    }
    
    let displayMole = Mole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick}/>
    
    return (
    <div style={{'width':'20vw'}}>
        {displayMole}
    </div>
)
}
export default MoleContainer
