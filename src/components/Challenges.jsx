import { useNavigate } from "react-router-dom"
import round from "../assets/images/round.png"
import help from "../assets/images/help.png"
import eesr from "../assets/images/eesr.png"

function Challenges(){
    let navigate= useNavigate()
    return(
        <section>
            <h1 className="lb-title">Challenge Record Types</h1>
            <div className="challenges">
                <div className="chal1">
                    <button onClick={()=>{navigate("/highround")}}>
                        <img src={round} alt="" />
                        <h2 className="chalT">High Round</h2>
                    </button>
                </div>
                <div className="chal2">
                    <button onClick={()=>{navigate("/firstroom")}}>
                        <img src={help} alt="" />
                        <h2 className="chalT">First Room</h2>
                    </button>
                </div>
                <div className="chal3">
                    <button onClick={()=>{navigate("/eespeedrun")}}>
                        <img src={eesr} alt="" />
                        <h2 className="chalT">EE Speedrun</h2>
                    </button>
                </div>
            </div>
        <div>
            <button onClick={()=>{navigate("/leaderboards")}}>Back to maps</button>
        </div>
        </section>
    )
}
export default Challenges