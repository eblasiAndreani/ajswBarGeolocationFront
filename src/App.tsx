import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Localizacion from "./Pages/Localizacion/Localizacion";
import Reserva from "./Pages/Reserva/Reserva";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Bares from "./Pages/Bares/Bares";
import Buscar from "./Pages/Buscar/Buscar";
import Volver from "./Pages/Volver/Volver";
import logo from "./Pages/Home/logo";
import VerPedido from "./Pages/VerPedido/VerPedido";

function App() {
  const barDefault = {
    id: 0, // Puedes cambiar esto según tu lógica
    name: "BuscaBar",
    logo: logo.buscaBar,
  };

  const [bar, setBar] = useState(barDefault);

  const updateBar = (newBar) => {
    setBar(newBar);
  };
  return (
    <Router>
      <Home bar={bar} />
      <Routes>
        <Route path="/" element={<Bares updateBar={updateBar} />} />
        <Route path="/localizacion" element={<Localizacion />} />
        <Route path="/reserva" element={<Reserva Bar={bar} />} />
        <Route path="/verpedido" element={<VerPedido />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buscar" element={<Buscar updateBar={updateBar} />} />
        <Route
          path="/volver"
          element={<Volver updateBar={updateBar} barDefault={barDefault} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
