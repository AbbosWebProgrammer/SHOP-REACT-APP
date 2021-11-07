
import React, {useState} from "react";
import {Link} from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import axios from "axios";
import {API_PATH} from "../../tools/constans";

const CarouselMain = (props) => {

    const [data, setData] = useState([])

    axios.get(API_PATH + "api/Main_page_banner/")
        .then(res => setData(res.data))

    const renderSlides = data.map( (data) => (
        <Link to={"/two"}>
            <img src={data.image} alt=""/>

        </Link>
    ))

    return (



        <div className="carousel-main ">
            <Slider
                dots={false}
                autoplay={true}
                autoplaySpeed={3000}
            >
                {renderSlides}


            </Slider>
        </div>
    );

}
export default CarouselMain;


