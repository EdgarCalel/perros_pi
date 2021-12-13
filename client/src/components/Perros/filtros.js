import React from 'react'
import './perros.css'

export default function filtros() {
    return (
        <div className='ContenidoPrincipal '>
            <div className='Ordenamiento cont'>
                <select name="" id="">Opciones
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                    </select>
            </div>
            <div className='TemperamentosFiltro cont'>
                <select name="" id="">Temperamentos
                    <option value="asc">option 1</option>
                    <option value="desc">option</option>
                    <option value="desc">option</option>
                    </select>
            </div>
            <div className='CreadoEn cont'>
                <select name="" id="">Fuente de perro
                    <option value="forApi">Por api</option>
                    <option value="forBd">Creados</option>
                    </select>
            </div>
        </div>
        
    )
}
