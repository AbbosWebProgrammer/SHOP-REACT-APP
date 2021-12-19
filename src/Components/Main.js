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


const Main = (props) => {

    useEffect(() => {
        props.getPartsId();
    },[])


        return (


                <div className="row main me-0">


                    <div className="col-lg-12 col-md-12">
                        <div className="man">

                            <Cards/>



                        </div>
                    </div>
                </div>

        );
    }

const mapStateToProps = (state) => {
    return{
        partsId: state.partM.partsId,
    }
}

export default connect(mapStateToProps,{getPartsId}) (Main);













