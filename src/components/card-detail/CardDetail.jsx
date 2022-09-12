import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { volumeDetail,clear } from "../../redux/actions";
import { useParams,useNavigate } from "react-router-dom";
import NavBar from '../navBar/Navbar'
import ShoppingBar from '../shopping-bar/ShoppingBar';

import "./cardDetail.css"



const CardDetail = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const theme_params = useSelector((state) => state.theme_params);
  const comic= useSelector((state) => state.comic);
  const { id } = useParams()
  const { image, name, episodes, description, start_year, price } = comic

  console.log(comic)

  useEffect(() => {
    dispatch(clear())
    dispatch(volumeDetail(id))
  }, [dispatch, id])


  useEffect(() => {
    if (Object.entries(comic).length > 0) {
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
    }
  },)


  if (Object.entries(comic).length === 0) return <p>Loading...</p>
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
            <p className='description-subtitle'>{episodes}</p>
           
          </div>
          <div className='shopping-detail'>
            <ShoppingBar comic={comic} price={price} />
          </div>
        </div>
      </div>
      <button onClick= {()=>navigate(-1)} className={"game"}>Back</button>
    </div >
  );
}

export default CardDetail;

