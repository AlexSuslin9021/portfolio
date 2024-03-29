import React from 'react'
import s from './Skill.module.scss';
import {Description} from "../../Description/Description";


function Skill(props) {
    return (
        <div className={s.skill} style={props.style}>

            <div className={s.box}>
                <img src={props.src} alt=""/>
                <h3>{props.title}</h3>
                <span className={s.text}>{props.description}</span>
            </div>
        </div>
    )
}

export default Skill;
