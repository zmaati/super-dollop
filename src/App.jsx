import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import reactLogo from "./assets/favicon.ico"

function App() {
  return (
    <div className="whole">
      <Navbar />
        <div className="content">
          <h1 className="apph1">Strona testowa!</h1>
        </div>
        <div className="logocontainer">
          <img src={reactLogo} className="logo react" alt="react logo"></img>
          </div>
          <p>
            Moja pierwsza bardziej poważna strona w 
            <span>React</span>
          </p>
    </div>
  );
}

export default App;
