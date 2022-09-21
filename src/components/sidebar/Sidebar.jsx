import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPublishers } from '../../redux/actions/filters'
// import { getAllVolumes } from "../../redux/actions/comics";
import { filterPublishers, filterAD, filterForRelease } from "../../redux/actions/comics";

import "./Sidebar.css"


const Sidebars = () => {
  const dispatch = useDispatch();
  const [/*order*/, setOrder] = useState('')

  // const [currentPage, setCurrentPage] = useState(1) 
  // let characters = useSelector(state => state.filters.characters)
  let publishers = useSelector((state) => state.filters.publishers)

  useEffect(() => {
    dispatch(getPublishers())
  }, [dispatch])

  function handlePublishers(e) {
    e.preventDefault()
    if(e.target.value === 'null') return
    dispatch(filterPublishers(e.target.value));
    // setCurrentPage(1)
  }

  function handleFilterAD(e) {
    e.preventDefault();
    if(e.target.value === 'null') return
    dispatch(filterAD(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
    // setCurrentPage(1)
  }

  function handleFilterForRelease(e) {
    e.preventDefault();
    if(e.target.value === 'null') return
    dispatch(filterForRelease(e.target.value));
    // setCurrentPage(1);

  }
  return (
    <div style={{ height: "100px" }}>
      <select onChange={e => handlePublishers(e)}>
      <option value='null' >Publishers</option>
        {publishers.map((publisher, i) => (
            <option key={i} value={publisher}>{publisher}</option>
          ))}
      </select>
      <select onChange={(e)=> handleFilterAD(e)}>
        <option value='null'>ORDER</option>
        <option value="Asc">ASC</option>
        <option value="Desc">DESC</option>
      </select>


      <select onChange={(e) => handleFilterForRelease(e)}>
        <option value="null">FILTER FOR RELEASE</option>
        <option value="All">All</option>
        <option value="post 2000`s">Release next 2000</option>
        <option value="1990`s"> Release 90`s</option>
        <option value="1980`s"> Release 80`s</option>
        <option value="1970`s"> Release 70`s</option>
        <option value="1960`s"> Release 60`s</option>
        <option value="1950`s"> Release 50`s</option>
        <option value="1940`s"> Release 40`s</option>
        <option value="1930`s"> Release 30`s</option>
      </select>
    </div>
  );
}

export default Sidebars

