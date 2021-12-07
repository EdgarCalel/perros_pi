import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar () {
  return (

      <nav className="NavPrincipal">
        <ul className="ulNavbar">
          <div className="navContenido">
          <Link to='/'>Inicio</Link>
          <Link to='/Perros'>Recetas</Link>
          <Link to='/Formulario'>Crear Perro</Link>
          </div>
<div className="searchDiv">
          <div class="SearchBox">
		<input type="text" class="SearchBox-input" placeholder="BUSCA ALGO COOL" />
	
			<button class="SearchBox-button">
				<i class="SearchBox-icon">Buscar</i>
			</button>
	</div>
</div>
        </ul>
      </nav>

  );
};