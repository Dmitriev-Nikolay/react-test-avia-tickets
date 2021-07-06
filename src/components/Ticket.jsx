import React from 'react';
import clockLogo from '../assets/svg/clock.svg';
import rightArrow from '../assets/svg/right-arrow.svg';

const Ticket = () => {
    return (
        <div className="ticket-block">
            <div className="ticket-block__head">
                <div className="ticket-block__head-title-airlines">
                </div>
                <div className="ticket-block__head-price">
                    <span>10000 Р</span>
                    <p>Стоимость для одного взрослого пассажира</p>
                </div>
            </div>
            <section className="ticket-block__to">
                <div className="ticket-block__to-direction">
                    <p>город</p>
                    <p>аэропорт</p>
                    <span>код аэропорта</span>
                    <img src={ rightArrow } alt="right-arrow" width="20" height="20" />
                </div>
                <div className="ticket-block__to-data-time">
                    <p>время вылета</p>
                    <span>дата вылета</span>
                    <div>
                        <img src={clockLogo} alt="clock-logo" width="20" height="20" />
                        <p>время в полете</p>
                    </div>
                    <span>дата прилета</span>
                    <p>время прилета</p>
                    <p>Рейс выполняет:</p>
                </div>
            </section>
            <section className="ticket-block__back">

            </section>
        </div>
    );
};

export default Ticket;