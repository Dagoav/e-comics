import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchComic, getAllVolumes } from "../../redux/actions";

// import Button from 'react-bootstrap/Button'
import "./Searchbar.css"

const Searchbar = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(() => e.target.value);
  };


  useEffect(() => {
    if (inputValue !== "") {
      dispatch(searchComic(inputValue));
    } else {
      dispatch(getAllVolumes())
    }
  }, [inputValue]);

  const clearText = () => {
    setInputValue(() => "");
  };


  return (
    <div className="search">
      <div className="boxIcon">
        <span className="material-symbols-outlined icon-search">find_in_page</span>
      </div>
      <input
        placeholder="Search comic..."
        type="text"
        id="inputSearch"
        onChange={handleChange}
        value={inputValue}
        autoComplete="off"
      />
      {inputValue !== "" && (


        <span
          className="material-symbols-outlined icon-close"
          onClick={clearText}
        >

          close
        </span>
      )
      }

    </div >
  )
}

export default Searchbar;