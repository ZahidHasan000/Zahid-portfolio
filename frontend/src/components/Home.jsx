// import React from 'react'
// import Navbar from './Navbar'
// import Animation from './Animation'
// // import './Home.css'
// import BackGroundImage from './BackGround'


// function Home() {

//     return (
//         <div>
//             <Navbar />
//             <BackGroundImage Animation={<Animation />}/>


//         </div>

//     )
// }

// export default Home


// Home.js
// import { useEffect } from 'react'
// import Navbar from './Navbar'
// // import Animation from './Animation'
// import BackGround from './BackGround' // Import the modified BackGround component
// import Sidebar from './SideBar'
// // import TypeWriter from './Typewriter';
// import Typewriter from 'typewriter-effect';
// import './Home.css'

// function Home() {

//     // const words = [
//     //     "Hi",
//     //     // `I'm Olu\u0301waka\u0301yo\u0300d\u00E9`,
//     //     `I'm Zahid Hasan`,
//     //     "A Software Developer ",
//     //     "A Designer ",
//     //     "Open source Contributor"
//     // ];
//     const texts = '';

//     <Typewriter
//         options={{
//             strings: texts,
//             autoStart: true,
//             cursor: '!',
//             loop: true,
//             deleteSpeed: 50,
//         }}
//     />

//     useEffect(() => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//         return () => {
//             // Cleanup if needed
//         };
//     }, []);

//     return (
//         <div>
//             <Navbar />
//             <Sidebar />
//             <BackGround />
//             <section className="top">
//                 <div className="caption">
//                     <div className="box">
//                         {/* <h2><TypeWriter className="" texts={words} /> </h2> */}
//                         {/* <h3 className="l"> 👋 </h3> */}
//                         <h4>I am</h4>
//                         <h1 id='name'>Zahid Hasan</h1>
//                         <p className='small'>A Full Stack Developer</p>
//                     </div>
//                 </div>
//                 {/* <a className="arrow" href="#portfolio"> <img width="70px" height="70px" src={} alt="down-arrow" /></a> */}
//             </section>
//             {/* <Animation /> Render the Animation component inside the BackGround component */}
//             {/* </BackGround> */}
//         </div>
//     )
// }

// export default Home



import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import BackGround from './BackGround';
import Sidebar from './SideBar';
import Typewriter from 'typewriter-effect'; // Import the Typewriter component
import './Home.css';

function Home() {
    const [texts] = useState(['A Full Stack Developer', 'A Software Engineer', 'A Problem Solver', 'A Business Analyst']); // Define an array of strings for the Typewriter effect

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return () => {
            // Cleanup if needed
        };
    }, []);

    return (
        <div className="home min-h-screen">
            <Navbar />
            <Sidebar />
            <BackGround />
            <div className="caption">

                <div className="box custom-border overflow-hidden">
                    <div className="custom-text text-left px-0">
                        <h4 className="text text-white">
                            <Typewriter
                                options={{
                                    strings: ["I'm"],
                                    autoStart: true,
                                    cursor: '',
                                    loop: false, // Disable looping for the introductory text
                                    deleteSpeed: Infinity,
                                }}
                            />
                        </h4>
                    </div>
                    <div className="custom-name text-center">
                        <h1 id='name' className="text text-white">
                            <Typewriter
                                options={{
                                    strings: ["Zahid Hasan"],
                                    autoStart: true,
                                    cursor: '.',
                                    loop: false,
                                    deleteSpeed: Infinity,
                                }}
                            />
                        </h1>
                    </div>
                    <div className="custom-pos text-right px-11">
                        <div className="text-white">
                            <Typewriter
                                options={{
                                    strings: texts,
                                    autoStart: true,
                                    cursor: '!',
                                    loop: true,
                                    deleteSpeed: 50,
                                }}
                                className="text-base md:text-lg lg:text-xl xl:text-2xl "
                            />
                        </div>
                    </div>
                </div>


            </div>
            {/* </section> */}
        </div>
    );
}

export default Home;

