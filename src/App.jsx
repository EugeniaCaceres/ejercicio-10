import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Formulario from "./components/formulario.jsx";
import GrillaCards from "./components/grilla-cards.jsx";

// Cuando presione enviar, guardar esta película en el localstorage y mostrar en una card.

function App() {
  return (
    <>
      <Formulario></Formulario>
      <GrillaCards></GrillaCards>
    </>
  );
}

export default App;
