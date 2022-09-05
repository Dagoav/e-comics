import React from "react";
import "./paginado.css"

const Paginado = ({ comicPerPage, allComics, paginado, page }) => {
  const pageNumbers = []

  for (let i = 0; i < Math.ceil(allComics / comicPerPage); i++) {
    pageNumbers.push(i + 1)
  }

  return (
    <nav>
      <ul className="pagination">
        {
          pageNumbers && pageNumbers.map(number => (
            <li key={number} style={{ listStyle: 'none' }}>
              <button className="buttons" style={page === number ? { color: "white" } : {}} onClick={() => paginado(number)}>{number}</button>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}


export default Paginado