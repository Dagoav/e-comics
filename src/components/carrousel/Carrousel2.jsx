import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import hero1 from "../../assets/intro1.jpg"
import hero2 from "../../assets/doomsday.jpg"
import hero3 from "../../assets/comic_hand.jpg"
import "./Carrousel.css"

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);
    const listImages = [hero1, hero2, hero3]
    let x = 800
    let y = 350

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className="images-box">
                    {
                        listImages.map((hero, i) => (
                            <img
                                key={`hero-${i}`}
                                className="d-block w-100"
                                src={hero1}
                                alt="First slide"
                                width={x}
                                height={y}
                            />
                        ))
                    }

                </div>
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <div className="images-box">
                    <img
                        className="d-block w-100"
                        src={hero3}
                        alt="First slide"
                        width={x}
                        height={y}
                    />
                    <img
                        className="d-block w-100"
                        src={hero2}
                        alt="First slide"
                        width={x}
                        height={y}
                    />
                    <img
                        className="d-block w-100"
                        src={hero1}
                        alt="First slide"
                        width={x}
                        height={y}
                    />
                </div>

                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <div className="images-box">
                    <img
                        className="d-block w-100"
                        src={hero1}
                        alt="First slide"
                        width={x}
                        height={y}
                    />
                    <img
                        className="d-block w-100"
                        src={hero2}
                        alt="First slide"
                        width={x}
                        height={y}
                    />
                    <img
                        className="d-block w-100"
                        src={hero3}
                        alt="First slide"
                        width={x}
                        height={y}
                    />
                </div>

                {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel