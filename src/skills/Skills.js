import React from 'react'
import s from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}` }>
                <h2 className={s.title}>Skills </h2>
               <div className={s.skills}>
               <Skill title={'HTML'} description={'Fun fact: all websites use HTML — even this one. It’s a fundamental part of every web developer’s toolkit.'}/>
               <Skill title={'CSS'} description={'You’ll find learning CSS essential in styling websites. Web developers use it to build on basic HTML and add personality to plain text pages.'}/>
               <Skill title={'React'} description={'Learn modern React from scratch, and practice in an intuitive environment. .'}/>

               </div>
            </div>
        </div>
    )
}

export default Skills;
