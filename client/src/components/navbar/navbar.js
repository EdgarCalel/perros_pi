import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar () {
  return (
    <div >
      <nav className="NavPrincipal">
        <ul className="ulNavbar">

          <Link to='/'>Inicio</Link>
          <Link to='/Perros'>Recetas</Link>
          <Link to='/Formulario'>Crear Perro</Link>


        </ul>
      </nav>
    </div>
  );
};
