import React from 'react'
import s from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css';

export function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footer} `}>
                <span className={s.title}>Alex Suslin</span>
                <div className={s.icon}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <span className={s.bottom} >Все права защищены 2023</span>


            </div>
        </div>)
}


