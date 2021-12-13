import React, {
    useState, 
    useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allPerros, allId } from '../../actions/index';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import './home.css'
import Filtros from '../Perros/filtros'
import Paginado from './paginado'

export default function Home() {
    const dispatch = useDispatch()
    const dogs =  useSelector((state) => state.dogs)
    const getId = useSelector(state => state.getId)
   
    useEffect(() => {
    dispatch(allPerros(),allId())}, [dispatch])
const allDogs = useSelector((state)=>state.dogs)
const [currentPage, setcurrentPage] = useState(1)
const [DogsForPage, setDogsForPage] = useState(6)
const ultimoDogsList = currentPage * DogsForPage;
const primerDogsList = ultimoDogsList - DogsForPage
const currentDogs = allDogs.slice(primerDogsList, ultimoDogsList)

const paginado =(NumberPage)=>{
    setcurrentPage(NumberPage)
}

    return (
<div className='ContenidoBody'>
    <div className='OpFiltros'>
<Filtros />
    </div>
    <div className='TarjetasPeros'>
    <Link to="/dog">Create Dog</Link>
    <Paginado className="paginado" DogsForPage ={DogsForPage}
    allDogs={allDogs.length}
    paginado ={paginado}>

    </Paginado>
         <div className='cards'>
            {currentDogs?.map(el =>
                (<>
                           {/* <Link to={`/dogs/` + el.id}> */}
                            <Card
                            name={el.name}
                            image={el.image}
                             weight={el.weight}
                            temperament={el.temperament?el.temperament:'se desconoce su temperamento'}
                            key={el.id}
                            />
                        {/* </Link> */}
                    
                        </>
                ))}
   </div>
   <Paginado className="paginado" DogsForPage ={DogsForPage}
    allDogs={allDogs.length}
    paginado ={paginado}>

    </Paginado>
    </div>
</div>


    )
}
