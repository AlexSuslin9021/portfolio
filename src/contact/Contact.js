import React from 'react'
import s from './Contact.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Title} from "../title/Title";

export function Contact() {
    return (
        <div className={s.contactBlock}>
            <div className={`${styleContainer.container} ${s.contact} `}>
                <Title title={'Contact'}/>
                <form action="" className={s.form}>

                   <input  placeholder={'Name'} type="text"/>
                   <input  placeholder={'Email'}  type="text"/>
                    <textarea  placeholder={'Message'} ></textarea>

                </form>
                <button className={s.send}>Send message</button>
            </div>
        </div>)
}


