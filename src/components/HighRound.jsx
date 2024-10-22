import { useNavigate } from "react-router-dom"

function HighRound(){
    let navigate= useNavigate()
    return (
        <div>

        <h1>
            High Round Leaderboard
        </h1>
            <button onClick={()=>{navigate("/challenges")}}>Back to challenges</button>
        </div>
    )
}
export default HighRound