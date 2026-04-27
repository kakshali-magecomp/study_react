import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contect from "./pages/Contect";
import Deshbord from "./pages/Deshbord";

export default function App() {
  return (
    <BrowserRouter>

      <nav style={{ marginBottom: "10px" , backgroundColor: "lightblue" , height: 50, alignContent:"center", textAlign:"right", paddingRight: 20 }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contect">Contact</Link> |{" "}
        <Link to="/Deshbord">Deshbord</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/Deshbord" element={<Deshbord />} />
      </Routes>

    </BrowserRouter>
  );
}

// export default App;