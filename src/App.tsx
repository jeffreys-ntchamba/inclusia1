import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import Profil from "./components/profil.component";
import Input from "./components/input.component";

function App() {
  return (
    <div className="app">
        <Router>
          <Profil/>
        </Router>
    </div>
  );
}

export default App;
