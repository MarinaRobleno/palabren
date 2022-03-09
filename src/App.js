import logo from "./logo.svg";
import "./App.css";
import { Game } from "./views/Game";
import { Results } from "./views/Results";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/palabren" element={<Game />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
