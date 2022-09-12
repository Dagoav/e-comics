import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllVolumes,setPage,clear} from "../../redux/actions";
import ComicCard from "../../components/card/Card";
import Paginado from "../paginado/paginado";

// Aqui va el ordenamiento, filtrado y paginado
// loading

const CardsGallery = () => {
    const dispatch = useDispatch();
    let currentPage = useSelector(state =>state.currentPage);
    // eslint-disable-next-line no-unused-vars
    let [comicPerPage] = useState(12)
    let allComics = useSelector((state) => state.comics);
    
        
    
   


    let indexOfLastComic = currentPage * comicPerPage;
    let indexOfFirstComic = indexOfLastComic - comicPerPage;
    let currentComic = allComics.slice(indexOfFirstComic, indexOfLastComic)

    const paginado = (pageNumber) => {
       
        dispatch(setPage(pageNumber))
        
    }
   

    return (
        <>
            <Paginado
                comicPerPage={comicPerPage}
                allComics={allComics.length}
                paginado={paginado}
                currentPage={currentPage}
            />
            {
                currentComic.length === 0 ? <p className="notFound">No Found Anything</p> :
                    currentComic.map(c => (
                        <ComicCard key={c.id} data={c} />
                    ))
            }
        </>
    )
}

export default CardsGallery;