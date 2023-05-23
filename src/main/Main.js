import React from 'react'
import s from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import photo from '../assets/A&A.jpg'
import ReactTypingEffect from 'react-typing-effect';

function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <h1 className={s.text}>

                    <span className={s.hi}>Hello, I'm Alex, </span>
                    {/*<span className={s.hi}>I'm Alex,</span>*/}
                    <span className={s.front}>
                    <ReactTypingEffect
                        text={["Frontend Developer"]}
                        speed={100}
                    />
                        </span>
                </h1>
                <div className={s.photo}><img src={photo} alt=""/></div>
            </div>

        </div>
    )
}

export default Main;
