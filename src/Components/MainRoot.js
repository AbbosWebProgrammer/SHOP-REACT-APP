import React, {Component} from 'react';
import Home from "./HomePage/Home";
import Wildberries from "./Wildberries";
import { ToastContainer } from 'react-toastify';
import MainParts from "./HomePage/MainParts";
import Login from "../pages/Login";
import EnterNumber from "../pages/EnterNumber";
import AdminMenus from "../pages/dashboard/AdminMenus";


import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import Wildberrries from "./Wildberries"
import Back from "./Back";
import Korzina from "./HomePage/Korzina";
import Cards from "./Cards";
import Main2 from "./Main2";
import Cards2 from "./Cards2";
import Main3 from "./Main3";
import MainBurger from "./MainBurger";
import Register from "../pages/Register";
import MainFilter from "./MainFilter";
import Verify from "../pages/Verify";
import FilterCards from "./FilterCards";
import Main4 from "./Main4";
import Cards4 from "./Cards4";


class MainRoot extends Component {

    render() {

        return (
            <div>

                <BrowserRouter>
                    <Switch>

                        <Route path="/" exact component={Home} />
                        <Route path={"/parts/:id"} exact component={Wildberries} />
                        <Route path={"/carousel/:id"}  exact component={Main2}/>
                        <Route path={"/brands/:id"} exact component={Main3}/>
                        <Route path={"/parts2/:id"}  exact component={Main4}/>
                        <Route path={"/category/:id"} exact component={MainBurger}/>
                        <Route path={"/product/:id"}exact component={Back} />
                        <Route path={"/cards/:id"} exact component={Cards}/>
                        <Route path={"/cards2/:id2"} exact component={Cards2}/>
                        <Route path={"/cards4/:id2"} exact component={Cards4}/>
                        <Route path={"/filtercards/:input"} exact component={FilterCards}/>
                        <Route path={"/filter/:input"} exact component={MainFilter}/>

                        <Route path={"/message"} exact component={Verify}/>


                        <Route path="/login" exact component={Login} />
                        <Route path="/korzina" exact component={Korzina} />
                        <Route path="/enter" exact component={EnterNumber} />
                        <Route path="/register" exact component={Register} />

                        <Route path="/menus" exact component={AdminMenus} />



                    </Switch>


                    <ToastContainer/>
                </BrowserRouter>

            </div>
        );
    }
}

export default MainRoot;