import React, {Component} from 'react';
import {App} from "./FooterResponse";

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render() {
        return (
            <div className="footer">
                <div className="media">
                <div className="footer-link">
                    <div className="link-one">
                        <ul>
                            <li>Покупателям</li>
                            <li>
                                <a href="#">Как сделать заказ</a>
                            </li>
                            <li>
                                <a href="#">Способы оплаты</a>
                            </li>
                            <li>
                                <a href="#">Доставка</a>
                            </li>
                            <li>
                                <a href="#">Возврат товара</a>
                            </li>
                            <li>
                                <a href="#">Возврат денежных средств</a>
                            </li>
                            <li>
                                <a href="#">Правила продажи</a>
                            </li>
                            <li>
                                <a href="#">Правила пользования торговой
                                    <br/>
                                    площадкой</a>
                            </li>
                            <li>
                                <a href="#">Вопросы и ответы</a>
                            </li>
                        </ul>

                    </div>
                    <div className="link-two">
                        <ul>
                            <li>Партнерам</li>
                            <li>
                                <a href="#">Продавайте на Wildberries</a>
                            </li>
                            <li>
                                <a href="#">Перевозчикам</a>
                            </li>
                            <li>
                                <a href="#">Откройте пункт выдачи</a>
                            </li>
                        </ul>
                        <ul>
                            <li>Наши проекты</li>
                            <li>
                                <a href="#">ЗОЖ и спорт</a>
                            </li>
                            <li>
                                <a href="#">Детям</a>
                            </li>
                            <li>
                                <a href="#">Трудоустройство</a>
                            </li>
                        </ul>
                    </div>
                    <div className="link-three">
                        <ul>
                            <li>Компания</li>
                            <li>
                                <a href="#">О нас</a>
                            </li>
                            <li>
                                <a href="#">Реквизиты</a>
                            </li>
                            <li>
                                <a href="#">Пресс-центр</a>
                            </li>
                            <li>
                                <a href="#">Контакты</a>
                            </li>
                            <li>
                                <a href="#">Вакансии</a>
                            </li>
                            <li>
                                <a href="#">Bug Bounty</a>
                            </li>
                        </ul>
                    </div>
                    <div className="link-four">
                        <ul>
                            <li>Мы в соцсетях</li>
                            <li>
                                <a href="#">Вконтакте</a>
                            </li>
                            <li>
                                <a href="#">Facebook</a>
                            </li>
                            <li>
                                <a href="#">Twitter</a>
                            </li>
                            <li>
                                <a href="#">Одноклассники</a>
                            </li>
                            <li>
                                <a href="#">YouTube</a>
                            </li>
                            <li>
                                <a href="#">Instagram</a>
                            </li>
                        </ul>
                    </div>
                    <div className="link-five">
                        <ul>
                            <li>Мобильные устройства</li>
                            <li className="market">
                                <a href="#">

                                </a>
                            </li>
                            <li className="market2">
                                <a href="#">

                                </a>
                            </li>
                            <li className="market3">
                                <a href="#">

                                </a>
                            </li>
                            <li>
                                <a href="#">Перейти на мобильную
                                    <br/>
                                    версию сайта</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-footer">
                    <div className="footer-footer-commit">
                        2004-2021 © Wildberries — модный интернет-магазин одежды, обуви и аксессуаров.
                        <br/>
                        Все права защищены. Доставка по всей России.
                    </div>
                    <div className="footer-footer-link">
                        <a href="#">
                            Проверка совместимости
                        </a>
                    </div>
                    <div className="footer-footer-icon">
                        <img src="images/visa.jpg" alt=""/>
                        <img src="images/mastercard.jpg" alt=""/>
                        <img src="images/mir.jpg" alt=""/>
                    </div>
                </div>

                <div className="oval2"></div>

                </div>

                <App/>

            </div>
        );
    }
}

export default Footer;