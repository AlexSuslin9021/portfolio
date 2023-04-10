import React from 'react'
import s from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'


function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <h1 className={s.text}>
                    <span className={s.hi}>Hi, </span>
                    <span className={s.hi} >I'm Alex,</span>
                    <span className={s.front}>Frontend Developer</span>
                </h1>
                {/*<div className={s.photo}></div>*/}
            </div>

        </div>
    )
}

export default Main;
