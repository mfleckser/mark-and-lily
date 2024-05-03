import './App.css';
import NavBar from './components/NavBar';
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import Missions from "./pages/missions/Missions";
import Farts from "./pages/farts/Farts";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const getPercent = () => {
    const anniversary = new Date(2024, 9, 28);
    const dif = anniversary.getTime() - Date.now();
    console.log(dif);
    return 1 - (dif / 31536000000);
  }

  return (
    <Router>
      <div id="nav"><NavBar /></div>
      <div id="content" style={{"--p": getPercent()}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/farts" element={<Farts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
