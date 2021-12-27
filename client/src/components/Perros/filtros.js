import { React, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getDogs,
  getTemperamentsList,
  filterDogsByTemperament,
  orderByName,
  filterCreated,
  orderByWeight
} from "../../actions/index";
import './perros.css'

export default function Filtros() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments)
  
  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperamentsList());
  }, [dispatch]);

  function ResetFiltros(e) {
    e.preventDefault();
    dispatch(getDogs());
  }
  
  function ordenAlfabetico(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
  }
  function orderPorPeso(e) {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
  }
  function FiltroCreadoEn(e) {
    dispatch(filterCreated(e.target.value));
  }
  function FiltroPorTemperamento(e) {
    e.preventDefault();
    dispatch(filterDogsByTemperament(e.target.value));
  }

  return (
    <Fragment>
      <div className="ContenedorFiltros">
        <div className="filterSection">
          <select onChange={(e) => { ordenAlfabetico(e); }}>
            <option defaultValue value="all" hidden>
              Order
            </option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </select>
        </div>
        <div className="filterSection">
          <select onChange={(e) => { orderPorPeso(e)}}>
            <option defaultValue value="all" hidden>
              Order
            </option>
            <option value="asc">Mas Pesada</option>
            <option value="desc">Menos Pesada</option>
          </select>
        </div>

        <div className="filterSection">
          <select
            onChange={(e) => {FiltroCreadoEn(e)}}>
            <option defaultValue value="all">
              Todos los perros  
            </option>
            <option value="created">Creados</option>
            <option value="inDB">Por api</option>
          </select>
        </div>
        <div className="filterSection">
          <select onChange={(e) => FiltroPorTemperamento(e)}>
            <option value="all">Temperamentos</option>
            {temperaments.map((temp) => {
              return (
                <option value={temp} key={temp}>
                  {temp}
                </option>
              );
            })}
          </select>
        </div>

        <div className="filterSection">

            <Link to="/newDog/" className="AggPerro">
              <span className="tooltiptext">Crear perro</span>
            </Link>
      
        </div>
        <div
            className="AggPerro2"
            onClick={(e) => {ResetFiltros(e)}}>
            <span className="material-icons refresh">Refresh</span>
          </div>
      </div>
    </Fragment>
  );
}
