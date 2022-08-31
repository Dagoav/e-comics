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
    console.log("ORDENADO : " + listChar)
    SetChar(() => listChar)
  }, [])

  return (
    <div className="containerSide">
      <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom">
        <a className="navbar-brand ml-2 font-weight-bold" href="#">FORCEPAUSED</a>
      </nav >
      <div id="mobile-filter">
        <div>
          <h6 className="p-1 border-bottom">Characters</h6>
          <select>
            <option value="">All characters</option>
            {
              char?.map(name => (
                <option key={name} value={name}>{name}</option>
              ))
            }
          </select>
        </div>
        <div>
          <h6 className="p-1 border-bottom">Filter By</h6>
          <p className="mb-2">Color</p>
          <ul className="list-group">
            <li className="list-group-item list-group-item-action mb-2 rounded"><a href="#">
              <span className="fa fa-circle pr-1" id="red"></span>Red
            </a></li>
            <li className="list-group-item list-group-item-action mb-2 rounded"><a href="#">
              <span className="fa fa-circle pr-1" id="teal"></span>Teal
            </a></li>
            <li className="list-group-item list-group-item-action mb-2 rounded"><a href="#">
              <span className="fa fa-circle pr-1" id="blue"></span>Blue
            </a></li>
          </ul>
        </div>
        <div>
          <h6>Type</h6>
          <form className="ml-md-2">
            <div className="form-inline border rounded p-sm-2 my-2">
              <input type="radio" name="type" id="boring" />
              <label for="boring" className="pl-1 pt-sm-0 pt-1">Boring</label>
            </div>
            <div className="form-inline border rounded p-sm-2 my-2">
              <input type="radio" name="type" id="ugly" />
              <label for="ugly" className="pl-1 pt-sm-0 pt-1">Ugly</label>
            </div>
            <div className="form-inline border rounded p-md-2 p-sm-1">
              <input type="radio" name="type" id="notugly" />
              <label for="notugly" className="pl-1 pt-sm-0 pt-1">Not Ugly</label>
            </div>
          </form>
        </div>
      </div>
      <section id="sidebar">
        <div>
          <h6 className="p-1 border-bottom">Characters</h6>
          <select>
            <option value="">All characters</option>
            {
              char?.map(name => (
                <option key={name} value={name}>{name}</option>
              ))
            }
          </select>
        </div>
        <div>
          <h6 className="p-1 border-bottom">Filter By</h6>
          <p className="mb-2">Publisher</p>
          <ul className="list-group">
            <li className="list-group-item list-group-item-action mb-2 rounded"><a href="#">
              <span className="fa fa-circle pr-1" id="red"></span>Marvel
            </a></li>
            <li className="list-group-item list-group-item-action mb-2 rounded"><a href="#">
              <span className="fa fa-circle pr-1" id="teal"></span>DC Comics
            </a></li>
            <li className="list-group-item list-group-item-action mb-2 rounded"><a href="#">
              <span className="fa fa-circle pr-1" id="blue"></span>Comic Vine
            </a></li>
          </ul>
        </div>
        <div>
          <h6>Type</h6>
          <form className="ml-md-2">
            <div className="form-inline border rounded p-sm-2 my-2">
              <input type="radio" name="type" id="boring" />
              <label for="boring" className="pl-1 pt-sm-0 pt-1">Boring</label>
            </div>
            <div className="form-inline border rounded p-sm-2 my-2">
              <input type="radio" name="type" id="ugly" />
              <label for="ugly" className="pl-1 pt-sm-0 pt-1">Ugly</label>
            </div>
            <div className="form-inline border rounded p-md-2 p-sm-1">
              <input type="radio" name="type" id="notugly" />
              <label for="notugly" className="pl-1 pt-sm-0 pt-1">Not Ugly</label>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Sidebar

