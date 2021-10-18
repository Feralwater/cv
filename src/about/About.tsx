import React from 'react';
import s from "./About.module.scss";

const About = () => {
    return (
        <div className={s.about}>
            <div className={s.about__container}>
                <div className={s.about__title}>About me</div>
                <div>
                    <div>
                        <div>
                            <p>Hi, I`m Victoria</p>
                            <p> I'm a Freelancer Front-end Developer with over 6 months of experience.
                                I'm from Minsk. I code and create web elements for amazing people around the
                                world. I like work with new people.
                            </p>
                        </div>
                        <div>
                            <p>What is my skills?</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>React.Js</p>
                        </div>
                        <div>something</div>
                        <a href="#">More</a>
                    </div>
                    <div>
                        <img src="#" alt="my photo"/>
                        <div>
                            <div>6+ Months</div>
                            <span>Of Experience</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;