import React from "react";
import { BsFillCloudDrizzleFill } from "react-icons/bs";

export default function Header() {

    const data = [
        {location: "/", name: "Home"}];
    return (
        <div className="header">
            <h1 className="header-text"> { <BsFillCloudDrizzleFill /> } Weather</h1>
            <ul>
            {data.map(({ location, name }, index) => (
            <a key={index} href={location}>
                 {name}
            </a>
            ))}
            </ul>
        </div>
    )
}