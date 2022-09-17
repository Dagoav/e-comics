import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

import "./Card.css"

const ComicCard = ({ data }) => {
  const { image, id } = data
  
  const moveLeft = (e) => {
    let current_x = e.target.style["transform"]
    
    if (!current_x || current_x === 'translateX(0px)') {
      e.target.style.transform = 'translateX(-90px)';
    } else {
      e.target.style.transform = 'translateX(0px)';
    }
  }
  
  const rol = JSON.parse(localStorage.getItem("ROL"))
  return (
    <>
      <Card className="m-3 card-style" style={{ width: '16rem', height: '22rem' }}>
     

      
        <Card.Img className="img-card" variant="top" src={image} onClick={(e) => moveLeft(e)} />
        {/* <Link to={`/cardDetail/${id}`}> */}
        <Link to={rol === "ADMIN"? `/admin/cardDetail/${id}`: rol=== "USER" ? `/user/cardDetail/${id}`: `/cardDetail/${id}`}>
          <div className="content"></div>
        </Link>
      </Card >
    </>
  );
}

export default ComicCard;
