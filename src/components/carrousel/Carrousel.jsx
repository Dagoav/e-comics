import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import hero1 from "../../assets/intro1.jpg"
import hero2 from "../../assets/doomsday.jpg"
import hero3 from "../../assets/dev-d2Py_uhXJQo-unsplash.jpg"
import hero4 from "../../assets/comic_hand.jpg"
import hero5 from "../../assets/philip-myrtorp-0FVVmFF00_0-unsplash.jpg"
import hero6 from "../../assets/waldemar-brandt.jpg"
import hero7 from "../../assets/erik-mclean-27kCu7bXGEI-unsplash.jpg"
import Item from './Item';
import "./Carrousel.css"

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);
    const listImg_item1 = [hero4, hero4, hero4]
    const listImg_item2 = [hero4, hero4, hero4]
    const listImg_item3 = [hero4, hero4]
    const listImg_item4 = [hero4]
    let time_iterval = 5000

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item interval={time_iterval}>
                <Item listImages={listImg_item1} >
                </Item>
            </Carousel.Item>
            <Carousel.Item interval={time_iterval} >
                <Item listImages={listImg_item2} >
                </Item>
            </Carousel.Item>
            <Carousel.Item interval={time_iterval}>
                <Item listImages={listImg_item3} >
                </Item>
            </Carousel.Item>
            <Carousel.Item interval={time_iterval}>
                <Item listImages={listImg_item4} >
                </Item>
            </Carousel.Item>
        </Carousel >
    );
}

export default ControlledCarousel