import React from 'react'
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyWork from "./MyWork/MyWork";
import Test from "./TEST/Test";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <MyWork/>
            <Test/>
        </div>
    )
}

export default App;
