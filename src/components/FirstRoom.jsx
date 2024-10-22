import { useNavigate } from "react-router-dom"

function FirstRoom(){
    let navigate= useNavigate()
    return (
        <div>

        <h1>
            First Room Leaderboard
        </h1>
            <button onClick={()=>{navigate("/challenges")}}>Back to challenges</button>
        </div>
    )
}
export default FirstRoom