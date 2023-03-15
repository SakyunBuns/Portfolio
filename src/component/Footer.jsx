import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
            <div className="info">
                <a href="https://www.linkedin.com/in/nathaelle-fournier-9828a41a2/" className="lien">
                    <img src="./src/images/Linkedin_Logo.png" alt="Linkedin" className="logo" />
                </a>
                <a href="https://github.com/SakyunBuns" className="lien">
                    <img src="./src/images/github_logo.png" alt="GitHub" className="logo" />
                </a>
                <a href="./" className="lien">Media3</a>
                <a href="#top" className="lien">Top of Page</a>
            </div>
        </div>
    );
}