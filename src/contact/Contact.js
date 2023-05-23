import React from 'react'
import s from './Contact.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import {Title} from "../title/Title";
import {Description} from "../Description/Description";
import Fade from 'react-reveal/Fade';

export function Contact() {
    return (
        <div className={s.contactBlock}>
            <div className={`${styleContainer.container} ${s.contact} `}>
                <Fade top>
                <Title title={'Contact'}/>
                <Description text={'If you are interested in my resume or you have any questions, you can use the form. I will be glad to discuss cooperation'}/>
               </Fade>
                <Fade left>
                <form action="" className={s.form}>
                   <input  placeholder={'Name'} type="text"/>
                   <input  placeholder={'Email'}  type="text"/>
                    <textarea  placeholder={'Message'} ></textarea>
                </form>
                <button className={s.send}>Send message</button>
                </Fade>
            </div>
        </div>)
}


