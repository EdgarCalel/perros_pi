
import React from "react";
import { Fragment } from "react";
import Filtros from "../Perros/filtros";
import DogArea from "../Perros/DogContainer";
import NavBar from "../navbar/navbar";
import './home.css'

export default function Home() {
  
  return (
    <Fragment>
        <NavBar />
      <div className="contenedor" >
      <div className="filtrosP">
          <Filtros />
      </div>
      <div className="ContenidoP">  
        <DogArea />
        </div>

      
    
      </div>
    </Fragment>
  );
}