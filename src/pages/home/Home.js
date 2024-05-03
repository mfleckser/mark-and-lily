import "./Home.css"
import stars from "../../pics/stars.png"
import posing from "../../pics/posing.png"
import leaves from "../../pics/leaves.jpg"
import letter from "../../pics/letter.png"

function Home() {
    return (
        <div id="home">
            <img className="home-pic" alt="stars" src={stars}></img>
            <div id="letter"><img id="letter-pic" alt="letter" src={letter}></img></div>
            <img className="home-pic" alt="leaves" src={leaves}></img>
            <img id="posing" className="home-pic" alt="posing" src={posing}></img>
        </div>
    );
}

export default Home;