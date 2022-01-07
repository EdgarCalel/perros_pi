import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postDog, getTemperamentsList } from "../../actions/index";
import './perros.css'
import { useNavigate, Link } from "react-router-dom";

function validateForm(input) {
  let errors = {};
  
  if (!input.name) {errors.name = "Tienes que colocar un nombre";
  } else {errors.name = "";}
  if (!input.weight_min) {
    
    errors.weight_min = "el peso tiene que ser numero";
  } else if (!/\d{1,2}/gi.test(input.weight_min)) {
    
    errors.weight_min = "el minimo tiene que ser 25";
  } else {
    errors.weight_min = "";
  }
  if (!input.weight_max) {
    errors.weight_max = "Tiene que ser un numero";
  } else if (!/\d{1,2}/gi.test(input.weight_max)) {
    errors.weight_max = "El peso tiene que tener un valor maximo";
  } else {
    errors.weight_max = "";
  }
  if (!input.height_min) {
    errors.height_min = "Escriba un numero de altura";
  } else if (!/\d{1,2}/gi.test(input.height_min)) {
    errors.height_min = "La altura debe tener un valor minimo";
  } else {
    errors.height_min = "";
  }
  if (!input.height_max) {
    errors.height_max = "Escribe la altura";
  } else if (!/\d{1,2}/gi.test(input.height_max)) {
    errors.height_max = "Tienes que colocar una altura maxima";
  } else {
    errors.height_max = "";
  }
  return errors;
}

export default function DogCreation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const temperament = useSelector((state) => state.temperaments).sort(
    function (a, b) {
      if (a < b) return -1;
      else return 1;
    }
  );
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: '',
    image:'',
    height_min: '',
    height_max: '',
    weight_min: '',
    weight_max: '',
    life_span: '',
    temperament: [],
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validateForm({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

 
  function handleSelect(e) {
    if(input.temperament.includes(e.target.value)){
      return null
    }else{
        setInput({
       ...input,
       temperament: [...input.temperament, e.target.value],
     });
    }
     
   
   }

  function handleDelete(el) {
    setInput({
      ...input,
      temperament: input.temperament.filter((temp) => temp !== el),
    });
  }
  const ErroresValidacion=()=>{
    
        if(!input.name) {alert("FALTA EL CAMPO DEL NOMBRE"); return false;}
        if(!input.weight_min) {alert("FALTA EL CAMPO DEL peso minimo"); return false;}
        return true;
      }

  function handleSubmit(e) {
    e.preventDefault();
    if(ErroresValidacion()){
      if (
        !errors.name  &&
        !errors.image &&
        !errors.weight_min &&
        !errors.height_min &&
        !errors.weight_max &&
        !errors.height_max
      ) {
        alert("Your dog has been created successfully");
        dispatch(postDog(input));
        setInput({
          name: '',
          image:'',
          height_min: '',
          weight_min: '',
          height_max: '',
          weight_max: '',
          life_span:  '',
          temperament: [],
        });
        navigate("/Home" )
      } else {
        return alert("Faltan campos por llenar.");
      }
    }
  }

  useEffect(() => {
    dispatch(getTemperamentsList());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="totoCreate">
      <div className="mainContainerCreation">
        <div>
          <h2>Crear nuevo perro</h2>
        </div>
        <div className="formContainer">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="Section">
              <label>Name:</label>
              <input
                type="text"
                value={input.name}
                name="name"
                placeholder="Escriba el nombre"
                onChange={(e) => handleChange(e)}
              />
              <div className="erroConte">
                <p className="ValidadorError">{errors.name}</p>
              </div>
            </div>
            <div className="Section">
              <label>Image URL:</label>
              <input
                type="url"
                value={input.image ? input.image:null}
                name="image"
                placeholder="http://myimageontheweb.com"
                onChange={(e) => handleChange(e)}
              />
              <div className="erroConte">
                <p className="ValidadorError">{errors.image}</p>
              </div>
            </div>
            <div className="Section">
              <h4>Heights</h4>
              <label>Min</label>
              <input
                type="number"
                value={input.height_min}
                name="height_min"
                placeholder="20"
                onChange={(e) => handleChange(e)}
              />
              <div className="erroConte">
                <p className="ValidadorError">{errors.height_min}</p>
              </div>
              <label>Max</label>
              <input
                type="number"
                value={input.height_max}
                name="height_max"
                placeholder="50"
                onChange={(e) => handleChange(e)}
              />
              <div className="erroConte">
                <p className="ValidadorError">{errors.height_max}</p>
              </div>
            </div>
            <div className="Section">
              <h4>Weights</h4>
              <label>Min</label>
              <input id="miCampo"
                type="number"
                value={input.weight_min}
                name="weight_min"
                placeholder="15"
                onChange={(e) => handleChange(e)}
              />
              <div className="erroConte"> 
                <p className="ValidadorError">{errors.weight_min}</p>
              </div>
              <label>Max</label>
              <input
                type="number"
                // value={input.weight_max}
                name="weight_max"
                placeholder="32"
                onChange={handleChange}
              />
              <div className="erroConte">
                <p className="ValidadorError">{errors.weight_max}</p>
              </div>
            </div>
            <div className="Section">
              <label>Life Span</label>
              <input
                type="text"
                value={input.life_span}
                name="life_span"
                placeholder="12 - 15 years"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="Section">
              <label>Temperaments</label>
              <select onChange={(e) => handleSelect(e)} className="styled_select">
                {temperament.map((temp) => {
                  return (
                    <option key={temp} name={temp}>
                      {temp}
                    </option>
                  );
                })}
              </select>
             
            </div>
            <div className="buttonSection">
              <Link to="/home">
                <button className="buttonCancel">Cancel</button>
              </Link>
              <button className="button" type="submit">
                Crear 
              </button>
            </div>
            
          </form>
          
        </div>
        
      </div>
      <div className="contenedorTempera">
                <h4>Temperamentos seleccionados son:</h4>
                <div className="toto">
                {input.temperament.map((el) => (
                  <div key={el} className="selectedItems">
                    <p>{el}</p>
                    <button onClick={() => handleDelete(el)}>x</button>
                  </div>
                ))}
                </div>
              </div>
      </div>
    </Fragment>
  );
}
