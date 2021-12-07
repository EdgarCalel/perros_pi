import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <header >
      <nav className="NavPrincipal">
        <ul className="ulNavbar">

          <Link to='/'>Inicio</Link>
          <Link to='/Formulario'>Formulario</Link>
          <Link to='/Perros'>Recetas</Link>

        </ul>
      </nav>
    </header>
  );
};
export default Navbar;