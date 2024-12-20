import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { SiReact } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { HiDocumentText } from "react-icons/hi2";

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const linkedInUrl = 'https://www.linkedin.com/in/bhumikavasanta/';
    const resumeUrl = 'https://drive.google.com/file/d/1cj7xKNwatUXxpOQcAMwTLyqHcjrG9odk/view?usp=sharing';
    const gitHubUrl = 'https://github.com/bhumikavasanta';

    const openLinkedIn = () => {
        window.open(linkedInUrl, "_blank")
    }

    const openGitHub = () => {
        window.open(gitHubUrl, "_blank")
    }

    const openResume = () => {
        window.open(resumeUrl, "_blank")
    }

    return (
        <div className='nav'>
            <div className='navContainer'>
                <div className='navLogo'>
                    <a className='mainIcon'>
                        <SiReact size="3rem" />
                        <span className='portfolioIcon'>Portfolio</span>
                    </a>
                </div>
                <div className='mobileIcon'>
                    <FaBars
                        onClick={() => {
                            setOpen(!open);
                        }
                        }
                    />
                </div>
                <div className='buttonContainer'>
                    <GrLinkedin onClick={openLinkedIn} className='logos' />
                    <GrGithub onClick={openGitHub} className='logos' />
                    <HiDocumentText onClick={openResume} className='logos' />
                </div>
            </div>
            {
                open && (
                    <div className='mobileMenu'>
                        <a className='mobileMenuItems' href={resumeUrl} onClick={() => { setOpen(!open); }}>
                            Resume
                        </a>
                        <a className='mobileMenuItems' href={linkedInUrl} onClick={() => { setOpen(!open); }}>
                            LinkedIn
                        </a>
                        <a className='mobileMenuItems' href={gitHubUrl} onClick={() => { setOpen(!open); }}>
                            GitHub
                        </a>
                    </div>
                )
            }
        </div>
    );
};


export default Navbar;
