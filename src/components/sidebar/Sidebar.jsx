import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters, getPublishers, getConcepts,clear,FilterAD, FilterForEpisodes,filterPublishers,FilterForRelease } from '../../redux/actions/index.js'
import "./Sidebar.css"


const Sidebars = () => {
  const dispatch = useDispatch();
  let characters = useSelector(state => state.characters)
 
  let concepts = useSelector(state => state.concepts)
 let [ordenAD, setOrdenAD] = useState("");
 const [ordenEpisodes, setOrdenEpisodes] = useState("");
 const [ordenPopulation,setOrdenRelease] = useState("")
 

 let filter = useSelector((state) => state.publishers)
 


 
 
 function handleGenre(e) {
     dispatch(getPublishers())

     dispatch(filterPublishers(e.target.value));
   }
   
   useEffect(() => {
     dispatch(getPublishers());
   }, [dispatch]);


 



function handleFilterAD(e) {
  dispatch(FilterAD(e.target.value));
  setOrdenAD(`ordenado A_D ${e.target.value}`);

}

function handleFilterForRelease(e){
  dispatch(FilterForRelease(e.target.value));
  setOrdenRelease(`orden Population ${e.target.value}`);

}
return (
  <div style={{ height: "100px" }}>
    <select onChange={(e) => handleGenre(e)}>
         <option value="DC Comics"> for Publisher </option>

     
         {
           filter.map(g => {
               return<option key={g.id}>{g.name}</option>;
            })}
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
);
}

export default Sidebars

