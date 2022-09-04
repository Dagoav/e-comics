import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllVolumes } from "../../redux/actions";
import ComicCard from "../../components/card/Card";

// Aqui va el ordenamiento, filtrado y paginado
// loading

const CardsGallery = () => {
    const dispatch = useDispatch();
    let comics = useSelector((state) => state.comics);

    useEffect(() => {
        dispatch(getAllVolumes())
    }, [dispatch])

    return (
        <>
            {
                comics.length === 0 ? <p className="notFound">No hay resultados</p> :
                    comics.map(c => (
                        <ComicCard key={c.id} data={c} />
                    ))
            }
        </>
    )
}

export default CardsGallery;