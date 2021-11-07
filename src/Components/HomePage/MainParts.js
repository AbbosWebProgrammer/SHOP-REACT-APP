import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH} from "../../tools/constans";

const MainParts = (props) => {

    const [data, setData ] = useState([])

axios.get(API_PATH + "api/Main_page_promo/")
    // .then(res => console.log(res))

    .then(res => setData (res.data))
    .catch(err => console.log("Aka aylaning"))

        return (
            <div>
                <div className="select mt-5 mb-5">
                    <div className="row">
                        {
                            data.map((data) => (

                                <Link to={"/two"} className="parts  col-sm-3 mt-4">
                                    <div className="box-img">
                                        <img key={data.id} src={data.image} alt=""/>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
}

export default MainParts

