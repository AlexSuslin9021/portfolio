import React from 'react'
import s from './Contact.module.css';
import styleContainer from '../common/styles/Container.module.css';

export function Contact() {
    return (
        <div className={s.contactBlock}>
            <div className={`${styleContainer.container} ${s.contact} `}>
                <span className={s.title}> Contact</span>
                <form action="" className={s.form}>

                   <input type="text"/>
                   <input type="text"/>
                    <textarea ></textarea>

                </form>
                <button>Отправить</button>
            </div>
        </div>)
}


