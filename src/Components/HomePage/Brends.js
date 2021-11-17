import React, {useEffect, useState} from 'react';
import ModalExample from "../Data";
import axios from "axios";
import {API_PATH} from "../../tools/constans";
import {connect} from "react-redux";
import {setBrand,getBrand} from "../../redux/action/brandAction";

const Brends = (props) => {

    useEffect(() => {
        props.getBrand();
    },[])

    // const [data , setData ] = useState([])
    //
    // axios.get(API_PATH + "api/Brand/")
    //     // .then(res => console.log(res))
    //     .then(res => setData(res.data))
    //     .catch(err => console.log("Seryozni? , rostan"))
        return (
            <div>

                <div className="d-flex">
                <h1>Популярные бренды</h1>
               <a className='ms-4 mt-4 text-danger' href="#">Смотреть все</a>

                </div>
                <div className="row cards">
                    {
                        props.images.map((data,index) => (
                        <div className=' col-lg-1 col-md-2 col-sm-2 mt-4' key={index}>
                            <a href="#">
                            <img className="w-100" key={data.id} src={data.image} alt=""/>
                            </a>
                        </div>
                    ))

                    }
                </div>

            </div>
        );

}

const mapStateToProps = (state) => {
    return{
        images:state.brends.images,
    }
}


export default connect(mapStateToProps,{setBrand,getBrand})(Brends);