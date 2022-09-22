import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPublishers, setPage } from '../../redux/actions/filters'
// import { getAllVolumes } from "../../redux/actions/comics";
import { filterPublishers, filterAD, filterForRelease, getAllVolumes } from "../../redux/actions/comics";

import "./Sidebar.css"


const Sidebars = ({setCurrentPage}) => {
  const dispatch = useDispatch();
  const [/*order*/, setOrder] = useState('')

  // const [currentPage, setCurrentPage] = useState(1) 
  // let characters = useSelector(state => state.filters.characters)
  let publishers = useSelector((state) => state.filters.publishers)
  const comics = useSelector((state) => state.comicsReducer.comics)

  useEffect(() => {
    dispatch(getPublishers())
  }, [dispatch])

  function handlePublishers(e) {
    e.preventDefault()
    if(e.target.value === 'null') return
    dispatch(filterPublishers(e.target.value, comics));
    dispatch(setPage(1))
  }

  function handleFilterAD(e) {
    e.preventDefault();
    if(e.target.value === 'null') return
    dispatch(filterAD(e.target.value, comics));
    setOrder(`Ordenado ${e.target.value}`);
    // setCurrentPage(1)
  }

  function resetComics(){
    dispatch(getAllVolumes())
  }

  // function handleFilterForRelease(e) {
  //   e.preventDefault();
  //   if(e.target.value === 'null') return
  //   dispatch(filterForRelease(e.target.value));
  //   // setCurrentPage(1);
  // }
  return (
    <div style={{ height: "100px" }}>
      <select className='w-25 m-2 p-2 border border-white rounded' onChange={e => handlePublishers(e)}>
        <option value='null' disabled selected >Filter by Publisher...</option>
        {publishers.map((publisher, i) => (
            <option key={i} value={publisher}>{publisher}</option>
          ))}
      </select>

      <select className='w-25 m-2 p-2 border border-white rounded' onChange={(e)=> handleFilterAD(e)}>
        <option value='null' disabled selected>Sort by name...</option>
        <option value="Asc">A - Z</option>
        <option value="Desc">Z - A</option>
      </select>

      <button className='btn btn-light' onClick={resetComics}>
          Reset Filters
      </button>
    </div>
  );
}

export default Sidebars

// {/* <select onChange={(e) => handleFilterForRelease(e)}>
//   <option value="null">FILTER FOR RELEASE</option>
//   <option value="All">All</option>
//   <option value="post 2000`s">Release next 2000</option>
//   <option value="1990`s"> Release 90`s</option>
//   <option value="1980`s"> Release 80`s</option>
//   <option value="1970`s"> Release 70`s</option>
//   <option value="1960`s"> Release 60`s</option>
//   <option value="1950`s"> Release 50`s</option>
//   <option value="1940`s"> Release 40`s</option>
//   <option value="1930`s"> Release 30`s</option>
// </select> */}