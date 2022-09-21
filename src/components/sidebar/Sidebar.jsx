import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPublishers, FilterAD, FilterForRelease } from '../../redux/actions/filters'
import { getAllVolumes } from "../../redux/actions/comics";
import { filterPublishers } from "../../redux/actions/comics";

import "./Sidebar.css"


const Sidebars = () => {
  const dispatch = useDispatch();
  // let characters = useSelector(state => state.filters.characters)
  let publishers = useSelector((state) => state.filters.publishers)

  useEffect(() => {
    dispatch(getPublishers())
  }, [dispatch])

  // const [ordenPopulation, setOrdenRelease] = useState("")


  function handleGenre(e) {
    dispatch(filterPublishers(e.target.value));
  }

  function handleFilterAD(e) {
    // setOrdenAD(`ordenado A_D ${e.target.value}`);
    dispatch(FilterAD(e.target.value));
  }

  function handleFilterForRelease(e) {
    // setOrdenRelease(`orden Population ${e.target.value}`);
    dispatch(FilterForRelease(e.target.value));

  }
  return (
    <div className="sidebar">
      <h4>Filters:</h4>
      <div className="contSelects">
        <select onChange={(e) => handleGenre(e)}>
          <option value="All">All</option>
          {
            publishers.map((publisher, i) => (
              <option key={`${publisher}-${i}`} value={publisher}>{publisher}</option>
            ))
          }
        </select>



        <select onChange={(e) => handleFilterAD(e)}>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>


        <select onChange={(e) => handleFilterForRelease(e)}>
          FILTER_A_D
          <option value="release next 50`s">Release next 50`s</option>
          <option value="release 40`s"> Release 40`s</option>
        </select>
      </div>
    </div>
  );
}

export default Sidebars

