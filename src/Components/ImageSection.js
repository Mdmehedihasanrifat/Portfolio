import React from 'react';
import about from '../img/87616112_1079316515737335_7206605933256900608_o.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am <span>MD Mehedi Hasan</span></h4>
                <p className="about-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptatum necessitatibus perferendis numquam dolorem cumque facilis.
                    Desir per po la ta doso vi slone ve?
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>:Md Mehedi Hasan</p>
                        <p>: 23</p>
                        <p>: Bangladeshi</p>
                        <p>: Bangla, English</p>
                        <p>:Bashundhara residential area Dhaka</p>
                        <p>: Bangladesh</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
