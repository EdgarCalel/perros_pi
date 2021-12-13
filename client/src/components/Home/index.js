import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDogs } from '../../actions/index'
import { Link } from 'react-router-dom'
import Card from '../Card/card'

export default function Home() {
    const dispatch = useDispatch()
    const alldogs = useSelector((state) => state.dogs)

    useEffect(() => {
    dispatch(getDogs())
    }, [])

const handleClick =(e)=>{
e.preventDefault();
dispatch(getDogs())

}
    return (
        <div>
        <Link to="/dogs">Crear Personaje</Link>
        <h1>aguante dogs</h1>
        <button  onClick={e=>handleClick(e)}>mostrar todo</button>
        <div>
            <select name="" id="">
                <option value="asc">ascendente</option>
                <option value="desc">descendente</option>
            </select>
            <select name="" id="">
                <option value="all">todos</option>
                <option value="muerte">muerte</option>
            </select>
            <select name="" id="">
                <option value="all">todos</option>
                <option value="created">creados</option>
                <option value="api">api</option>
            </select>
            {
                alldogs?.map(e=>{
                    return(
                <Card name={e.name}/>)
                })
            }
        </div>
<div>

</div>

        </div>
    )
}
