import React from "react";
// import Carousel from 'react-bootstrap/Carousel';

const Item = ({ listImages }) => {
    return (
        <div className="images-box">
            {
                listImages.map((hero, i) => (
                    <img
                        key={`hero-${i}`}
                        className="d-flex justify-content-start align-items-center"
                        src={hero}
                        alt="First slide"
                    />
                ))
            }
            {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
        </div>
    )
}

export default Item;