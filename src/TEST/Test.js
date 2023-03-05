import React from 'react'
import s from './Test.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Work from "./Work";

function Test() {
    return (
        <div className={s.workBlock}>
            <div className={`${styleContainer.container} ${s.workContainer}`}>
                <h2 className={s.titleWork}> Title</h2>
                <div className={s.myWorks}>
                        <Work title={'Container1'} description={'Fun fact: all websites use HTML'}/>
                        <Work title={'Container2'}  description={'Fun fact: all websites use CSS'}/>
                </div>
            </div>
        </div>


    )
}

export default Test;
