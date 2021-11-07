import React, { useState} from 'react';
import ModalExample from "../Data";
import axios from "axios";
import {API_PATH} from "../../tools/constans";

const Brends = (props) => {

    const [data , setData ] = useState([])

    axios.get(API_PATH + "api/Brand/")
        // .then(res => console.log(res))
        .then(res => setData(res.data))
        .catch(err => console.log("Seryozni? , rostan"))
        return (
            <div>

                <div className="d-flex">
                <h1>Популярные бренды</h1>
               <a className='ms-4 mt-4 text-danger' href="#">Смотреть все</a>

                </div>
                <div className="row cards">
                    {
                        data.map((data) => (
                        <div className=' col-lg-1 col-md-2 col-sm-2 mt-4'>
                            <a href="#">
                            <img className="w-100" key={data.id} src={data.logo} alt=""/>
                            </a>
                        </div>
                    ))

                    }
                </div>

            </div>
        );

}

export default Brends;