import React from 'react'
import s from './Works.module.css';


function Works(props) {
    return (
        <div className={s.work}>
            <div className={s.icon} style={props.style}>
               <a className={s.a} href="https://www.google.ru/" > <span className={s.imageTitle}>View Project</span> </a>
            </div>
            <div className={s.titleDescription}>
                <h4> {props.title} </h4>
                <span> {props.description}</span>
            </div>
        </div>
    )
}

export default Works;
