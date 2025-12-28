import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import Dictionary from "./Dictionary"


function App() {
  return (
    <div className="App">
     <div className="container">
      <header className="App-header">
        <FontAwesomeIcon icon={faBookBookmark} size="2x" />
        <h1>Dictionary App</h1>
      </header>
      <main>
        <Dictionary/>
      </main>
      <footer className="footer"> Coded by Christine Nambatya 🐾</footer>
      </div>
    </div>
  );
}
 
export default App;
