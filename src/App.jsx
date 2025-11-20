import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>¡Hola, Vite!</h1>
      <p>Este es tu primer proyecto Vite</p>
    </>
  );
}

export default App;
