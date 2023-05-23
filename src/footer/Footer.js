import React from 'react'
import s from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import what from '../assets/image/logo/WAsvg.svg'
import mail from    '../assets/image/logo/email.svg'
import location from    '../assets/image/logo/location-pin-svgrepo-com.svg'
import Fade from 'react-reveal/Fade';

export function Footer() {
    return (
        <div id={'footer'} className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footer} `}>
             <Fade bottom>
                <div className={s.cont}>
                <div className={s.iconContainer}>
                    <div  className={s.icon}> <img src={what} alt=""/> <span> 8-905-771-16-16</span></div>
                    <div  className={s.icon}> <img src={mail} alt=""/> <span> alexSuslin@inbox.ru</span></div>
                    <div  className={s.icon}> <img src={location} alt=""/> <span> Moscow, Tatianin Park</span></div>
                </div>
                    <div className={s.nav}>

                            <a href=""> About </a>
                            <a href=""> My skills </a>
                            <a href=""> Portfolio </a>
                            <a href=""> Contact </a>


                    </div>
                </div>
                {/*<span className={s.bottom} >Все права защищены 2023</span>*/}
             </Fade>

            </div>
        </div>)
}


