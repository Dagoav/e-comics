import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { volumeDetail } from "../../redux/actions";
import { useParams,useNavigate } from "react-router-dom";
import NavBar from '../navBar/Navbar'
import Issues from '../issues/Issues';


import "./cardDetail.css"


const CardDetail = () => {

  const dispatch = useDispatch();
  const theme_params = useSelector((state) => state.theme_params);
  const { theme } = theme_params;
  const comic = useSelector((state) => state.comic);
  const { id } = useParams()
  const { image, name, deck, description, start_year } = comic

  useEffect(() => {
  
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
      description_bkg.className = `description-detail-${theme}`
    }
  },)


  if (Object.entries(comic).length === 0) return <p>Loading...</p>
  return (
    <>
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
          </div>
        </div>
        <div className='info-issues mt-5'>
          <Issues issue_number={id}></Issues>
        </div>
      </div >
    </>
  );
}

export default CardDetail;

