import ascension from "../assets/ascension.png"
import deadOps from "../assets/deadOps.png"
import derEisen from "../assets/derEisen.png"
import giant from "../assets/giant.png"
import gorod from "../assets/gorod.png"
import kino from "../assets/kino.png"
import moon from "../assets/moon.png"
import nacht from "../assets/nacht.png"
import origins from "../assets/origins.png"
import revelations from "../assets/revelations.png"
import shadows from "../assets/shadows.png"
import shang from "../assets/shang.png"
import shiNo from "../assets/shiNo.png"
import verruckt from "../assets/verruckt.png"
import zets from "../assets/zets.png"
import { useNavigate } from "react-router-dom"

function Leaderboards(){
    let navigate=useNavigate()
    //3 columns 5 rows
    return(
        <section>
            <h1 className="lb-title">Black Ops 3 Leaderboards</h1>
        <div className="leaderboard-maps">
            <div className="lb-asc">
                <button> <img src={ascension} onClick={() => navigate(`/challenges`)} alt="" /> </button>
                <h2>Ascension</h2>
            </div>
            <div className="lb-do">
                <button> <img src={deadOps} onClick={() => navigate(`/challenges`)}/> </button>
                <h2>Dead Ops 2</h2>
            </div>
            <div className="lb-der">
                <button> <img src={derEisen} alt="" onClick={() => navigate(`/challenges`)}/> </button>
                <h2>Der Eisendrache</h2>
            </div>
            <div className="lb-giant">
                <button> <img src={giant} alt="" onClick={() => navigate(`/challenges`)}/> </button>
                <h2>The Giant</h2>
            </div>
            <div className="lb-gorod" >
                <button> <img  src={gorod} alt="" onClick={() => navigate(`/challenges`)}/> </button>
                <h2>Gorod Krovi</h2>
            </div>
            <div className="lb-kino">
                <button> <img  src={kino} alt="" onClick={() => navigate(`/challenges`)}/> </button>
                <h2>Kino der Toten</h2>
            </div>
            <div className="lb-moon">
                <button> <img  src={moon} alt="" onClick={() => navigate(`/challenges`)}/> </button>
                <h2>Moon</h2>
            </div>
            <div className="lb-nacht" >
                <button> <img src={nacht} alt="" onClick={() => navigate(`/challenges`)}/> </button>
                <h2>Nacht der Untoten</h2>
            </div>
            <div className="lb-ori">
                <button> <img src={origins} alt="" onClick={() => navigate(`/challenges`)}/> </button>
                <h2>Origins</h2>
            </div>
            <div className="lb-rev">
                <button> <img  src={revelations} alt="" onClick={() => navigate(`/challenges`)}/> </button>
                <h2>Revelations</h2> 
            </div>
            <div className="lb-shad">
                <button> <img src={shadows} onClick={() => navigate(`/challenges`)}/> </button>
                <h2>Shadows of Evil</h2>
            </div>
            <div className="lb-shang">
                <button> <img  src={shang} alt="" onClick={() => navigate(`/challenges`)}/> </button>
                <h2>Shangri-La</h2>
            </div>
            <div className="lb-shino">
                <button> <img  src={shiNo} alt="" onClick={() => navigate(`/challenges`)}/> </button>
                <h2>Shi No Numa</h2>
            </div>
            <div className="lb-ver">
                <button> <img src={verruckt} alt="" onClick={() => navigate(`/challenges`)}/> </button>
                <h2>Verruckt</h2>
            </div>
            <div className="lb-zets">
                <button> <img  src={zets} alt="" onClick={() => navigate(`/challenges`)}/> </button>
                <h2>Zetsubou No Shima</h2>
            </div>
        </div>
        </section>
    )
}
export default Leaderboards