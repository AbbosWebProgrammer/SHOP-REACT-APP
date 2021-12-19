
import React, { useEffect, useState } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_PATH } from "../tools/constans";
import { v4 as uuidv4 } from "uuid";
import {toast} from "react-toastify";

const ModalExample = (props) => {
    const { buttonLabel = "Быстрый просмотр", className } = props;

    useEffect(() => {
        axios
            .get(API_PATH + "/api/ProductInfo/" + `${props.id}`)
            .then((res) => {
                setData(res.data.data);
                // console.log(res.data);
            })
            .catch((err) => console.log("Aka aylaning"));
    }, []);

    const [data, setData] = useState([]);



    const [productprice,setproductprice]=useState("")
    const [productoldprice,setproductoldprice]=useState("")

    const [currentColor, setCurrentColor] = useState({});
    const [color, setColor] = useState("");
    const [img, setImg] = useState('');
    const [size, setSize] = useState({});
    const [changing, setChanging] = useState(false);

    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
        setChanging(false);
    };

    const onChange = (e, color) => {
        if(changing===true){
            setChanging(!changing); }
        setSize({});
        setColor(color.color);
        setImg(color.image[0].image)
        setCurrentColor(color);
        setproductprice(color.price);
        setproductoldprice(color.oldprice);

    };

    const onMouseEnter = (e, imgage) => {
        setImg(imgage.image);
    };


    const addSize = (e,sizeid, ordersize, id) => {
        if(changing===true){
            setChanging(!changing); }
        e.preventDefault()
        setSize({ ...size,sizeid, id, ordersize });
    };
    const addclassname = () => {

        var testarray = (document).getElementsByClassName("product_size");
        for(var i = 0; i < testarray.length; i++)
            testarray.item(i).className += " productsizefocus";
        setTimeout(function() {
            for(var i = 0; i < testarray.length; i++)
                testarray.item(i).classList.remove("productsizefocus");
            // header.removeClass('blue');

        }, 1500);

    }

    const addBasket = (e, data1) => {
        e.preventDefault();
        setChanging(!changing);
        if(currentColor!=={} && Object.values(currentColor).length===0 ){
            setCurrentColor(data1.colors[0])
            if (localStorage.getItem("basket")) {
                let obj = JSON.parse(localStorage.getItem("basket"));
                if(size!=={} && Object.values(size).length!==0 ){  data1.sizeid = size.sizeid; }
                else{ data1.sizeid =''}
                data1.size = size;
                data1.uniqueid = uuidv4();
                data1.currentColorid = data1.colors[0].id;
                data1.currentColorimage= data1.colors[0].image[0].image;
                data1.buy_quantity=1;
                data1.currentColor = data1.colors[0].color;
                data1.currentPrice = data1.colors[0].price;
                data1.currentOldprice = data1.colors[0].oldprice;

                obj.push(data1);
                localStorage.setItem("basket", JSON.stringify(obj));
            } else {
                data1.size = size;
                if(size!=={} && Object.values(size).length!==0 ){  data1.sizeid = size.sizeid; }
                else{ data1.sizeid =''}
                data1.uniqueid = uuidv4();
                data1.currentColorid = data1.colors[0].id;
                data1.currentColorimage = data1.colors[0].image[0].image;
                data1.buy_quantity=1;
                data1.currentColor = data1.colors[0].color;
                data1.currentPrice = data1.colors[0].price;
                data1.currentOldprice = data1.colors[0].oldprice;
                localStorage.setItem("basket", JSON.stringify([data1]));
            }
        } else{
            if (localStorage.getItem("basket")) {
                let obj = JSON.parse(localStorage.getItem("basket"));
                data1.size = size;
                if(size!=={} && Object.values(size).length!==0 ){  data1.sizeid = size.sizeid; }
                else{ data1.sizeid =''}
                data1.uniqueid = uuidv4();
                data1.currentColorid = currentColor.id;
                data1.currentColorimage = currentColor.image[0].image;
                data1.buy_quantity=1;
                data1.currentColor = currentColor.color;
                data1.currentPrice = currentColor.price;
                data1.currentOldprice = currentColor.oldprice;

                obj.push(data1);
                localStorage.setItem("basket", JSON.stringify(obj));
            } else {
                data1.size = size;
                if(size!=={} && Object.values(size).length!==0 ){  data1.sizeid = size.sizeid; }
                else{ data1.sizeid =''}
                data1.uniqueid = uuidv4();
                data1.currentColorid = currentColor.id;
                data1.currentColorimage = currentColor.image[0].image;
                data1.currentColor = currentColor.color;
                data1.buy_quantity=1;
                data1.currentPrice = currentColor.price;
                data1.currentOldprice = currentColor.oldprice;
                localStorage.setItem("basket", JSON.stringify([data1]));
            }
        }

    }



    const [modalin, setModalin] = useState(false);

    const togglein = (e, color) => {
        setModalin(!modalin);
        if(currentColor!=={} && Object.values(currentColor).length===0 ){
            setCurrentColor(color.colors[0]);
            setFormdata(color.colors[0])
        }
        else{
            setFormdata(currentColor)
        }
    }


    const [formdata, setFormdata] = useState({})
    const [fastorder, setfastorder] = useState({
        name: '',
        phone: '',
        productid: '',
        colorid: '',
        sizeid: ''
    })

    const onSubmit = async e => {
        e.preventDefault()
        fastorder.colorid=formdata.id;
        fastorder.productid=formdata.productid
        if(Object.values(size).length!==0){
            fastorder.sizeid=size.sizeid
        }
        console.log(fastorder)


        axios.post(API_PATH+'api/OrderAndOrderDetailsJson/', {"data":fastorder}, {Headers:{ 'Content-Type': 'application/json' }})
            .then((res) => {
                console.log(res.data);
                if(res.data.status="OK"){
                    setModalin(!modalin);
                    setSize({})
                    fastorder.name=''
                    fastorder.phone=''
                    toast("Ваш заказ оформлен!")
                }
                else{
                    setModalin(!modalin);
                    toast("Ваш заказ неоформлен!")
                }
            })

    }

    const onSubmitHandler = e => {
        setfastorder({
            ...fastorder,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div>
            <Button color="white" onClick={toggle}>
                {buttonLabel}
                <span style={{opacity: 0}}>{props.id}</span>
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalBody>
                    {data.map((data1) => (
                        <div className="artikul">
                            <div>
                                <div className="btn-close" onClick={toggle}></div>
                                <h1 key={data1.id}>{data1.productname}</h1>
                                <div className="d-flex">
                                    {/*<p>Артикул:</p>*/}
                                    {/*<p className="ms-1">35789469</p>*/}
                                    {/*<p className="ms-3">star</p>*/}
                                    {/*<p>&nbsp;1 отзыв</p>*/}
                                    <p className="ms-3">Купили более {data1.buy_quantity} раз</p>
                                </div>
                            </div>
                            <form className="artikul-body">
                                <div className="column-1">
                                    <div className="column-1-container">
                                        {(currentColor.image
                                                ? currentColor.image
                                                : data1.colors[0].image
                                        ).map((img) => (
                                            <div
                                                className="image-box"
                                                onMouseEnter={(e) => onMouseEnter(e, img)}
                                            >
                                                <img className="box-image" src={API_PATH + img.image} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="column-2">
                                    <div className="main-image">
                                        <img
                                            src={`${API_PATH}/${
                                                img ? img : data1.colors[0].image[0].image
                                            }`}
                                        />
                                    </div>
                                </div>
                                <div className="column-3">
                                    <div className="column-3-header">
                    <span className="d-flex">
                      <h1>{productprice.length!==0?productprice:data1.colors[0].price} сумм</h1>&nbsp;
                        <del>{productoldprice.length!==0?productoldprice:data1.colors[0].oldprice} сумм</del>
                    </span>
                                        <h5 className='text-uppercase font-weight-normal'>
                                            {color?
                                                color!==""?
                                                    <>Цвет: {color}</>:''
                                                :
                                                data1.colors[0].color!==''?
                                                    <>Цвет: {data1.colors[0].color}</>:''}</h5>                                        <div className="colors">
                                        <div className="colors">
                                            {data1.colors.length!==1?data1.colors.map((color, index) => (
                                                <div className="colors-field">
                                                    <label htmlFor={index} className="label">
                                                        <img src={API_PATH + color.image[0].image} className="color-image"/>
                                                    </label>
                                                    <input
                                                        type="radio"
                                                        id={index}
                                                        name="radio"
                                                        value={color.colorname}
                                                        onClick={(e) => onChange(e, color)}
                                                    />
                                                </div>
                                            )):""}
                                        </div>
                                        </div>

                                        <div className="sizes">
                                            {(currentColor.size
                                                    ? currentColor.size
                                                    : data1.colors[0].size
                                            ).map((item) => (
                                                <button
                                                    className="sizes-size me-1 product_size"
                                                    onClick={(e) => addSize(e,item.id, item.size, data1.id)}
                                                >
                                                    <span className="size-title">{item.size}</span>
                                                    <span className="size-sub">{item.quantity}</span>
                                                </button>
                                            ))}
                                        </div>


                                        <div className="buttons">
                                            {currentColor.size
                                                ? currentColor.size.length!==0?
                                                    Object.values(size).length===0?
                                                        <span  className="to-basket"  onClick={(e) => addclassname(e)} > Добавить в корзину </span>
                                                        :
                                                        changing?
                                                            <Link to="/korzina" className="to-basket"  style={{   textDecoration: "none",  color: "#fff",}} > Перейти в корзину  </Link>
                                                            :
                                                            <span  className="to-basket"  onClick={(e) => addBasket(e, data1)}> Добавить в корзину </span>
                                                    :
                                                    changing?
                                                        <Link to="/korzina" className="to-basket"  style={{   textDecoration: "none",  color: "#fff",}} > Перейти в корзину  </Link>
                                                        :
                                                        <span  className="to-basket"  onClick={(e) => addBasket(e, data1)}> Добавить в корзину </span>

                                                : data1.colors[0].size.length!==0?
                                                    Object.values(size).length===0?
                                                        <span  className="to-basket"  onClick={(e) => addclassname(e)} > Добавить в корзину </span>
                                                        :
                                                        changing?
                                                            <Link to="/korzina" className="to-basket"  style={{   textDecoration: "none",  color: "#fff",}} > Перейти в корзину  </Link>
                                                            :
                                                            <span  className="to-basket"  onClick={(e) => addBasket(e, data1)}> Добавить в корзину </span>
                                                    :
                                                    changing?
                                                        <Link to="/korzina" className="to-basket"  style={{   textDecoration: "none",  color: "#fff",}} > Перейти в корзину  </Link>
                                                        :
                                                        <span  className="to-basket"  onClick={(e) => addBasket(e, data1)}> Добавить в корзину </span>
                                            }
                                            {currentColor.size
                                                ? currentColor.size.length!==0?
                                                    Object.values(size).length===0?
                                                        <Button className="fast-order" onClick={(e) => addclassname(e)}>   Быстрый заказ </Button>
                                                        :
                                                        <Button className="fast-order" onClick={(e) =>togglein(e, data1)}>   Быстрый заказ </Button>
                                                    :
                                                    <Button className="fast-order" onClick={(e) =>togglein(e, data1)}>   Быстрый заказ </Button>

                                                : data1.colors[0].size.length!==0?
                                                    Object.values(size).length===0?
                                                        <Button className="fast-order" onClick={(e) => addclassname(e)}>   Быстрый заказ </Button>
                                                        :
                                                        <Button className="fast-order" onClick={(e) =>togglein(e, data1)}>   Быстрый заказ </Button>
                                                    :
                                                    <Button className="fast-order" onClick={(e) =>togglein(e, data1)}>   Быстрый заказ </Button>
                                            }


                                            <Modal isOpen={modalin} toggle={togglein} className={'fast-order-back'}>
                                                <div className="btn-close ms-auto me-4 mt-4" onClick={togglein}></div>
                                                <ModalBody className={'fast-order-mod'}>
                                                    <form className={'fast-order-form'} onSubmit={e => onSubmit(e)}>
                                                        <div className="field">
                                                            <label htmlFor="name">Имя клиента</label>
                                                            <input value={formdata.name} onChange={e => onSubmitHandler(e)} type="text" placeholder={'Имя...'} className={'input'} name={'name'} id={'name'}/>
                                                        </div>
                                                        <div className="field">
                                                            <label htmlFor="number">Номер для обратного звонка</label>
                                                            <input value={formdata.phone} name={'phone'} onChange={e => onSubmitHandler(e)} type="tel" placeholder={'Телефон номер...'} className={'input'}/>
                                                        </div>
                                                        <div className="field">
                                                            {
                                                                fastorder.name!=="" && fastorder.phone!==""?
                                                                    <button type={'submit'} className={'button'}>Отправить</button>:
                                                                    <button className={'button opacity-50'} disabled>Отправить</button>

                                                            }

                                                        </div>
                                                    </form>
                                                </ModalBody>
                                            </Modal>


                                        </div>
                                    </div>
                                </div>
                            </form>
                            <Link
                                to={"/product/"+`${data1.id}`}
                                className="text-decoration-none bord d-flex justify-content-center mt-4"
                            >
                                <button className="btn btn-danger">
                                    Больше информации о товаре
                                </button>
                            </Link>
                        </div>
                    ))}


                </ModalBody>
            </Modal>
        </div>
    );
};

export default ModalExample;

