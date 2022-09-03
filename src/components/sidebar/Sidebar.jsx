import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters, getPublishers, getConcepts } from '../../redux/actions/index.js'
import "./Sidebar.css"


const Sidebar = () => {
  const dispatch = useDispatch();
  let characters = useSelector(state => state.characters)
  let publishers = useSelector(state => state.publishers)
  let concepts = useSelector(state => state.concepts)

  useEffect(() => {
    dispatch(getCharacters())
    dispatch(getPublishers())
    dispatch(getConcepts())
  }, [dispatch])

  return (
    <div className="containerSide">
      <section id="sidebar">
        <div>
          <h6 className="publisher">Characters</h6>
          <select className="select">
            <option value="All">All characters</option>
            {
              characters?.map(char => (
                <option key={char.name} value={char.name}>{char.name}</option>
              ))
            }
          </select>
        </div>
        <div>
          <h6 className="publisher">Publishers</h6>
          <select className="select">
            <option value="All">All Publishers</option>
            {
              publishers?.map(char => (
                <option key={char.name} value={char.name}>{char.name}</option>
              ))
            }
          </select>
        </div>
        <div>
          <h6 className="publisher">Concepts</h6>
          <select className="select extra">
            <option value="All">All characters</option>
            {
              concepts?.map(char => (
                <option key={char.name} value={char.name}>{char.name}</option>
              ))
            }
          </select>
        </div>
      </section>
    </div>
  )
}

export default Sidebar

