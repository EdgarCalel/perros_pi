import React, { Fragment } from "react";
import DogCard from "../Card/Card";
import Pagination from "../utils/paginacion";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogs } from "../../actions";
import './perros.css'

export default function DogContainer() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <Fragment>
     <div className="DogContainer">
        <Pagination
          dogsPerPage={dogsPerPage}
          allDogs={allDogs.length}
          pagination={pagination}
          currentPage={currentPage}
        />
        <div className="Paginacion" ></div>
        {
          
          currentDogs.map((el) => { 
            return  (
          <DogCard
            key={el.id}
            id={el.id}
            name={el.name}
            image={el.image}
            createdInDB={el.createdInDB?'base dtos':'nada'}
            height={el.height?el.height:el.height_min +'-'+el.height_max}
            weight={el.weight?el.weight: el.weight_min +'-'+el.weight_max}
            temperament={el.temperament?el.temperament:el.Temperamentos.map((el=>el.name+" "))}
            // temperaments={el.temperamentos}
          />
        )})}
                  <div className="Paginacion" ></div>

         <Pagination
          dogsPerPage={dogsPerPage}
          allDogs={allDogs.length}
          pagination={pagination}
          currentPage={currentPage}
        />
      </div>
    </Fragment>
  );
}
