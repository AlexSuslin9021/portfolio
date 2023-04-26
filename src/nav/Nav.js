import React from 'react'
import s from './Nav.module.scss';
import style from '../common/styles/Container.module.css'

function Nav() {
    return (
<div className={style.container}>
        <div className={s.nav}>
            <a href=""> About </a>
            <a href=""> My skills </a>
            <a href=""> Portfolio </a>
            <a href=""> Contact </a>

        </div>
</div>
          )
}

export default Nav;
