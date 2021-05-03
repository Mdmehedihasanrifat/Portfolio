import Topbar from "./components/topbar/topbar";
import Intro from "./components/intro/intro";
import Potfolio from "./components/portfolio/potfolio";
import Works from "./components/works/works";
import Tesmonial from "./components/testomnial/tesmonial";
import Contact from "./components/contact/contact";
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import './app.css'


function App() {
    const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="App">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="section">


            <Intro></Intro>
            <Potfolio></Potfolio>
            <Works></Works>
            <Tesmonial></Tesmonial>
            <Contact></Contact>
        </div>

    </div>
  );
}

export default App;
