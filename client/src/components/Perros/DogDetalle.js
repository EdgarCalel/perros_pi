import React, { Fragment, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  getDetails } from "../../actions/index";
import './detalle.css'



export default function DogDetail(props) {
  const dispatch = useDispatch();
  const { id  } = useParams();

  useEffect(() => {
    dispatch(getDetails(id))
  },[dispatch, id]);

  const myDog = useSelector((state) => state.details);
  return (
    <Fragment>

    
            {myDog?.length >0 ? (myDog?.map(tem =>{
              return(
                <div className="TotalCorte">
                <div className="dogCardD">
                    <div className="titleAreaD">
                      <h4 className="dogName">{tem.name}</h4>
                    </div>
                    <div className="infoAreaD">
                    <div className="imageAreaD">
                        <img
                          className="dogImageD"
                          src={tem?.image ? tem.image:'no hay naadafada'}
                          alt={`la url ${tem.image} que ingreso tiene inconvenientes para mostrar la imagen`}
                          width={350}
                          height={250}
                        />
                      </div>
                      <div className="tempAreaD">
                        <div className="parte1">
                        <div>
                          <div className="toto">
                            <div className="logoTem">
                              <img src={"https://cdn-icons-png.flaticon.com/512/2064/2064863.png"} alt="" />
                            </div>
                            <div className="conte_det">
                              <h5 className="dogTempD">{tem.temperament}</h5>
                            </div>
                          </div>
        
                      <div className="toto1">
                      <div className="logoTem">
                        <img src={"https://cdn-icons-png.flaticon.com/512/1142/1142172.png"} alt="" /></div>
                      <div className="conte_det">
                        <h5 className="dogTempD">Años de vida: {tem.life_span}</h5>
                        </div>
                      </div>
                      </div>
                      </div>
                      <div className="parte2">
                      <div>
                          <div className="toto">
                            <div className="logoTem">
                              <img src={"https://cdn-icons-png.flaticon.com/512/6401/6401143.png"} alt="" />
                            </div>
                            <div className="conte_det">
                      <h5 className="dogWeightD">Peso: {tem?.weight_min?tem?.weight_min:'no se tiene dato'}-{tem?.weight_max}</h5>
                            </div>
                          </div>
                      <div className="toto1">
                      <div className="logoTem">
                        <img src={"https://cdn-icons-png.flaticon.com/512/3048/3048404.png"} alt="" /></div>
                      <div className="conte_det">
                        <h5 className="dogTempD">Altura: {tem.height?tem.height: tem.weight_min +" - "+ tem.weight_max}</h5>
                        </div>
                      </div>
                      </div>
                      </div>
                      </div>
                    </div>
                  <Link to="/home">
                      <button className="button">Back</button>
                    </Link>
                </div>
                </div>
              )
            } )
        ): (<p style={{fontSize:"8rem"}}>loading</p>)}

      

      
    </Fragment>
  );
}
