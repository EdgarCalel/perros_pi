import { React, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getDogs,
  getTemperamentsList,
  filterDogsByTemperament,
  orderByName,
  filterCreated,
  filterDogsByMAXWeight,
  filterDogsByMINWeight,
  orderByWeight
} from "../../actions/index";
import './perros.css'

export default function Filtros() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments)
  const allDogs = useSelector((state) => state.allDogs);
  const breeds = useSelector((state) => state.breeds);

  const minWeights = allDogs.map((el) => el.weight_min)
  const allDogsMinWeights = [...new Set(minWeights)];
  const maxWeights = allDogs.map((el) => el.weight_max)
  const allDogsMaxWeights = [...new Set(maxWeights)];

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperamentsList());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
  }
  
  function handleClickOrder(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
  }
  function handleClickOrderWeight(e) {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
  }
  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
  }
  function handleFilteredByTemp(e) {
    e.preventDefault();
    dispatch(filterDogsByTemperament(e.target.value));
  }

  function handleFilteredMAXWeight(e) {
    e.preventDefault();
    dispatch(filterDogsByMAXWeight(e.target.value));
  }
  function handleFilteredMINWeight(e) {
    e.preventDefault();
    dispatch(filterDogsByMINWeight(e.target.value));
  }
  return (
    <Fragment>
      <div className="ContenedorFiltros">
        <div className="sideBarHeader">
          <h4 className="header"> :</h4>
          <div
            className="tooltip"
            onClick={(e) => {
              handleClick(e);
            }}>
            <span className="material-icons refresh">Recargar</span>
          </div>
        </div>
        <hr />
        <div className="filterSection">
          {/* <h5 className="filterHeader">Order by name</h5> */}
          <select
            onChange={(e) => {
              handleClickOrder(e);
            }}
          >
            <option defaultValue value="all" hidden>
              Order
            </option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </select>
        </div>
        {/* <div className="filterSection">
          <h5 className="filterHeader">Order by weight</h5>
          <select
            onChange={(e) => {
              handleClickOrderWeight(e);
            }}
          >
            <option defaultValue value="all" hidden>
              Order
            </option>
            <option value="asc">Heaviest 1º</option>
            <option value="desc">Lightest 1º</option>
          </select>
        </div> */}
        <div className="filterSection">
          {/* <h5 className="filterHeader">Filter by source</h5> */}
          <select
            onChange={(e) => {
              handleFilterCreated(e);
            }}
          >
            <option defaultValue value="all">
              All Sources  
            </option>
            <option value="created">base  </option>
            <option value="inDB">api  </option>
          </select>
        </div>
        <div className="filterSection">
          {/* <h5 className="filterHeader">Filter by temperament</h5> */}
          <select onChange={(e) => handleFilteredByTemp(e)}>
            <option value="all">Temperaments</option>
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
          {/* <h5 className="filterHeader">Filter by max weight</h5> */}
          <select onChange={(e) => handleFilteredMAXWeight(e)}>
            <option value="all">pesos</option>
            {allDogsMaxWeights.map((maxWeight) => {
              return maxWeight ? (
                <option value={maxWeight} key={maxWeight}>
                  {maxWeight} kg
                </option>
              ) : (
                ""
              );
            })}
          </select>
        </div>
        <div className="filterSection">
          {/* <h5 className="filterHeader">Filter by min weight</h5> */}
          <select onChange={(e) => handleFilteredMINWeight(e)}>
            <option value="all">peso</option>
            {allDogsMinWeights.map((minWeight) => {
              return minWeight ? (
                <option value={minWeight} key={minWeight}>
                  {minWeight} kg
                </option>
              ) : (
                ""
              );
            })}
          </select>
        </div>
        <div className="filterSection">
          {/* <h5 className="filterHeader">Add a Woof</h5> */}
          <div className="addDog">
            <Link to="/newDog/" className="tooltip">
              <span className="tooltiptext">Crear perro</span>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
