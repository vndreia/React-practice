import headerLogo from "../assets/logo.pnggit";

function Header() {
  return (
    <div>
      <h1>¡Hola, Vite!</h1>
      <img src={headerLogo} alt="Imagen de la aplicación"></img>
    </div>
  );
}

export default Header;
