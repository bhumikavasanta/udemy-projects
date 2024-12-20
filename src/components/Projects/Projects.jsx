import React from 'react';
import { projects } from '../../data/data';
import Card from './Card';
import './Projects.css';

const Projects = () => {
    return (
        <div id="projects" className='projectContainer'>
            <div className='projectWrapper'>
                <div className='projectTitle'>
                    Udemy Projects
                </div>
                <div className='cardContainer'>
                    {
                        projects.map((project) => {
                            return (
                                <Card
                                    project = {project}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};


export default Projects;