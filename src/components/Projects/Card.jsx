import React from 'react';
import './Projects.css';

const Card = (props) => {

    const openApp = () => {
        window.open(props.project.webapp, "_blank")
    }

    const openGitHub = () => {
        window.open(props.project.github, "_blank")
    }

    return (
        <div className='cardSkills'>
            <img className='appImage' src={props.project.image} alt="App Image" />
            <div className='appTitle'>
                {props.project.title}
            </div>
            <div className='actions'>
                <button className='view' onClick={openGitHub}>
                    View Code
                </button>
                <button className='view' onClick={openApp}>
                    View Live App
                </button>
            </div>
        </div>
    );
};



export default Card;
