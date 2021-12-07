import { Route, Routes } from 'react-router-dom';
import Inicio from './components/inicio/inicio';
import Perros from './components/Perros/index';
import Formulario from './components/Perros/formulario';
import MainHeader from './components/navbar';
import Error from './components/error';


function App() {
  return (
    <div className="CuerpoCompleto">
      <MainHeader />
      <main className="mainQ">
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Perros' element={<Perros />} />
          <Route path='/Formulario' element={<Formulario />} />
          <Route path='*' element={<Error />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;

