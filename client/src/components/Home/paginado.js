import React from 'react'
import './home.css'

export default function Paginado({DogsForPage, allDogs, paginado}) {
    const NumberPage=[];
    for (let d = 0; d <= Math.ceil(allDogs/DogsForPage); d++) {
     NumberPage.push(d+1)
        
    }return(
        <nav className='paginado'>
            <ul className='numero'  >
            {NumberPage?.map(e=>(
                <li key={e}>
                    <a onClick={()=>paginado(e)}>{e}</a>
                </li>
            ))}
            </ul>
        </nav>
    )
}
