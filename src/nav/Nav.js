import React from 'react'
import s from './Nav.module.scss';
import style from '../common/styles/Container.module.css'
import { Link, animateScroll as scroll} from 'react-scroll'

function Nav() {
    return (
<div className={style.container}>
        <div className={s.nav}>
            <Link activeClass={s.active} to="main" spy={true} smooth={true} offset={1} duration={200} delay={1000}>About</Link>
            <Link activeClass={s.active} to="skills" spy={true} smooth={true} offset={1} duration={500} delay={1000}>My skills</Link>
            <Link activeClass={s.active} to="myWork" spy={true} smooth={true} offset={1} duration={500} delay={1000}>Portfolio</Link>
            <Link activeClass={s.active} to="contact" spy={true} smooth={true} offset={1} duration={500} delay={1000}>Contact</Link>
        </div>
</div>
          )
}

export default Nav;
