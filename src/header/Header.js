import React from 'react'
import  s from './Header.module.scss';
import Nav from "../nav/Nav";
import {BurgerNav} from "../BurgerNav/BurgerNav";

function Header() {
  return(

  <div className={s.header} >
    <Nav />
    <BurgerNav/>
  </div>
  )
}

export default Header;
