import React from 'react';
import s from "./Description.module.scss";


export const Description = (props) => {
    return (
        <div className={s.description}>
            <p> {props.text} </p>
        </div>
    );
};

