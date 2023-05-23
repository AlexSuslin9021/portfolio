import React from 'react'
import s from './MyWork.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Works from "./Works/Works";
import {Title} from "../title/Title";
import todoImage from '../assets/image/todo.jpeg'
import socialNet from '../assets/image/social.jpeg'
import {Description} from "../Description/Description";
import Fade from 'react-reveal/Fade';


function MyWork() {
    const social = {
        backgroundImage: `url(${socialNet})`
    }
    const todo = {
        backgroundImage: `url(${todoImage})`
    }
    return (
        <div className={s.myWorkBlock}>
            <div className={`${styleContainer.container} ${s.myWorkContainer}`}>
                <Fade top>
                    <Title title={'My Works'}/>
                    <Description
                        text={'These are my projects. They reflect the skills that I currently have. As my knowledge improves, new technologies will be added to projects.'}/>
                </Fade>
                <Fade right>
                    <div className={s.works}>
                        <Works style={social} title={'Social network'}
                               description={'Stack: React, Redux, Thunk, Axios, Hook form, TypeScript, unitTest, Storybook, class component,React-Router-dom'}/>
                        <Works style={todo} title={'Todolist'}
                               description={'Stack: React, Redux TLK, Thunk, Axios, Hook form, TypeScript, unitTest, Storybook, Formik, Material UI,React-Router-dom '}/>
                    </div>
                    </Fade>
            </div>
        </div>
    )
}

export default MyWork;
