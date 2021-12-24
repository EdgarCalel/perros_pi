import './style.css'

export default function Pagination({dogsPerPage, allDogs, pagination, currentPage}) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++) {
        pageNumbers.push(i)
    }
    return(
        <nav>
            <ul className="crumbs">
                {
                    pageNumbers&&
                    pageNumbers.map(number => (
                        <li className="number" key={number}>
                            <div  onClick={()=> pagination(number)}>{number}</div>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
};
