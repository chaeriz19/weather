import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();


    return (
        <a href="https://github.com/chaeriz19/weather" className="footer">Made by Chris Ouboter 	&#169;  { currentYear}</a>
    )
}