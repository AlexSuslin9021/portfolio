import React from 'react'
import s from './Title.module.css';


export function Title(props) {

    return<h2 className={s.title}> {props.title}</h2>

}


