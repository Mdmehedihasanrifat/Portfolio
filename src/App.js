import Topbar from "./components/topbar/topbar";
import Intro from "./components/intro/intro";
import Potfolio from "./components/portfolio/potfolio";
import Works from "./components/works/works";
import Tesmonial from "./components/testomnial/tesmonial";
import Contact from "./components/contact/contact";
import './app.css'


function App() {
  return (
    <div className="App">
          <Topbar></Topbar>
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
