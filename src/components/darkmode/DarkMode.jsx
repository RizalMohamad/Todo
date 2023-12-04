import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark')
    }
    const setLightkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light')
    }
    const toggleTheme = e => {
        if(e.target.checked) setDarkMode()
        else setLightkMode()
    }
    return (
        <div className='dark-mode'>
            <input
                className='dm-input'
                type='checkbox'
                id='dm-toggle'
                onChange={toggleTheme}
            />
            <label className='dm-label' for='dm-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
