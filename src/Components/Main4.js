import React, {Component, useEffect, useState} from 'react';
import {UncontrolledCollapse, CardBody, Card, Form, FormGroup, Label, Input,} from 'reactstrap';
import axios from "axios";
import ModalExample from "./Data";
import Back from "./Back";
import Footer from "./Footer";
import Cards from "./Cards";
import {API_PATH} from "../tools/constans";
import {getPartsIdss , inform} from "../redux/action/mainPartsAction";
import {connect} from "react-redux";
import Cards4 from "./Cards4";
import Nav from "./Nav";


const Main4 = (props) => {

    useEffect(() => {
        props.getPartsIdss();
    },[])


    return (
        <div>
            <Nav/>
        <div className="row main me-0">


            <div className="col-lg-12 col-md-12">
                <div className="man">

                    <Cards4/>



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

export default connect(mapStateToProps,{getPartsIdss,inform}) (Main4);