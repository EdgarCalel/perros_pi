import { BrowserRouter as Router, 
  Route ,
  Routes} from "react-router-dom";
  import Inicio from './components/inicio/inicio';
import Perros from './components/Perros/index';
import Formulario from './components/Perros/formulario';
import MainHeader from './components/navbar/navbar';
import Error from './components/error';

function App() {
  return (
    <div className="App">
<Router>
<MainHeader />
  <Routes>
    <div>
    <Route exact path='/' element={<Inicio />} />
    <Route exact path='/Perros' element={<Perros />} />
    <Route exact path='/Formulario' element={<Formulario />} />
    <Route exact path='*' element={<Error />} />
    </div>
  </Routes>
</Router>
    </div>
  );
}

export default App;


