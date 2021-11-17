
import React, {Component, useEffect} from 'react';
import ModalExample from "./Data";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {inform,getCarousel,getCarouselId} from "../redux/action/mainPartsAction";
import {API_PATH} from "../tools/constans";


const Cards2 = (props) => {

    console.log(props)
    console.log("propsiiii")
    useEffect(() => {
        props.getCarousel();
        props.getCarouselId();
    },[])

    return (

        <div
            className="row cards mt-5">

            fjndxnjvkf
            {console.log(props.slideId)}
            {console.log("props.partscard")}

            {/*{*/}
            {/*    props.slideId.map((data) => {*/}
            {/*        console.log(data)*/}
            {/*        console.log("dataslide")*/}
            {/*    })*/}
            {/*}*/}

            {props.slideId.map((data, index) => (
                <div className="text-decoration-none twocards col-lg-3 col-md-3 col-sm-6 col-xs-6 mb-5 ">
                    <div  className='kategoriya'>

                        <div>
                            <div className="prosmotr">
                                <ModalExample id={data.id}/>
                            </div>
                            <Link to={"/three"}  className="out">


                                <div className="foot">
                                    <div className="example"></div>
                                    <div className="inside">
                                        <div className='korzina'>В корзину</div>
                                        <div className="name"></div>
                                    </div>
                                </div>
                            </Link>
                            <div>
                                <div className="imgback">
                                    <img className='w-100' src={API_PATH + data.colors[0].image[0].image} alt=""/>
                                    <span className='pink'>{data.discounts} % </span>
                                </div>
                                <div>
                                    <h4 className='size'>{data.price} sum
                                        <span className='old'>{data.oldprice} sum</span>
                                        {/*<span className='pink'>{item.small}</span>*/}
                                    </h4>
                                    <div className="pword">
                                        <p className='pwordp'>{data.brand}/ {data.productname}</p>
                                        {/*    <div className="star">*/}
                                        {/*        <div className="abs">{item.star}</div>*/}
                                        {/*        {item.abs}*/}
                                        {/*    </div>*/}
                                    </div>
                                    <div><span className='rassrochka'>РАССРОЧКА 0-0-24</span></div>
                                    {/*<div className="zed">gfd</div>*/}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ))

            }



            {/*{*/}
            {/*    props.partscard.data.map((data) => (*/}

            {/*        // console.log(data);*/}
            {/*        // console.log("dataniki")*/}

            {/*        <div  className="incards text-decoration-none" key={data.id}>*/}
            {/*                        Cards info*/}
            {/*            <div className='kategoriya'>*/}

            {/*                <div>*/}

            {/*                    <div className="prosmotr">*/}
            {/*                        <ModalExample id={data.id}/>*/}
            {/*                    </div>*/}

            {/*                    <Link to={"/three"} className="out text-decoration-none col-lg-3 col-md-3 col-sm-6 col-xs-6 mb-5">*/}

            {/*                        <div>*/}
            {/*                            <div className="position-relative mb-2">*/}

            {/*                                <img className='w-100' src={API_PATH + data.colors[0].image[0].image} alt=""/>*/}
            {/*                                <span className='pink'>{data.discounts} % </span>*/}
            {/*                            </div>*/}
            {/*                            <div>*/}

            {/*                                <h4 className='size'>{data.price} sum <span*/}
            {/*                                    className='old'>{data.oldprice} sum</span>*/}
            {/*                                </h4>*/}
            {/*                                <div className="d-flex click">*/}
            {/*                                    <h6>69 626 sum</h6>*/}
            {/*                                    <div className="d-flex justify-content-between">*/}
            {/*                                        <span className="mir"><p>vbhhjefvdsfregth</p></span>*/}
            {/*                                        <span className="pay "><p>svfefdvdfas </p></span>*/}
            {/*                                        <span className="sbp "><p>dvsefdffggf</p></span>*/}

            {/*                                    </div>*/}

            {/*                                </div>*/}
            {/*                                <div className="pword">*/}
            {/*                                    <p className='pwordp w-auto'>{data.brand}/ {data.productname}</p>*/}

            {/*                                </div>*/}

            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </Link>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}



            {/*    ))*/}
            {/*}*/}



        </div>


    );
}

const mapStateToProps = (state) => {


    return{
        slideId:state.partM.slideId,
        slide:state.partM.slide,
    }
}


export default connect(mapStateToProps,{inform,getCarousel,getCarouselId})(Cards2);
