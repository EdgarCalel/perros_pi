import React from 'react';
import './inicio.css'
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
  
    <div className="fondo">
  <Link to="/Home">Iniciar</Link>
  <img src="https://i.pinimg.com/originals/5d/94/54/5d9454bff0c9c75b4e85a0924ed7c0eb.gif" alt="" />
    </div>
  
  );
}
