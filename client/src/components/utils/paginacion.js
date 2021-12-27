import './style.css'

export default function Pagination({dogsPerPage, allDogs, pagination, currentPage}) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++) {
        pageNumbers.push(i)
    }
    return(
        <nav className='totalConsumo'>
            <ul className="ulLista">
                { pageNumbers?.map(number => (
                        <li className="Numeros" key={number} onClick={()=> pagination(number)}>
                            {number}
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
};
