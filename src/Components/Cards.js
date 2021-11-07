import React, {Component} from 'react';
import ModalExample from "./Data";
import {Link} from "react-router-dom";

const data =[
    {
        id:1,rasim:'https://images.wbstatic.net/c324x432/new/35780000/35789469-1.jpg',
        size:'14 951 ₽ ',oldsize:'16 990 ₽',small:'-12%',word:'Смартфон 6.5 дюйма/720*1600/LCD/4 GB/128 GB/5000 mAh'
    },
    {
        id:2,rasim:'https://images.wbstatic.net/c324x432/new/37280000/37282507-1.jpg',
        size:'399 890 ₽ ',oldsize:'429 990 ₽',small:'-7%',word:'Samsung / Телевизор QE85QN85AAUXRU/85"/HDMI, WI-FI, BLUETOOTH/DVB-T2 DVB-C DVB-S2\n' +
            ' '
    },
    {
        id:3,rasim:'https://images.wbstatic.net/c324x432/new/35790000/35793509-1.jpg',
        size:'14 951 ₽ ',oldsize:'16 990 ₽',small:'-12%',word:'Смартфон 6.5 дюйма/720*1600/LCD/4 GB/128 GB/5000 mAh'
    },
    {
        id:4,rasim:'https://images.wbstatic.net/c324x432/new/35780000/35787324-1.jpg',
        size:'17 751 ₽ ',oldsize:'13 990 ₽',star:'41', abs:'d' ,small:'-16%',word:'Смартфон 6.5 дюйма/720*1600/LCD/4 GB/128 GB/5000 mAh'
    },
    {
        id:5,rasim:'https://images.wbstatic.net/c324x432/new/35780000/35789469-1.jpg',
        size:'11 751 ₽ ',oldsize:'13 990 ₽',star:'41', abs:'d' ,small:'-16%',word:'Смартфон 6.5 дюйма/720*1600/LCD/4 GB/128 GB/5000 mAh'
    },
    {
        id:6,rasim:'https://images.wbstatic.net/c324x432/new/37290000/37291980-1.jpg',
        size:'119 590 ₽ ',oldsize:'129 990 ₽',small:'-17%',word:'Samsung / Телевизор QE55LS03AAUXRU/55"/Bluetooth/DLNA/WI-FI 802.11a/b/g/n/да\n' +
            ' '
    },
    {
        id:7,rasim:'https://images.wbstatic.net/c324x432/new/35780000/35789469-1.jpg',
        size:'80 091 ₽ ',oldsize:'89 990 ₽',star:'22', abs:'d' ,small:'-11%',word:'Смартфон 6.5 дюйма/720*1600/LCD/4 GB/128 GB/5000 mAh '
    },
    {
        id:8,rasim:'https://images.wbstatic.net/c324x432/new/32170000/32175792-1.jpg',
        size:'14 951 ₽ ',oldsize:'16 990 ₽',star:'3', abs:'d' ,small:'-12%',word:'Samsung / Телевизор QE55Q60AAUXRU/55"/4K UHD/Bluetooth/DLNA/Wi-Fi 802.11 b/g/n/ac/да\n' +
            ' 3\n' +
            ' '
    },
    {
        id:9,rasim:'https://images.wbstatic.net/c324x432/new/35780000/35787324-1.jpg',
        size:'14 951 ₽ ',oldsize:'16 990 ₽',star:'22', abs:'d' ,small:'-12%',word:'Смартфон 6.5 дюйма/720*1600/LCD/4 GB/128 GB/5000 mAh'
    },
    {
        id:10,rasim:'https://images.wbstatic.net/c324x432/new/37280000/37282507-1.jpg',
        size:'14 951 ₽ ',oldsize:'16 990 ₽',star:'41', abs:'d' ,small:'-12%',word:'Samsung / Телевизор QE85QN85AAUXRU/85"/HDMI, WI-FI, BLUETOOTH/DVB-T2 DVB-C DVB-S2\\n\' +'
    },
    {
        id:11,rasim:'https://images.wbstatic.net/c324x432/new/35790000/35793509-1.jpg',
        size:'14 951 ₽ ',oldsize:'16 990 ₽',star:'22', abs:'d' ,small:'-12%',word:'Смартфон 6.5 дюйма/720*1600/LCD/4 GB/128 GB/5000 mAh'
    },
    {
        id:12,rasim:'https://images.wbstatic.net/c324x432/new/32840000/32840545-1.jpg',
        size:'14 951 ₽ ',oldsize:'16 990 ₽',star:'1', abs:'d' ,small:'-12%',word:'Смартфон 6.5 дюйма/720*1600/LCD/4 GB/128 GB/5000 mAh'
    },
    {
        id:13,rasim:'https://images.wbstatic.net/c324x432/new/32840000/32840553-1.jpg',
        size:'14 951 ₽ ',oldsize:'16 990 ₽',small:'-12%',word:'Смартфон 6.5 дюйма/720*1600/LCD/4 GB/128 GB/5000 mAh'
    },
    {
        id:14,rasim:'https://images.wbstatic.net/c324x432/new/32960000/32960761-1.jpg',
        size:'14 951 ₽ ',oldsize:'16 990 ₽',star:'32', abs:'d' ,small:'-12%',word:'Смартфон 6.5 дюйма/720*1600/LCD/4 GB/128 GB/5000 mAh'
    },
    {
        id:15,rasim:'https://images.wbstatic.net/c324x432/new/35780000/35787324-1.jpg',
        size:'14 951 ₽ ',oldsize:'16 990 ₽',star:'15', abs:'d' ,small:'-12%',word:'Смартфон 6.5 дюйма/720*1600/LCD/4 GB/128 GB/5000 mAh'
    },
    {
        id:16,rasim:'https://images.wbstatic.net/c324x432/new/32840000/32840553-1.jpg',
        size:'14 951 ₽ ',oldsize:'16 990 ₽',star:'33', abs:'d' ,small:'-12%',word:'Смартфон 6.5 дюйма/720*1600/LCD/4 GB/128 GB/5000 mAh'
    },


]

class Cards extends Component {
    render() {
        return (
            <div className="row cards">
                {data.map((item, index) => (
                    <div className="text-decoration-none twocards col-lg-3 col-md-3 col-sm-6 col-xs-6 mb-5 ">
                        <div  className='kategoriya'>

                            <div>
                                <div className="prosmotr">
                                    <ModalExample/>
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
                                    <div>
                                        <img className='w-100' src={item.rasim} alt=""/>
                                    </div>
                                    <div>
                                        <h4 className='size'>{item.size} <span
                                            className='old'>{item.oldsize}</span> <span
                                            className='pink'>{item.small}</span></h4>
                                        <div className="pword">
                                            <p className='pwordp'>{item.word}</p>
                                            <div className="star">
                                                <div className="abs">{item.star}</div>
                                                {item.abs}
                                            </div>
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
            </div>
        );
    }
}

export default Cards;











