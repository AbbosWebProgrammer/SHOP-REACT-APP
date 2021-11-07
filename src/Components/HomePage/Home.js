import React, {Component} from 'react';
import Navbar from "../Nav";
import Footer from "../Footer";
import CarouselMain from "./Carousel-main";
import App from "./Carousel-main";
import Cards from "../Cards";
import ModalExample from "../Data";
import CardsMain from "./CardsMain";
import MainParts from "./MainParts";
import Brends from "./Brends";


import Wildberries from "../Wildberries";
import {Link} from "react-router-dom";



class Home extends Component {
    render() {
        return (


            <div className="home">
                <Navbar/>
                <div className="main-part p-5 pt-0">
              <CarouselMain/>

                <MainParts/>

                <div>
                    <h1>Хиты продаж</h1>
                    <CardsMain/>

                    <div className="row">
                        <Link to={"/two"} className="col-6">
                            <div className="half">
                                <img src="https://images.wbstatic.net/bners1/03034858697.jpg" alt=""/>
                            </div>
                        </Link>
                        <Link to={"/two"} className="col-6">
                            <div className="half">
                                <img src="https://images.wbstatic.net/bners1/pepe_1410.jpg" alt=""/>
                            </div>
                        </Link>
                    </div>

                    <CardsMain/>

                    <div className="row">
                        <Link to={"/two"} className="col-6">
                            <div className="half">
                                <img src="https://images.wbstatic.net/bners1/87435798865444.jpg" alt=""/>
                            </div>
                        </Link>
                        <Link to={"/two"} className="col-6">
                            <div className="half">
                                <img src="https://images.wbstatic.net/bners1/main_poloska_kids_shoes.jpg" alt=""/>
                            </div>
                        </Link>
                    </div>

                    <CardsMain/>

                    <Brends/>

                </div>

                </div>
                <Footer/>


            </div>
        );
    }
}

export default Home;