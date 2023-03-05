import React from 'react'
import s from './Works.module.css';
import styleContainer from '../../common/styles/Container.module.css'



function Works(props) {
    return (
        <div  className={s.work}>
            <div className={s.icon}></div>
            <button> Watching </button>
            <h4> {props.title} </h4>
            <span> {props.description}</span>
        </div>
    )
}

export default Works;
