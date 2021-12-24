import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import './card.css'
export default function DogCard( { id, name, image, temperament, weight,height, createdInDB} ) {
    return (
      <Fragment>
        <div className="dogCard">
          <Link to={"/dogs/" + id}>
            <div className="titleArea">
              <h4 className="dogName">{name}</h4>
            </div>
            <div className="infoArea">
            <div className="imageArea">
                <img
                  className="dogImage"
                  src={image}
                  alt={`not not found`}
                  width={150}
                  height={100}
                />
              </div>
              <div className="tempArea">
                  <h5 className="dogTemp">{temperament}</h5>
                  <h5 className="dogTemp">weight {weight}</h5>
                  <h5 className="dogTemp">Heigt {height}</h5>
                  <h5 className="dogTemp">hola {createdInDB}</h5>




                 
              </div>
             
            </div>
          </Link>
        </div>
      </Fragment>
    );

 
}
