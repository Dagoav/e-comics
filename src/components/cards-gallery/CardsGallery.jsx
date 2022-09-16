import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllVolumes, reset_comicState } from "../../redux/actions/comics";
import { setPage } from "../../redux/actions/filters";

import ComicCard from "../../components/card/Card";
import Paginado from "../paginado/paginado";
import Loading from "../loading/Loading";

const CardsGallery = () => {
  const dispatch = useDispatch();
  let currentPage = useSelector(state => state.filters.currentPage);
  // eslint-disable-next-line no-unused-vars
  let [comicPerPage, setComicPerPage] = useState(12)
  let comics = useSelector((state) => state.comicsReducer.comics);
  let loading_state = useSelector((state) => state.comicsReducer.loading);
  let indexOfLastComic = currentPage * comicPerPage;
  let indexOfFirstComic = indexOfLastComic - comicPerPage;
  let currentComic = comics.slice(indexOfFirstComic, indexOfLastComic);
  const isFilter = useSelector(state => state.filters.isFilter)

  useEffect(() => {
    dispatch(reset_comicState())
    if (isFilter) {
      dispatch(getAllVolumes())
    }

  }, [dispatch, isFilter])


  const paginado = pageNumber => {
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
      <Loading data={comics} state={loading_state} />
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