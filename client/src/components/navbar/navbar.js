import { Link } from 'react-router-dom';
import './navbar.css';
import SearchBar from "./Search";

export default function Navbar () {
  return (

      <nav className="NavPrincipal">
        <ul className="ulNavbar">
          <div className="navContenido">
          <Link to='/'>Inicio</Link>
          <Link to='/Home'>Home</Link>
          <Link to='/Formulario'>Crear Perro</Link>
          </div>
<div className="searchDiv">
<SearchBar />
</div>
        </ul>
      </nav>

  );
};

