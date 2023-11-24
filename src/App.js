import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Hed from "./Components/header/Hed.jsx";
import Hero from "./Components/Hero/Hero";
import Miny from "./Components/Minycard/Miny.jsx";
import Exprince from "./Components/EXPERIENCES/Exprince.jsx";
import Power from "./Components/POWER/Power.jsx";
import Show from "./Components/Show/Show.jsx";
import Cards from "./Components/Cards/Card.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import About from "./Components/About/About.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Hed />
    
      <Hero />
      <Routes>
        <Route
          path="/task_phone/src/Components/About/About.jsx"
          element={<About />}
        ></Route>
      </Routes>
      <Miny />
      <Exprince />
      <Power />
      <Show />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
