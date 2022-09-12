import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters, getPublishers, getConcepts,filterComicForPublishers,clear,filterForAD, FilterForEpisodes, FilterForGender } from '../redux/actions/index.js'






const Filters = () => {
    const dispatch = useDispatch();
    let characters = useSelector(state => state.characters)
    let publishers = useSelector(state => state.publishers)
    let concepts = useSelector(state => state.concepts)
   let [ordenAD, setOrdenAD] = useState("");
   const [ordenEpisodes, setOrdenEpisodes] = useState("");
   const [garden, setgarden] = useState("");







function  handleFilterForAD(e) {
    dispatch(filterForAD(e.target.value));
    setOrdenAD(`ordenado A_D ${e.target.value}`);
   
  }
  function handleFilterForEpisodes(e) {
    dispatch(FilterForEpisodes(e.target.value));
    setOrdenEpisodes(`ordenado Rating ${e.target.value}`);
     }


     function handleFilterGender(e) {
        dispatch(FilterForGender(e.target.value));
    setgarden(`ordenado Rating ${e.target.value}`);

        
       
        
      }

  return (
    <div className="containerSide">
     
      
       
              
       <select onChange={(e) => handleFilterForAD(e)}>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>

      <select onChange={(e) => handleFilterForEpisodes(e)}>
        <option value="episodesdown">Episodes Down</option>
        <option value="episodesup">Episodes Up</option>
      </select>

      <select onChange={(e) => handleFilterGender(e)}>
        <option value="man">Man</option>
        <option value="woman">woman</option>
      </select>
        
       
    </div>
  );
}

export default Filters

