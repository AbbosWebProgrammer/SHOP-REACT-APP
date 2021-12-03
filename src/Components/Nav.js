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
    const [inputValue, setInputValue] = useState('')
    useEffect(() => {
        axios.get(API_PATH + "api/ProductInfo/")
            .then((response) => {
                setAPIData(response.data.data);
            })
    }, [])

    // useEffect(() => {
    //     const pro = APIData.map(item => console.log(item))
    //     // console.log(pro)
    // }, [])

    // axios.post(API_PATH + "api/ProductInfo/" + searchItems())

    const searchItems = (e) => {
        setInputValue(e.target.value)
        const allBrands = APIData.filter(item => e.target.value.toLowerCase() === item.brand.toLowerCase())
        // const allBrands = APIData.map(item => {
        //     if(item.brand.toLowerCase().includes(e.target.value)) {
        //         return item.brand
        //     }
        // })
        console.log(allBrands)
        setFilteredResults(allBrands)
    }

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
                            {/*<li>*/}
                            {/*    <a className="navbar-one-button" href="#">*/}
                            {/*        Продавайте на Alsafia*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            <li>
                                <a className="navbar-one-button" href="https://alsafia-cpa.uz/">
                                    Стать партнёром Alsafia
                                </a>
                            </li>
                        </ul>
                        <ul className="d-flex justify-content-end  ">
                            <li>
                                <a className="navbar-two-button" href="https://t.me/Manager_saisolo/">
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
                                                    <Link to={"/categorypage"} onClick={() => props.getBurgerId(item.id,props.history)} className="name-table d-flex" >
                                                        <img className='user me-2' src={item.image} alt=""/>
                                                        <h4>{item.categoryname}</h4>
                                                    </Link>



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



                                <div className="close" id="toggler1" >X</div>
                            </UncontrolledCollapse>

                        </div>
                        <div className="logo-img">
                            <Link to={"/"}>
                                <img src="https://alsafia.uz/img/logotip.png" alt=""/>
                            </Link>
                        </div>
                        <div className="for-input">
                            <input type="text"
                                   placeholder="Поискуйте по бренду..."
                                   onChange={(e) => searchItems(e)}
                            />
                            <i className={'fas fa-search search'}></i>



                            {inputValue && <div  className="filter"  >




                                {
                                      filteredResults.map((items) => {
                                        console.log(items)
                                        return(
                                            <div>
                                                <h4>{items && items.productname}</h4>

                                            </div>
                                        )
                                    }  )

                                }
                            </div>}

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