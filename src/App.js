import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FontAwesomeIcon icon={faBookBookmark} size="2x" />
        <h1>Dictionary App</h1>
      </header>
    </div>
  );
}

export default App;
