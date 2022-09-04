import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import NavBar from '../navBar/Navbar'
import ShoppingBar from '../shopping-bar/ShoppingBar';

import "./cardDetail.css"


const CardDetail = () => {
  const theme_params = useSelector((state) => state.theme_params);
  const location = useLocation()
  const { data } = location.state
  const { image, name, deck, description, start_year, price } = data
  // console.log(data);

  useEffect(() => {
    // format and add description
    const desc_content = document.getElementById("desc")
    const removeHref = async (text) => {
      const pattern = /href="(.*?)"/g
      return await text.replaceAll(pattern, 'href="javascript:()=> false;" disabled="disabled"');
    }

    removeHref(description).then(result => {
      desc_content.innerHTML = result
    })

    // set theme
    const description_bkg = document.getElementById("description-detail");
    const theme = theme_params.theme === "light" ? "description-detail-light" : "description-detail-dark"
    description_bkg.className = theme
  })

  return (
    <div className='container-detail' >
      <NavBar searchbar={false} />
      <div className='card-detail d-flex'>
        <div className='img-detail'>
          <img src={image} alt="" />
        </div>
        <div className='info-detail'>
          <div id='description-detail'>
            <p className='description-title'>{name} ({start_year})</p>
            <p className='description-subtitle'>{deck}</p>
            <p id='desc'></p>
          </div>
          <div className='shopping-detail'>
            <ShoppingBar price={price} />
          </div>
        </div>
      </div>
    </div >
  );
}

export default CardDetail;

