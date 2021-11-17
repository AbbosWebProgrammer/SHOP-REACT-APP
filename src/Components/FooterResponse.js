import React from "react";

const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <div className="accordion-wrapper">

            <div
                className={`accordion-title ${isOpen ? "open" : ""}`}
                onClick={() => setOpen(!isOpen)}
            >
                {title}
            </div>
            <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                <div className="accordion-content">{children}</div>
            </div>
        </div>
    );
};
export const App = () => (
    <div className="col-12 resmedia">
        <Accordion title="Why is the sky blue?">
            <ul className="list-group">
                <li className="list-group-item">Как сделать заказ</li>
                <li className="list-group-item">Способы оплаты</li>
                <li className="list-group-item">Доставка</li>
                <li className="list-group-item">Возврат товара</li>
                <li className="list-group-item">Возврат денежных средств</li>
                <li className="list-group-item">Правила продажи</li>
                <li className="list-group-item">Правила пользования торговой</li>
                <li className="list-group-item">Вопросы и ответы</li>
            </ul>
        </Accordion>
        <Accordion title="What's It Like Inside Jupiter?">
            <ul className="list-group">
                <li className="list-group-item">Как сделать заказ</li>
                <li className="list-group-item">Способы оплаты</li>
                <li className="list-group-item">Доставка</li>
                <li className="list-group-item">Возврат товара</li>
                <li className="list-group-item">Возврат денежных средств</li>
                <li className="list-group-item">Правила продажи</li>
                <li className="list-group-item">Правила пользования торговой</li>
                <li className="list-group-item">Вопросы и ответы</li>
            </ul>
        </Accordion>
        <Accordion title="What Is a Black Hole?">
            <ul className="list-group">
                <li className="list-group-item">Как сделать заказ</li>
                <li className="list-group-item">Способы оплаты</li>
                <li className="list-group-item">Доставка</li>
                <li className="list-group-item">Возврат товара</li>
                <li className="list-group-item">Возврат денежных средств</li>
                <li className="list-group-item">Правила продажи</li>
                <li className="list-group-item">Правила пользования торговой</li>
                <li className="list-group-item">Вопросы и ответы</li>
            </ul>
        </Accordion>
        <Accordion title="What Is a Black Hole?">
            <ul className="list-group">
                <li className="list-group-item">Как сделать заказ</li>
                <li className="list-group-item">Способы оплаты</li>
                <li className="list-group-item">Доставка</li>
                <li className="list-group-item">Возврат товара</li>
                <li className="list-group-item">Возврат денежных средств</li>
                <li className="list-group-item">Правила продажи</li>
                <li className="list-group-item">Правила пользования торговой</li>
                <li className="list-group-item">Вопросы и ответы</li>
            </ul>
        </Accordion>
        <div className=" lineres">
        <div className="link-five">
            <div className="res d-flex ms-0">
                <li className="market">
                    <a href="#">

                    </a>
                </li>
                <li className="market2 ms-2">
                    <a href="#">

                    </a>
                </li>
                <li className="market3 ms-2">
                    <a href="#">

                    </a>
                </li>

            </div>
        </div>
        <div>
            <div className="set">
                <div className="messenjer"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFPDSU_YYw1NbOqF7i09GFYhCF8089VADRA&usqp=CAU" alt=""/></div>
                <div className="messenjer"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFPDSU_YYw1NbOqF7i09GFYhCF8089VADRA&usqp=CAU" alt=""/></div>
                <div className="messenjer"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFPDSU_YYw1NbOqF7i09GFYhCF8089VADRA&usqp=CAU" alt=""/></div>
                <div className="messenjer"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFPDSU_YYw1NbOqF7i09GFYhCF8089VADRA&usqp=CAU" alt=""/></div>
                <div className="messenjer"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFPDSU_YYw1NbOqF7i09GFYhCF8089VADRA&usqp=CAU" alt=""/></div>
            </div>
        </div>
        </div>
        <div className="d-flex justify-content-between text-light">
            <div className="footer-footer-icon">
                <img src="images/visa.jpg" alt=""/>
                <img src="images/mastercard.jpg" alt=""/>
                <img src="images/mir.jpg" alt=""/>
            </div>
            <div><h6> 2004-2021 © Wildberries</h6></div>

        </div>
    </div>
);