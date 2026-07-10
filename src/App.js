import Raect from "react"
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import Dictionary from "./Dictionary"


function App() {
  return (
    <div className="App py-5">
     <div className="container style-wrapper">
      <header className="App-main-header mb-5">
        <div classname="logo-glow">
          <FontAwesomeIcon icon={faBookBookmark} className="header-icon"/>
        </div>
        <h1>Quiet <span className="accent-title">Lexicon</span></h1>
      </header>

      <main>
        <Dictionary defaultKeyword="Universe"/>
      </main>

      <footer className="footer mt-5 text-center"> Coded with Passion by <span className="dev-name">Christine Nambatya</span>
         </footer>
      </div>
    </div>
  );
}
 
export default App;
