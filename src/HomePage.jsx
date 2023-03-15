import React from 'react'
import { useState } from 'react';

function HomePage() {

    const [count, setCount] = useState(0);
    return (
        <div className="body">
            <div className="main">
                <div className="presentation">
                    <h2>Who am I</h2>
                    <p>Student at the <span>Cegep of Vieux Montreal</span>. Currently studying in Computer Science.</p>
                </div>
                <div className="square">
                    <div>
                        <a href="./prog.html"><img src="./src/images/Prog2_TP1.JPG" alt="" className="gallerieImage"/></a>
                    </div>
                    <div>
                        <a href="./web.html"><img src="./src/images/labo7.JPG" alt="" className="gallerieImage"/></a>
                    </div>
                    <div>
                        <a href="https://www.youtube.com/watch?v=8R6S3gXG1Lo&ab_channel=%C3%89coleNAD-UQAC"><img src="./src/images/axo.JPG" alt=""/></a>
                    </div>
                </div>

            </div>
            <div className="footer">
                <div className="info">
                    <a href="https://www.linkedin.com/in/nathaelle-fournier-9828a41a2/" className="lien">linkedin</a>
                    <a href="./" className="lien">Media2</a>
                    <a href="./" className="lien">Media3</a>
                    <a href="#top" className="lien">Top of Page</a>
                </div>
            </div>
        </div>
    )
}

export default HomePage;