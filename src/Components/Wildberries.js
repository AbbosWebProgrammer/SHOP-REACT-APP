import React, {Component} from 'react';
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import MainModal from "./MainModal";
import ModalExample from "./Data";
import Axios from 'axios'
import Back from "./Back";
import Cards from "./Cards";



class Wildberries extends Component {


    constructor(props){
        super(props);
        this.state={
            isRegistred:true
        }

    }






    render() {



        const onClick=() => {
            this.setState({ isRegistred: !this.state.isRegistred})
        };

        return (
            <div>

                <Nav/>
                {
                    this.state.isRegistred? <Main myItem = {onClick}/>
                        :<Back myItem={onClick}/>
                }

             <Footer/>

            </div>
        );
    }
}

export default Wildberries;