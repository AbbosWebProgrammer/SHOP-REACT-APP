import React from 'react';
import ReactDOM from 'react-dom';


import  'bootstrap/dist/css/bootstrap.min.css';
import './sass/main.scss'
import './sass/main-admin.scss'



import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./redux/reducers/rootReduser";
import 'react-toastify/dist/ReactToastify.css';
import thunk from "redux-thunk";

import MainRoot from "./Components/MainRoot";
import MainParts from "./Components/HomePage/MainParts";


const store =createStore(rootReducer);




ReactDOM.render(
    <Provider store={store}>
    <MainRoot/>
    </Provider>
    , document.getElementById('root'));


