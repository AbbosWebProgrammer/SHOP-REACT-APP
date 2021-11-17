import React, { useState } from "react";
import Navbar from "../Nav";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { API_PATH } from "../../tools/constans";

const Korzina = () => {
    let [number, setNumber] = useState(1);
    let [price, setPrice] = useState({
        price: "",
    });

    const inc = () => {
        setNumber((prevNum) => prevNum + 1);
    };
    const dec = () => {
        setNumber((prevNum) => {
            if (prevNum < 2) {
                return (prevNum = 1);
            } else {
                return prevNum - 1;
            }
        });
    };

    let orders = JSON.parse(localStorage.getItem("basket"));

    const foo = (data, key) => {
        return [...new Map(data.map((x) => [key(x), x])).values()];
    };

    let uniqueOrders = orders && foo(orders, (it) => it.id);

    return (
        <React.Fragment>
            <Navbar />
            <div className="main-cart">
                <div className="left-side">
                    <div className="basket">
                        <h1 className="title">
                            Корзина{" "}
                            <sup className="sup-basket">
                                {uniqueOrders ? uniqueOrders.length : 0}
                            </sup>
                        </h1>
                        {/*<label htmlFor="o-c" className="handler">*/}
                        {/*    <i className="fas fa-list"></i>*/}
                        {/*</label>*/}
                        {/*<input type="checkbox" id="o-c" className="o-c" />*/}
                        <div className="orders-list">
                            {uniqueOrders &&
                            uniqueOrders.map((order) => (
                                <div className="orders-list-item">
                                    <div className="order-image">
                                        <img src={API_PATH + order.colors[0].image[0].image} />
                                    </div>
                                    <div className="order-content">
                                        <span>{order.productname}</span>
                                        <span>Цветь: {order.currentColor}</span>
                                        <span>Размер: {order.size.ordersize}</span>
                                        <span>Бренд: {order.brand}</span>
                                    </div>
                                    <div className="order-inc-dec">
                      <span className="dec" onClick={dec}>
                        <i className="fas fa-minus"></i>
                      </span>
                                        <span className="num">{number}</span>
                                        <span className="inc" onClick={inc}>
                        <i className="fas fa-plus"></i>
                      </span>
                                    </div>
                                    <div className="order-price">
                                        <h3>{number * order.price} сум</h3>
                                        <del>{number * order.oldprice} сум</del>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="send">
                        <h1 className="title">Способ доставки</h1>
                        <p className="send-way">Выбрать адрес доставки</p>
                    </div>
                    <div className="forms">
                        <div className="forms_way">
                            <h1 className="title">Способ оплаты</h1>
                            <p className="address">
                                Для выбора способа оплаты, необходимо выбрать адрес доставки
                            </p>
                        </div>
                        <div className="forms_form">
                            <h1 className="title">Ваши данные</h1>
                            <form className="form-data">
                                <div className="n-sr">
                                    <div className="form-field w">
                                        <label htmlFor="name" className="form-field-name">
                                            Имя
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-field-input input"
                                        />
                                    </div>
                                    <div className="form-field w">
                                        <label htmlFor="surname" className="form-field-name">
                                            Фамилия
                                        </label>
                                        <input
                                            type="text"
                                            id="surname"
                                            name="surname"
                                            className="form-field-input input"
                                        />
                                    </div>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="tel" className="form-field-name">
                                        Контактный телефон
                                    </label>
                                    <input
                                        type="number"
                                        id="tel"
                                        name="tel"
                                        className="form-field-input input"
                                    />
                                </div>

                                <div className="form-field">
                                    <label htmlFor="email" className="form-field-name">
                                        Электронная почта
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-field-input input"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="form-order">
                        <div className="total">
                            <h1 className="title">Итого</h1>
                            <p className="money">0 ₽</p>
                        </div>
                        <div className="order-send">
                            <p>Товары, 0 шт.</p>
                            <p>0 ₽</p>
                        </div>
                        <div className="order-address">
              <span className="order-address-title">
                Доставка:{" "}
                  <a className="link" href="#">
                  Выбрать адрес доставки
                </a>
              </span>
                        </div>

                        <button className="button">ЗАКАЗАТЬ</button>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Korzina;