import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllVolumes, searchComic } from "../../redux/actions";

import "./Searchbar.css"

const Searchbar = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [change, setChange] = useState(false);

  const handleChange = (e) => {
    setInputValue(() => e.target.value);
    setChange(true);
  };

  useEffect(() => {
    if (inputValue !== "") {
      dispatch(searchComic(inputValue));
    }
    if (inputValue === "" && change) {
      dispatch(getAllVolumes());
    }
  }, [inputValue, change, dispatch]);



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