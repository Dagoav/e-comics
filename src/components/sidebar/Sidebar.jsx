import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters, getPublishers, getConcepts,clear,filterForAD, FilterForEpisodes } from '../../redux/actions/index.js'
import "./Sidebar.css"


const Sidebar = () => {
  const dispatch = useDispatch();
  let characters = useSelector(state => state.characters)
  let publishers = useSelector(state => state.publishers)
  let concepts = useSelector(state => state.concepts)
 let [ordenAD, setOrdenAD] = useState("");
 const [ordenEpisodes, setOrdenEpisodes] = useState("");

  function handlePublisher(e){
   
    dispatch(getPublishers());
   
  }

  useEffect(() => { 
    dispatch(getCharacters())
    dispatch(getPublishers());
   
    dispatch(getConcepts())
  }, [dispatch])

  // function  handleFilterForAD(e) {
  //   dispatch(filterForAD(e.target.value));
  //   setOrdenAD(`ordenado A_D ${e.target.value}`);
   
  // }
  // function handleFilterForEpisodes(e) {
  //   dispatch(FilterForEpisodes(e.target.value));
  //   setOrdenEpisodes(`ordenado Rating ${e.target.value}`);
    
  
  // }

  return (
    <div className="containerSide">
     
      
          <h6 className="publisher">Publishers</h6>
          <select className="select"
          onChange={(e) => handlePublisher(e)}>
      <option value="All">All Publishers</option>
            {
              publishers?.map(char => (
                
              <option key={char.name} value={char.name}>{char.name}</option>

              ))
            }
              </select>
       {/* <select onChange={(e) => handleFilterForAD(e)}>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>

      <select onChange={(e) => handleFilterForEpisodes(e)}>
        <option value="episodesdown">Rating Down</option>
        <option value="episodesup">Rating Up</option>
      </select> */}
        
       
    </div>
  );
}

export default Sidebar

