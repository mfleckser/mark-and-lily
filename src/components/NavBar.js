import "./NavBar.css";
import house from "../pics/home.png"
import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();

    const navHome = () => { navigate("/") }
    const navGallery = () => { navigate("/gallery") }
    const navMission = () => { navigate("/missions") }
    const navFart = () => { navigate("/farts") }

    return (<div id="nav-bar">
        <button id="home-button" onClick={navHome}><img id="home-icon" alt="Home" src={house}></img></button>
        <div id="title"><span>Lily and Mark!!!</span></div>
        <div id="pages">
            |<button onClick={navGallery} className="nav-bar-item">Gallery</button>
            |<button onClick={navMission} className="nav-bar-item">Missions</button>
            |<button onClick={navFart} className="nav-bar-item">Fart List</button>
        </div>
    </div>);
}

export default NavBar;