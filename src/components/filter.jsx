import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  getPublishers,filterPublishers} from '.././redux/actions/index.js'



const PublishersFilter = () => {
  const dispatch = useDispatch();

  let filter = useSelector((state) => state.comicReducer.publishers)
  

 
  
  
  function handleGenre(e) {
      dispatch(getPublishers())

      dispatch(filterPublishers(e.target.value));
    }
    
    useEffect(() => {
      dispatch(getPublishers());
    }, [dispatch]);



return (
  <div style={{ height: "100px" }}>
    <select onChange={(e) => handleGenre(e)}>
         <option value="All"> All </option>

     
         {
           filter.map(g => {
               return<option key={g.id}>{g.name}</option>;
            })}
    </select>

  
  </div>
);
}

export default PublishersFilter