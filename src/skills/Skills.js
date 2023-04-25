import React from 'react'
import s from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import {Title} from "../title/Title";
import react from '../assets/image/logo/react.svg'
import html from '../assets/image/logo/html.svg'
import css from '../assets/image/logo/css.svg'
import story from '../assets/image/logo/storyBook.svg'
import type from '../assets/image/logo/typeScript.svg'
import unit from '../assets/image/logo/unitTest.svg'
import formik from '../assets/image/logo/formik.svg'
import reduxToolkit from '../assets/image/logo/reduxToolkit.svg'
import restApi from '../assets/image/logo/restAPI.svg'
import JS from '../assets/image/logo/javaScript.svg'
import {Description} from "../Description/Description";


function Skills() {
    const htmlClass={
        borderColor:`lightskyblue`,
        color:`lightskyblue`
    }
    const cssClass={
        borderColor:`#e65100`,
        color:`#e65100`
    }
    const unitStory={
        borderColor:`#ff4785`,
        color:`#ff4785`
    }
    const js={
        borderColor:`#f1dc50`,
        color:`#f1dc50`
    }
    const formikC={
        borderColor:`#0051cc`,
        color:`#0051cc`
    }
    const reduxC={
        borderColor:`#764abc`,
        color:`#764abc`
    }
    const typeC={
        borderColor:`#3178c6`,
        color:`#3178c6`
    }
    const restApiC={
        borderColor:`#0096d6`,
        color:`#0096d6`
    }

    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}` }>
                <Title title={'Skills'}/>
                <Description/>
               <div className={s.skills}>
               <Skill title={'HTML'} description={'Basic knowledge HTML5.'} src={html} style={cssClass}/>
               <Skill title={'CSS'} description={'Basic knowledge css, Animation, flexbox, Scss, media query.'} src={css} style={htmlClass}/>
                   <Skill title={'React'} description={'Hook, Hoc,VirtualDom,  functional and class component.'} src={react} style={htmlClass}/>
               <Skill title={'ReduxToolkit'} description={'Redux and Redux TLK. Thunk.'} src={reduxToolkit} style={reduxC}/>
                   <Skill title={'JavaScript'} description={'Basic knowledge,  Promise, async/await, type server requests, array and object method …'} src={JS} style={js}/>
               <Skill title={'Storybook'} description={'Component create for interface.'} src={story} style={unitStory}/>
               <Skill title={'TypeScript'} description={'All projects write on typescript.'} src={type} style={typeC}/>
               <Skill title={'RestApi'} description={'Type requests, Request, Response, коды ответа HTTP.'} src={restApi} style={restApiC}/>
               <Skill title={'Formik'} description={'Basic knowledge Formik.'} src={formik} style={formikC}/>
               <Skill title={'Unit'} description={'JavaScript unit testing allows you to test small, self-contained units of JavaScript code, which are part of a web page or web application.'} src={unit} style={unitStory}/>


               </div>
            </div>
        </div>
    )
}

export default Skills;
