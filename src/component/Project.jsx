import React from 'react'

export default function Project() {
    let img_src, img_direction;
    return (
        <div>
            <a href={img_direction}><img src={img_src} alt="" className="gallerieImage" /></a>
        </div>
    );
}