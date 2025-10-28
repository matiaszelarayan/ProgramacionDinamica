
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Seccion1React from "./pages/Seccion1React";
import Seccion2JQuery from "./pages/Seccion2JQuery";
import Seccion3GSAP from "./pages/Seccion3GSAP";
import Seccion4Anime from "./pages/Seccion4Anime";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/seccion1-react" element={<Seccion1React />} />
        <Route path="/seccion2-jquery" element={<Seccion2JQuery />} />
        <Route path="/seccion3-gsap" element={<Seccion3GSAP />} />
        <Route path="/seccion4-anime" element={<Seccion4Anime />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
