import React from "react";
import "./paginado.css"

const Paginado = ({ comicPerPage, allComics, paginado, currentPage}) => {
  const pageNumbers = []
  let Paginas = Math.ceil(allComics/comicPerPage)

  for (let i = 1; i <= Paginas; i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className="pagination">
      {
        currentPage - 1 > 0 ?(
        <button   onClick={()=> paginado (currentPage -1)}>Prev</button>

        ) :null
}        {pageNumbers?.map(number => (

<li key= {number} >
                    <button  onClick={() => paginado(number)} >
                        {number}
                    </button>
                    </li>

            ))}
        {
                currentPage < Paginas ?(
                    <button   onClick ={(pageNumbers)=> paginado (currentPage + 1 )}> Next</button>
                )
                : null
            }
      </ul>
    </nav>
  )
}


export default Paginado