import React from 'react';
import s from "./Home.module.scss"

const Home = () => {
    return (
        <div className={s.home}>
            <div className={s.home__container}>
                <div className={s.home__image}><img src="#" alt="avatar"/></div>
                <h1 className={s.home__name}>Buyakova Victoria</h1>
                <div className={s.home__description}>I'm a Freelancer Front-end React Developer with over
                    6 months of professional experience in this field.
                </div>
                <nav className={s.home__socialLinks}>social links</nav>
                <a href="#" className={s.home__button}>Download CV</a>
            </div>
        </div>
    );
};

export default Home;