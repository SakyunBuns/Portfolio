import React from 'react'
import { Link } from 'react-router-dom';

export default function Hamburger() {
    return (
        <div className="hamburger">
            <div className="line-box">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="collapse">
                <Link to="/">Home</Link>
                <Link to="/Project">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </div>
        </div>
    )
}