import headerLogo from "../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1 className="header__title">¡Hola, Vite!</h1>
      <img
        className="header__logo"
        src={headerLogo}
        alt="Imagen de la aplicación"
      ></img>
    </div>
  );
}

export default Header;
