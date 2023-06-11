import React, {useState} from 'react'
import s from './Contact.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import {Title} from "../title/Title";
import {Description} from "../Description/Description";
import Fade from 'react-reveal/Fade';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
    const form = useRef();
const [open, setOpen]=useState(false)
    const sendEmail = (e) => {
debugger
        e.preventDefault();

        emailjs.sendForm('service_2xpisdm', 'template_2m5ekjm',  e.target  , '2zdn0LH42svXWP663')
            .then((result) => {
                alert( result.text);
            }, (error) => {
                alert(error.text);
            });
    };

    return (
        <div id={'contact'} className={s.contactBlock}>
            <div className={`${styleContainer.container} ${s.contact} `}>
                <Fade top>
                <Title title={'Contact'}/>
                <Description text={'If you are interested in my resume or you have any questions, you can use the form. I will be glad to discuss cooperation'}/>
               </Fade>
                <Fade left>
                <form ref={form} onSubmit={sendEmail} className={s.form}>
                   <input name='user_name'  placeholder={'Name'} type="text"/>
                   <input name='user_email'   placeholder={'Email'}  type="email"/>
                    <textarea name='message'  placeholder={'Message'} ></textarea>
                  {/*<span className={s.btn} ><input className={s.send} type="submit" value={''} /> </span>*/}
                    <button type={'submit'}  className={s.send}>Send message</button>
                </form>
                {/*<button onClick={sendEmail}  className={s.send}>Send message</button>*/}
                </Fade>
            </div>
        </div>)
}




