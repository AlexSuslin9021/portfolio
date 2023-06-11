import React from 'react'
import './App.module.scss';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyWork from "./MyWork/MyWork";
import {Contact} from "./contact/Contact";
import {Footer} from "./footer/Footer";
import Nav from "./nav/Nav";
import CustomizedSnackbars from "./snaskBar";


function App() {
    const [open, setOpen] = React.useState(false);
    return (
        <div>
            {open && <CustomizedSnackbars open={open} setOpen={setOpen}/>}
            <Header/>
            <Main/>
            <Skills/>
            <MyWork/>
            <Contact setOpen={setOpen}/>
            <Footer/>
        </div>
    )
}

export default App;
