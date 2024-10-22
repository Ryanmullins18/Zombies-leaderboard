import { useNavigate } from "react-router-dom"

function Challenges(){
    let navigate= useNavigate()
    return(
        <section>
            <div>
                <button onClick={()=>{navigate("/highround")}}>
                    High Round
                </button>
                <button onClick={()=>{navigate("/firstroom")}}>
                    First room
                </button>
                <button onClick={()=>{navigate("/eespeedrun")}}>
                    EE Speedrun
                </button>
            </div>
        <div>
            challenges
            <button onClick={()=>{navigate("/leaderboards")}}>Back to maps</button>
        </div>
        </section>
    )
}
export default Challenges