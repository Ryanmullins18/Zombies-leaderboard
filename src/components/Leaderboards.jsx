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

function Leaderboards(){
    //3 columns 5 rows
    return(
        <section>
            <h1 className="lb-title">Black Ops 3 Leaderboards</h1>
        <div className="leaderboard-maps">
            <div className="lb-asc">
                <img src={ascension} alt="" />
                <h2>Ascension</h2>
            </div>
            <div className="lb-do">
                <img src={deadOps} />
                <h2>Dead Ops 2</h2>
            </div>
            <div className="lb-der">
                <img src={derEisen} alt="" />
                <h2>Der Eisendrache</h2>
            </div>
            <div className="lb-giant">
                <img src={giant} alt="" />
                <h2>The Giant</h2>
            </div>
            <div className="lb-gorod" >
                <img  src={gorod} alt="" />
                <h2>Gorod Krovi</h2>
            </div>
            <div className="lb-kino">
                <img  src={kino} alt="" />
                <h2>Kino der Toten</h2>
            </div>
            <div className="lb-moon">
                <img  src={moon} alt="" />
                <h2>Moon</h2>
            </div>
            <div className="lb-nacht" >
                <img src={nacht} alt="" />
                <h2>Nacht der Untoten</h2>
            </div>
            <div className="lb-ori">
                <img src={origins} alt="" />
                <h2>Origins</h2>
            </div>
            <div className="lb-rev">
                <img  src={revelations} alt="" />
                <h2>Revelations</h2>
            </div>
            <div className="lb-shad">
                <img src={shadows} />
                <h2>Shadows of Evil</h2>
            </div>
            <div className="lb-shang">
                <img  src={shang} alt="" />
                <h2>Shangri-La</h2>
            </div>
            <div className="lb-shino">
                <img  src={shiNo} alt="" />
                <h2>Shi No Numa</h2>
            </div>
            <div className="lb-ver">
                <img src={verruckt} alt="" />
                <h2>Verruckt</h2>
            </div>
            <div className="lb-zets">
                <img  src={zets} alt="" />
                <h2>Zetsubou No Shima</h2>
            </div>
        </div>
        </section>
    )
}
export default Leaderboards