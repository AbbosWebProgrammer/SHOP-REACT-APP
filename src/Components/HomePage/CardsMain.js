import React, {Component, useState} from 'react';
import ModalExample from "../Data";
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH} from "../../tools/constans";



const CardsMain = (props) => {

    const [data, setData] = useState([])
    axios.get(API_PATH + "api/XitProducts/")
          // .then(res =>console.log(res))
         .then(res => setData (res.data.products))

        return (
            <div>
                <div className="row cards mt-5">
                    {
                        data.map((data) => (
                        <div className="incards text-decoration-none ">

                            <div className='kategoriya'>

                                <div>

                                    <div className="prosmotr">
                                        <ModalExample id={data.id}/>
                                    </div>

                                    <Link to={"/three"}  className="out text-decoration-none">

                                    <div>
                                        <div className="position-relative mb-2">
                                            <img className='w-100' src={API_PATH + data.image} alt="" />
                                            <span className='pink'>-{data.discounts} % </span>
                                        </div>
                                        <div>

                                            <h4 className='size'>{data.price} sum <span
                                                className='old'>{data.oldprice} sum</span>
                                            </h4>
                                            <div className="d-flex click">
                                                <h6>69 626 sum</h6>
                                                <div className="d-flex justify-content-between">
                                                    <span className="mir"><p>vbhhjefvdsfregth</p></span>
                                                    <span className="pay "><p>svfefdvdfas </p></span>
                                                    <span className="sbp "><p>dvsefdffggf</p></span>

                                                </div>

                                            </div>
                                            <div className="pword">
                                                <p className='pwordp w-auto'>{data.brand }/ {data.product}</p>

                                            </div>

                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))

                    }
                </div>
            </div>
        );

}

export default CardsMain;