import React, { useEffect, useState } from "react";
import "./Sidebar.css"
import { characters } from './mockInfoChars.js'


const Sidebar = () => {
  const [char, SetChar] = useState([])

  useEffect(() => {
    const listChar = characters.results.map(char =>
      char.name
    ).sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    })
    SetChar(() => listChar)
  }, [])

  return (
    <div className="containerSide">
      {/* <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom">
        <a className="navbar-brand ml-2 font-weight-bold">Products</a>
      </nav > */}
      <div id="mobile-filter">
        <div>
          <h6>Characters</h6>
          <select className="select">
            <option value="">All characters</option>
            {
              char?.map(name => (
                <option key={name} value={name}>{name}</option>
              ))
            }
          </select>
        </div>
        <div>
          <h6>Characters</h6>
          <select className="select">
            <option value="">All characters</option>
            {
              char?.map(name => (
                <option key={name} value={name}>{name}</option>
              ))
            }
          </select>
        </div>
        <div>
          <h6>Characters</h6>
          <select className="select">
            <option value="">All characters</option>
            {
              char?.map(name => (
                <option key={name} value={name}>{name}</option>
              ))
            }
          </select>
        </div>
      </div>
      <section id="sidebar">
        <div>
          <h6 className="publisher">Characters</h6>
          <select className="select">
            <option value="">All characters</option>
            {
              char?.map(name => (
                <option key={name} value={name}>{name}</option>
              ))
            }
          </select>
        </div>
        <div>
          <h6 className="publisher">Publishers</h6>
          <select className="select">
            <option value="">All characters</option>
            {
              char?.map(name => (
                <option key={name} value={name}>{name}</option>
              ))
            }
          </select>
        </div>
        <div>
          <h6 className="publisher">Concepts</h6>
          <select className="select extra">
            <option value="">All characters</option>
            {
              char?.map(name => (
                <option key={name} value={name}>{name}</option>
              ))
            }
          </select>
        </div>
      </section>
    </div>
  )
}

export default Sidebar

