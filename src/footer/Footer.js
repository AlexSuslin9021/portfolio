import React from 'react'
import s from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Title} from "../title/Title";

export function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footer} `}>
                <Title title={'Alex Suslin'}/>
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


