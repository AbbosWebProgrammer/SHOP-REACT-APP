import React, {Component, useEffect, useState} from 'react';
import {UncontrolledCollapse, CardBody, Card, Form, FormGroup, Label, Input,} from 'reactstrap';
import axios from "axios";
import ModalExample from "./Data";
import Back from "./Back";
import Footer from "./Footer";
import Cards from "./Cards";
import {API_PATH} from "../tools/constans";

import {connect} from "react-redux";
import FilterCards from "./FilterCards";
import Nav from "./Nav";


const MainFilter = (props) => {




    return (

        <div>

            <Nav/>

        <div className="row main me-0">


            <div className="col-lg-12 col-md-12">
                <div className="man">

                    <FilterCards/>

                </div>
            </div>
        </div>

            <Footer/>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        partsId: state.partM.partsId,
    }
}

export default connect(mapStateToProps, null)(MainFilter);