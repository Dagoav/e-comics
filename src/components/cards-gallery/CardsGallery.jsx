import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllVolumes } from "../../redux/actions";
import ComicCard from "../../components/card/Card";
import Paginado from "../paginado/paginado";

// Aqui va el ordenamiento, filtrado y paginado
// loading

const CardsGallery = () => {
    const dispatch = useDispatch();
    let [currentPage, setCurrentPage] = useState(1);
    // eslint-disable-next-line no-unused-vars
    let [comicPerPage, setComicPerPage] = useState(12)
    let comics = useSelector((state) => state.comics);

    useEffect(() => {
        dispatch(getAllVolumes())
    }, [dispatch])


    let indexOfLastComic = currentPage * comicPerPage;
    let indexOfFirstComic = indexOfLastComic - comicPerPage;
    let currentComic = comics.slice(indexOfFirstComic, indexOfLastComic)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        setCurrentPage(1);
    }, [comics.length, setCurrentPage]);


    return (
        <>
            <Paginado
                comicPerPage={comicPerPage}
                allComics={comics.length}
                paginado={paginado}
                page={currentPage}
            />
            {
                currentComic.length === 0 ? <p className="notFound">No hay resultados</p> :
                    currentComic.map(c => (
                        <ComicCard key={c.id} data={c} />
                    ))
            }
        </>
    )
}

export default CardsGallery;