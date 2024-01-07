import "./App.css";
import Homepage2 from "./components/phase2/Homepage2";
import Homepage from "./components/phase1/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/tailwind" element={<Homepage2 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
