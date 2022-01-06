import { 
  Route ,
  Routes} from "react-router-dom";
  import Landing from './components/LandingPage/inicio';
  import Home from './components/Home/index'
import DogsDetails from './components/Perros/DogDetalle';
import MainHeader from './components/navbar/navbar'
import Formulario from './components/Perros/CrearPerro';
import Error from './components/error';
// import LandingPage from './components/navbar'

function App() {
  return (
    <div className="App">
      <div className="headerP">
      <Routes>
        <Route exact path='/' element={<Landing />} />
      </Routes>
      </div>
      <div >

<MainHeader className="headers" />
  <Routes>
    {/* <Route index exact path='/' element={<Landing />} /> */}
    <Route exact path='/Home' element={<Home />} />
    <Route exact path='/newDog' element={<Formulario />} />
    <Route  path='/dogs/:id' element={<DogsDetails />} />
    <Route exact path='*' element={<Error />} />
  </Routes>

</div>
    </div>
  );
}

export default App;


