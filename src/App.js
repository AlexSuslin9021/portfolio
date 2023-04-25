import React from 'react'
import './App.module.scss';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyWork from "./MyWork/MyWork";
import {Contact} from "./contact/Contact";
import {Footer} from "./footer/Footer";
import Nav from "./nav/Nav";


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <MyWork/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App;
