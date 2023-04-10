import React from 'react'
import s from './MyWork.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Works from "./Works/Works";
import {Title} from "../title/Title";


function MyWork() {
    const social={
        backgroundImage:''
    }
    return (
        <div className={s.myWorkBlock}>
            <div className={`${styleContainer.container} ${s.myWorkContainer}`}>
                <Title title={'My Works'}/>
                {/*<h2 className={s.title}> My Works</h2>*/}
                <div className={s.works}>
                <Works title={'container1'} description={'Learn modern React from scratch Learn modern React from scratch'}/>
                <Works title={'container2'} description={'Learn modern React from scratch Learn modern React from scratch, '}/>
                </div>
            </div>
        </div>
    )
}

export default MyWork;
