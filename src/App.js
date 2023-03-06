import React from 'react'
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyWork from "./MyWork/MyWork";
import {Contact} from "./contact/Contact";


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <MyWork/>
            <Contact/>

        </div>
    )
}

export default App;
