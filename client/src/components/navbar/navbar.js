import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar () {
  return (

      <nav className="NavPrincipal">
        <ul className="ulNavbar">
          <div className="navContenido">
          <Link to='/'>Inicio</Link>
          <Link to='/Home'>Home</Link>
          <Link to='/Perros'>Recetas</Link>
          <Link to='/Formulario'>Crear Perro</Link>
          </div>
<div className="searchDiv">
          <div className="SearchBox">
		<input type="text" className="SearchBox-input" placeholder="BUSCA ALGO COOL" />
	
			<button className="SearchBox-button">
				<i className="SearchBox-icon">Buscar</i>
			</button>
	</div>
</div>
        </ul>
      </nav>

  );
};