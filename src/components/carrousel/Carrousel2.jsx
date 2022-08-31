import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import hero1 from "../../assets/intro1.jpg"
import hero2 from "../../assets/doomsday.jpg"
import hero3 from "../../assets/comic_hand.jpg"
import Item from './Item';
import "./Carrousel.css"

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);
    const listImg_item1 = [hero1, hero2, hero3]
    const listImg_item2 = [hero2, hero1, hero3]
    const listImg_item3 = [hero1, hero2]
    const listImg_item4 = [hero1]

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item >
                <Item listImages={listImg_item1} >
                </Item>
            </Carousel.Item>
            <Carousel.Item >
                <Item listImages={listImg_item2} >
                </Item>
            </Carousel.Item>
            <Carousel.Item >
                <Item listImages={listImg_item3} >
                </Item>
            </Carousel.Item>
            <Carousel.Item >
                <Item listImages={listImg_item4} >
                </Item>
            </Carousel.Item>
        </Carousel >
    );
}

export default ControlledCarousel