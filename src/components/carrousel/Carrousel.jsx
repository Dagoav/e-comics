import React from "react";
import "./Carrousel.css"
import hero1 from "../../assets/intro1.jpg"
import hero2 from "../../assets/doomsday.jpg"

const Carrousel = () => {

  return (
    <div className="container-carrousel">
      <div id="carouselWhite" class="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators mx-auto">
          <button type="button" data-bs-target="#carouselWhite" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselWhite" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselWhite" data-bs-slide-to="2" aria-label="Slide 3"></button>

        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={hero1} className="d-block" width={850} height={350} alt="..." />
            {/* <div className="carousel-caption d-none d-md-block"> */}
            {/* <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p> */}
            {/* </div> */}
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={hero2} className="d-block" width={850} height={350} alt="..." />
            {/* <div className="carousel-caption d-none d-md-block"> */}
            {/* <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p> */}
            {/* </div> */}
          </div>
          <div className="carousel-item">
            <img src={hero2} className="d-block" width={850} height={350} alt="..." />
            {/* <div className="carousel-caption d-none d-md-block"> */}
            {/* <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselWhite" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselWhite" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carrousel