import { BrowserRouter as Router, 
  Route ,
  Routes} from "react-router-dom";
  import Landing from './components/LandingPage/inicio';
  import Home from './components/Home/index'
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
    <Route exact path='/' element={<Landing />} />
    <Route exact path='/Home' element={<Home />} />
    <Route exact path='/Perros' element={<Perros />} />
    <Route exact path='/Formulario' element={<Formulario />} />
    <Route exact path='*' element={<Error />} />
  </Routes>
</Router>
    </div>
  );
}

export default App;


