import { useNavigate } from "react-router-dom"

function EEspeedrun(){
    let navigate= useNavigate()
    return (
        <div>

        <h1>
            EE speedrun Leaderboard
        </h1>
            <button onClick={()=>{navigate("/challenges")}}>Back to challenges</button>
        </div>
    )
}
export default EEspeedrun