import React from 'react'
import s from './MyWork.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Works from "./Works/Works";
import {Title} from "../title/Title";
import todoImage from '../assets/image/todo.jpeg'
import socialNet from '../assets/image/social.jpeg'
import {Description} from "../Description/Description";


function MyWork() {
    const social={
        backgroundImage: `url(${socialNet})`
    }
    const todo={
        backgroundImage: `url(${todoImage})`
    }
    return (
        <div className={s.myWorkBlock}>
            <div className={`${styleContainer.container} ${s.myWorkContainer}`}>
                <Title title={'My Works'}/>
                {/*<h2 className={s.title}> My Works</h2>*/}
                <Description/>
                <div className={s.works}>
                <Works style={social} title={'container1'} description={'Learn modern React from scratch Learn modern React from scratch'}/>
                <Works style={todo} title={'container2'} description={'Learn modern React from scratch Learn modern React from scratch, '}/>
                </div>
            </div>
        </div>
    )
}

export default MyWork;
