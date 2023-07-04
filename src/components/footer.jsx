import React from "react";
import Github from '../assets/github.png';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div >
            <a href="https://github.com/chaeriz19/weather" className="footer">
            <img className="imgGithub" src={Github}  />
            
            Made by Chris Ouboter 	&#169;  {currentYear}</a>
        </div>
        
    )
}