
import React, {Component, useEffect, useState} from 'react';
import {UncontrolledCollapse, CardBody, Card, Form, FormGroup, Label, Input,} from 'reactstrap';
import axios from "axios";
import ModalExample from "./Data";
import Back from "./Back";
import Footer from "./Footer";
import Cards from "./Cards";
import {API_PATH} from "../tools/constans";
import {getPartsId} from "../redux/action/mainPartsAction";
import {connect} from "react-redux";
import Cards3 from "./Cards3";
import Navbar from "./Nav";


const Main3 = (props) => {

    useEffect(() => {
        props.getPartsId();
    },[])


    return (

       <div>

          <Navbar/>

        <div className="row main me-0">


            <div className="col-12">
                <div className="man">


                    <Cards3/>


                </div>
            </div>
        </div>

         <Footer/>

       </div>
    );
}

const mapStateToProps = (state) => {
    return{
        partsId: state.partM.partsId,
    }
}

export default connect(mapStateToProps,{getPartsId}) (Main3);