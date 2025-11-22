import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Animal from "./components/Animal";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Animal selectedAnimal="dog" />
    </>
  );
}

export default App;
