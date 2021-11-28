import React, {Component, useEffect, useState} from 'react';
import Back from "./Back";
import {Link} from "react-router-dom";
import {UncontrolledCollapse, Button, CardBody, Card} from 'reactstrap';
import ModalExample from "./Data";
import axios from "axios";
import {API_PATH} from "../tools/constans";
import {connect} from "react-redux";
import {setBurger,getBurger,getBurgerId} from "../redux/action/burgerAction";
import CardBurger from "./CardBurger";
import {Input} from "semantic-ui-react";

const Navbar = (props) => {

    useEffect(() => {
        props.getBurger();
    },[])


    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        axios.get(API_PATH + "api/ProductInfo/")
            .then((response) => {
                setAPIData(response.data.data);
            })
    }, [])

    // axios.post(API_PATH + "api/ProductInfo/" + searchItems())

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((items) => {
                return Object.values(items).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }



    const [isOpen, setIsOpen] = useState(false);
    const handleShow = () => setIsOpen(true);




        return (
            <div className="nav-box">



                <div className="navbar">

                    <div className="first-div d-flex justify-content-between w-100 ">

                        <ul>
                            <li>
                                <a href='#'>Ru</a>
                                <img className='ms-1' src="images/img-bayroq-rus.svg" alt=""/>
                            </li>

                            <li>

                                <a href="#">
                                    Бесплатная доставка
                                </a>
                            </li>
                            <li>
                                <a className="navbar-one-button" href="#">
                                    Продавайте на Alsafia
                                </a>
                            </li>
                            <li>
                                <a className="navbar-one-button" href="#">
                                    Стать партнёром Alsafia
                                </a>
                            </li>
                        </ul>
                        <ul className="d-flex justify-content-end  ">
                            <li>
                                <a className="navbar-two-button" href="#">
                                    Сообщить о проблеме
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="second-div">
                        <div className="for-img-one">
                            <a href="#" id="toggler1">
                                <img src="images/burg.png" alt=""/>
                            </a>

                            <UncontrolledCollapse className="left" toggler="#toggler1">
                                <div className="kategory">
                                    <div>

                                        {props.menus.map((item, index) => {
                                            // name-table d-flex
                                            return (
                                                <div key={index} className='name mt-4'>
                                                    {/*{`name-tabler d-flex ${props.show? "show" : ""}`} onMouseEnter={() => props.setBurger({show: ! props.show})}*/}
                                                    <div className="name-tabler">
                                                    <div onClick={() => props.getBurgerId(item.id,props.history)} className="name-table d-flex" >
                                                        <img className='user me-2' src={item.image} alt=""/>
                                                        <h4>{item.categoryname}</h4>
                                                    </div>



                                                    <div className="right-part d-none" >
                                                        <div className="inside">
                                                      <div className="row">

                                                          {
                                                              item.subcategories.map((item1) => {
                                                                  if(item.subcategories.length > 0){return(
                                                                    <div className="col-6">
                                                                        <h5>{item1.subcategoryname}</h5>
                                                                        {
                                                                            item1.subsubcategories.map((item2) => {
                                                                                return(
                                                                                    <div><h6>{item2.subsubcategoryname}</h6></div>
                                                                                )
                                                                            })
                                                                        }
                                                                    </div>
                                                                  )}
                                                                  }

                                                              )
                                                          }

                                                      </div>


                                                                {
                                                                    item.alladvertisements.map((item3) => {
                                                                        if(item.alladvertisements.length > 0){
                                                                        return(
                                                                            <div className="foto">
                                                                                <div className="foot-in">
                                                                                <img src={API_PATH + item3.image} alt=""/>
                                                                            </div>
                                                                            </div>
                                                                        )}
                                                                    })
                                                                }

                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            )
                                        })

                                        }
                                    </div>



                                </div>



                                <div className="close" id="toggler1">X</div>
                            </UncontrolledCollapse>

                        </div>
                        <div className="logo-img">
                            <Link to={"/"}>
                                <img src="https://alsafia.uz/img/logotip.png" alt=""/>
                            </Link>
                        </div>
                        <div className="for-input ">
                            <input type="text"
                                   placeholder="Я ищу..."
                                   onChange={(e) => searchItems(e.target.value)}
                            />

                            {/*<div onClick={handleShow} className={isOpen ? "d-none" : "d-block"}>*/}

                            {/*    <div><h1 className='ms-auto'>x</h1></div>*/}

                            <div  className="filter"  >




                                {
                                      filteredResults.map((items) => {

                                        return(
                                            <div>
                                                <h4>{items.categoryname}</h4>
                                                <h4>{items.subcategoryname}</h4>
                                                <h4>{items.subsubcategory}</h4>
                                                <h4>{items.brand}</h4>
                                            </div>
                                        )
                                    } )

                                }
                            </div>
                            {/*</div>*/}
                        </div>
                        <div className="second-left-side">

                            <div className="first-qism">
                                <a href="#">

                                    <Link to={"/enter"} className="ras2">

                                        <img
                                            src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/ffffff/external-user-interface-kiranshastry-solid-kiranshastry-1.png"/>
                                        <br/>
                                        <a href="#">Войти</a>
                                    </Link>
                                </a>

                            </div>
                            <div className="first-qism">
                                <a href="#">
                                    <Link to={"/korzina"} className="ras3">

                                        <img src="https://img.icons8.com/ios-filled/50/ffffff/click-and-collect.png"/>
                                        <br/>
                                        <a href="#">Корзина</a>
                                    </Link>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="oval"></div>
                </div>
            </div>
        );

}

const mapStateToProps = (state) => {
    return{
        menus:state.burger.menus,
        menusId:state.burger.menusId,
        show:state.burger.show,
    }
}


export default connect(mapStateToProps,{setBurger,getBurger,getBurgerId})(Navbar);