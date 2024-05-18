// import React from 'react';
import BackGroundImage from '../../src/assets/bg.png';
import './BackGround.css'; // Import your existing CSS file
import Animation from './Animation';


function BackGround() {
    return (
        <div className="relative">
            <div className="fixed top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center z-[-1] shadow-overlay" style={{ backgroundImage: `url(${BackGroundImage})` }}>

                <Animation />

            </div>

            {/* <div className="icons-container m-24 p-24">
                <ul className="links">
                    <li className="icon"><a href="https://github.com/ZahidHasan000"><i className="fa fa-github"></i></a></li>
                    <li className="icon"><a href="https://twitter.com/Zahid1751403060"><i className="fa fa-twitter"></i></a></li>
                    <li className="icon"><a href="https://www.facebook.com/profile.php?id=100006849996705"><i className="fa fa-facebook"></i></a></li>
                    <li className="icon"><a href="https://www.linkedin.com/in/md-zahid-hasan-6ba380117/"><i className="fa fa-linkedin"></i></a></li>
                    <li className="icon"><a href="https://wa.me/+8801521463943"><i className="fa fa-whatsapp"></i></a></li>
                </ul>
            </div> */}

        </div>


    );
}

export default BackGround;


