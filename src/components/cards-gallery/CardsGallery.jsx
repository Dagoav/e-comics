import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllVolumes,setPage,clear, reset_comicState} from "../../redux/actions";
import ComicCard from "../../components/card/Card";
import Paginado from "../paginado/paginado";
import Loading from "../loading/Loading";


// Aqui va el ordenamiento, filtrado y paginado
// loading
const CardsGallery = () => {
  const dispatch = useDispatch();
  let currentPage = useSelector(state =>state.currentPage);
  // eslint-disable-next-line no-unused-vars
  let [comicPerPage] = useState(12)
  let comics = useSelector((state) => state.comics);
  let loading_state = useSelector((state) => state.loading);
  let indexOfLastComic = currentPage * comicPerPage;
  let indexOfFirstComic = indexOfLastComic - comicPerPage;
  let currentComic = comics.slice(indexOfFirstComic, indexOfLastComic);
  const isFilter = useSelector(state => state.isFilter)


  useEffect(() => {
    if(isFilter){
  
     dispatch(getAllVolumes())
    }
     
    
    
}, [dispatch])


  const paginado = pageNumber =>{ 

    dispatch(setPage(pageNumber))
    }
  



  return (
    <>
      <Paginado
        comicPerPage={comicPerPage}
        allComics={comics.length}
        paginado={paginado}
        currentPage={currentPage}
      />
      <Loading data={comics} />
      {
        comics.length > 0 && !loading_state &&
        currentComic.map(c => (
          <ComicCard key={c.id} data={c} />
        ))
      }

    </>
  )
}

export default CardsGallery;