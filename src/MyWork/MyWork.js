import React from 'react'
import s from './MyWork.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Works from "./Works/Works";


function MyWork() {
    return (
        <div className={s.myWorkBlock}>
            <div className={`${styleContainer.container} ${s.myWorkContainer}`}>
                <h3 className={s.title}> My Works</h3>
                <div className={s.works}>
                <Works title={'container1'} description={'Learn modern React from scratch, and practice'}/>
                <Works title={'container2'} description={'Learn modern React from scratch, and practice'}/>
                </div>
            </div>
        </div>
    )
}

export default MyWork;
