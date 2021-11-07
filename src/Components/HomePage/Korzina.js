import React from 'react';
import Navbar from "../Nav";
import Footer from "../Footer";
import {Link} from "react-router-dom";


const Korzina = () => {
    return (
        <div className="korzina">
            <Navbar/>

            <div className="default  p-5">
            <h1>В корзине пока ничего нет</h1>
            <h5>Начните с главной страницы или воспользуйтесь поиском, чтобы найти что-то конкретное</h5>
                <Link to={"/"}>
                <button type="button" className="btn btn-danger">Перейти на главную</button>
                </Link>
            </div>
            <Footer/>
        </div>
    );
};


export default Korzina;