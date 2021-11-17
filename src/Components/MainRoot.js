import React, {Component} from 'react';
import Home from "./HomePage/Home";
import Wildberries from "./Wildberries";
import { ToastContainer } from 'react-toastify';
import MainParts from "./HomePage/MainParts";
import Login from "../pages/Login";
import EnterNumber from "../pages/EnterNumber";
import AdminMenus from "../pages/AdminMenus";


import {BrowserRouter,Switch,Route} from "react-router-dom"
import Wildberrries from "./Wildberries"
import Back from "./Back";
import Korzina from "./HomePage/Korzina";
import Cards from "./Cards";
import Main2 from "./Main2";
import Cards2 from "./Cards2";

class MainRoot extends Component {

    render() {

        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/two" exact component={Wildberries} />
                        <Route path="/twooo" exact component={Main2}/>
                        <Route path="/three" exact component={Back} />
                        <Route path={"/cards/:id"} exact component={Cards}/>
                        <Route path={"/cards2/:id2"} exact component={Cards2}/>



                        <Route path="/login" exact component={Login} />
                        <Route path="/korzina" exact component={Korzina} />
                        <Route path="/enter" exact component={EnterNumber} />

                        <Route path="/admin/menus" exact component={AdminMenus} />


                    </Switch>


                    <ToastContainer/>

                </BrowserRouter>
            </div>
        );
    }
}

export default MainRoot;