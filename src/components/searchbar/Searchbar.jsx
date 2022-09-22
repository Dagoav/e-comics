import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllVolumes, searchComic } from "../../redux/actions/comics";
import { setLoading } from "../../redux/actions/setParams";

import "./Searchbar.css"

const Searchbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const rol = JSON.parse(localStorage.getItem("ROL"))

  const handleChange = (e) => {
    setInputValue(() => e.target.value);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" || e.code === "Enter") {
      handleSearch()
    }
  };

  // search
  const handleSearch = () => {
    if (inputValue.trim() === "") {
      dispatch(getAllVolumes());

    }
    else {
      dispatch(searchComic(inputValue));
      dispatch(setLoading(true));
      // se añade para que cuando se busque desde el panel de usuario se redi
      navigate(rol ? '/user/home' : '/home')
    }
  };

  const clearText = () => {
    setInputValue(() => "");
    dispatch(getAllVolumes());
  };

  return (
    <div className="search">
      <div className="boxIcon">
        <span className="material-symbols-outlined icon-search" onClick={handleSearch}>find_in_page</span>
      </div>
      <input
        placeholder="Search comic..."
        type="text"
        id="inputSearch"
        onChange={handleChange}
        onKeyDown={handleKey}
        value={inputValue}
        autoComplete="off"
      />
      {
        inputValue !== "" && (
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