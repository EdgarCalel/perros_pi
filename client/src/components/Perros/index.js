import React,{ useState, useEffect } from 'react'
import axios from 'axios'


function Perros() {
    const [Perfil, setPerfil] = useState([]);
    useEffect(() => {
Datainfo();

    });

    const Datainfo = async ()=>{
const dataApi = await axios('https://api.thedogapi.com/v1/breeds')
const todo = await dataApi.data.map(el =>(el.name))
setPerfil(todo)
    }
    return (
        <>
        <div>
          {Perfil}
          <h1>mostralo</h1>
        </div>
        </>
    )
}
export default  Perros;