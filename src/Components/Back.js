import React, {Component} from 'react';
import Nav from "./Nav";
import MainModal from "./MainModal";
import Footer from "./Footer";


class Back extends Component {
    render() {
        return (
            <div >

                <Nav/>
                <p className='d-none'></p>
                <MainModal/>

                <div className='w-50 back'>
                    <h1>Описание</h1>
                    <h6 className='mt-4'>Силиконовый чехол Apple- отличное дополнение к вашему iPhone 12 Pro Max. Он плотно прилегает к
                        кнопкам громкости и режима сна, точно повторяет контуры телефона. Мягкая подкладка из</h6>
                    <h6 className='text-danger mb-5 mt-3'>Развернуть описание</h6>

                    <tr>
                        <th><span>Совместимость ----------------------------------</span></th>
                        <td> Apple iPhone 12 Pro Max; iPhone iPhone 12 Pro Max; Apple iPhone 12 PRO MAX
                            6.7; Iphone 12 Pro Max (6.7)
                        </td>
                    </tr>
                    <tr>
                        <th>Тип чехлов ---------------------------------------------</th>
                        <td>защитный кейс</td>
                    </tr>
                    <tr>
                        <th>Вес товара с упаковкой (г) ----------------------------------</th>
                        <td>50 г</td>
                    </tr>

                    <tr>
                        <th>Высота предмета ----------------------------------</th>
                        <td>16.5 см</td>
                    </tr>
                    <tr>
                        <th>Ширина предмета ----------------------------------</th>
                        <td>8.19 см</td>
                    </tr>
                    <tr>
                        <th>Ширина упаковки ----------------------------------</th>
                        <td>8.7 см</td>
                    </tr>
                    <tr>
                        <th>Высота упаковки ----------------------------------</th>
                        <td> 17.5 см</td>
                    </tr>

                    <h5 className='text-danger mt-4 mb-4'>Развернуть характеристики</h5>
                    <p className='inf'>Информация о технических характеристиках, комплекте поставки, стране изготовления и внешнем виде
                        товара носит справочный характер и основывается на последних доступных сведениях от продавца</p>


                </div>
                <Footer/>
            </div>
        );
    }
}

export default Back;