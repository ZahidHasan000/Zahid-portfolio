import { XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import image from '../../src/assets/hasan.jpg';

import html from '../../src/assets/html.svg';
import css from '../../src/assets/css.svg';
import bootstrap from '../../src/assets/bootstrap.svg';
import tailwind from '../../src/assets/tailwind.svg';
import jquery from '../../src/assets/jquery.svg';
import javascript from '../../src/assets/javascript.svg';
import react from '../../src/assets/react.svg';
import remix from '../../src/assets/remix.svg';
import node from '../../src/assets/node.svg';
import three from '../../src/assets/three.svg';
import graphql from '../../src/assets/graphql.svg';
import python from '../../src/assets/python.svg';
import flask from '../../src/assets/flask.svg';
import ai from '../../src/assets/ai.svg';
import da from '../../src/assets/da.svg';
import figma from '../../src/assets/figma.svg';
import shopify from '../../src/assets/shopify.svg';

import './Profile.css';

const Profile = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        // Close the page or perform any action here
        // For example, you can use navigate(-1) to go back to the previous page
        navigate(-1);
    };

    const handlePhoneClick = () => {
        const callerId = "+8801751403060";
        console.log(`Caller ID set to: ${callerId}`);
    };

    const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=h.zahid007.zh59@gmail.com&su=Subject&body=Body`;

    return (
        <div className="profile bg-white">
            <div className="absolute top-0 right-0 p-0">
                <XMarkIcon className="block h-5 w-5 cursor-pointer text-black" aria-hidden="true" onClick={handleClose} />
            </div>

            <div className="picture">
                <img src={image} alt="Profile Image" className="profile-image" />


                <div className='iphone1 pt-5' onClick={handlePhoneClick}>

                    <span className='personal-contact pl-1 flex items-center'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4 mr-1"
                        >
                            <path fillRule="evenodd" d="M2.75 9a.75.75 0 0 1 .75.75v1.69l2.22-2.22a.75.75 0 0 1 1.06 1.06L4.56 12.5h1.69a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 2.75 9ZM2.75 7a.75.75 0 0 0 .75-.75V4.56l2.22 2.22a.75.75 0 0 0 1.06-1.06L4.56 3.5h1.69a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75ZM13.25 9a.75.75 0 0 0-.75.75v1.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l2.22 2.22H9.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75ZM13.25 7a.75.75 0 0 1-.75-.75V4.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22H9.75a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75Z" clipRule="evenodd" />
                        </svg>
                        <span>Personal Contact</span>
                    </span>

                    <span className='iphone2 pl-1 flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                        </svg>
                        <a className='call p-2' href="tel:+8801751403060">+8801751403060</a>
                    </span>

                    <div className='mail'>
                        <span className='email2 pl-1 flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M5.478 5.559A1.5 1.5 0 0 1 6.912 4.5H9A.75.75 0 0 0 9 3H6.912a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H15a.75.75 0 0 0 0 1.5h2.088a1.5 1.5 0 0 1 1.434 1.059l2.213 7.191H17.89a3 3 0 0 0-2.684 1.658l-.256.513a1.5 1.5 0 0 1-1.342.829h-3.218a1.5 1.5 0 0 1-1.342-.83l-.256-.512a3 3 0 0 0-2.684-1.658H3.265l2.213-7.191Z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v6.44l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                            </svg>

                            <a className='call p-2' href={gmailUrl}>h.zahid007.zh59@gmail.com</a>
                        </span>
                    </div>

                </div>


                <div className="skill-chart">
                    <span className='skills pl-1 flex items-center'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4 mr-1"
                        >
                            <path fillRule="evenodd" d="M2.75 9a.75.75 0 0 1 .75.75v1.69l2.22-2.22a.75.75 0 0 1 1.06 1.06L4.56 12.5h1.69a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 2.75 9ZM2.75 7a.75.75 0 0 0 .75-.75V4.56l2.22 2.22a.75.75 0 0 0 1.06-1.06L4.56 3.5h1.69a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75ZM13.25 9a.75.75 0 0 0-.75.75v1.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l2.22 2.22H9.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75ZM13.25 7a.75.75 0 0 1-.75-.75V4.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22H9.75a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75Z" clipRule="evenodd" />
                        </svg>
                        <span>SKILLS</span>
                    </span>


                    <div className="skill-bar">
                        <img src={html} alt="CSS Logo" className="skill-logo h-8 w-8" />
                        <div className="skill-progress-container">
                            <div className="skill-progress" style={{ width: '80%' }}>
                                <span className="progress-label">80%</span>
                            </div>
                            <span className="skill-label">HTML</span>
                        </div>
                    </div>

                    <div className="skill-bar">
                        <img src={css} alt="CSS Logo" className="skill-logo h-8 w-8" />
                        <div className="skill-progress-container">
                            <div className="skill-progress" style={{ width: '70%' }}>
                                <span className="progress-label">70%</span>
                            </div>
                            <span className="skill-label">CSS</span>
                        </div>
                    </div>

                    <div className="skill-bar">
                        <img src={bootstrap} alt="CSS Logo" className="skill-logo h-8 w-8" />
                        <div className="skill-progress-container">
                            <div className="skill-progress" style={{ width: '60%' }}>
                                <span className="progress-label">60%</span>
                            </div>
                            <span className="skill-label">BOOTSTRAP</span>
                        </div>
                    </div>

                    <div className="skill-bar">
                        <img src={tailwind} alt="CSS Logo" className="skill-logo h-8 w-8" />
                        <div className="skill-progress-container">
                            <div className="skill-progress" style={{ width: '65%' }}>
                                <span className="progress-label">65%</span>
                            </div>
                            <span className="skill-label">TAILWIND</span>
                        </div>
                    </div>

                    <div className="skill-bar">
                        <img src={jquery} alt="CSS Logo" className="skill-logo h-8 w-8" />
                        <div className="skill-progress-container">
                            <div className="skill-progress" style={{ width: '70%' }}>
                                <span className="progress-label">70%</span>
                            </div>
                            <span className="skill-label">JQUERY</span>
                        </div>
                    </div>

                    <div className="skill-bar">
                        <img src={javascript} alt="CSS Logo" className="skill-logo h-8 w-8" />
                        <div className="skill-progress-container">
                            <div className="skill-progress" style={{ width: '75%' }}>
                                <span className="progress-label">75%</span>
                            </div>
                            <span className="skill-label">JAVASCRIPT</span>
                        </div>
                    </div>

                    <div className="skill-bar">
                        <img src={react} alt="CSS Logo" className="skill-logo h-8 w-8" />
                        <div className="skill-progress-container">
                            <div className="skill-progress" style={{ width: '70%' }}>
                                <span className="progress-label">70%</span>
                            </div>
                            <span className="skill-label">REACTJS</span>
                        </div>
                    </div>

                    <div className="skill-bar">
                        <img src={remix} alt="CSS Logo" className="skill-logo h-8 w-8" />
                        <div className="skill-progress-container">
                            <div className="skill-progress" style={{ width: '60%' }}>
                                <span className="progress-label">60%</span>
                            </div>
                            <span className="skill-label">REMIX</span>
                        </div>
                    </div>

                    <div className="skill-bar">
                        <img src={node} alt="CSS Logo" className="skill-logo h-8 w-8" />
                        <div className="skill-progress-container">
                            <div className="skill-progress" style={{ width: '65%' }}>
                                <span className="progress-label">65%</span>
                            </div>
                            <span className="skill-label">NODEJS</span>
                        </div>
                    </div>

                    <div className="skill-bar">
                        <img src={three} alt="CSS Logo" className="skill-logo h-8 w-8" />
                        <div className="skill-progress-container">
                            <div className="skill-progress" style={{ width: '55%' }}>
                                <span className="progress-label">55%</span>
                            </div>
                            <span className="skill-label">THREEJS</span>
                        </div>
                    </div>

                    <div className="skill-bar">
                        <img src={graphql} alt="CSS Logo" className="skill-logo h-8 w-8" />
                        <div className="skill-progress-container">
                            <div className="skill-progress" style={{ width: '50%' }}>
                                <span className="progress-label">50%</span>
                            </div>
                            <span className="skill-label">GRAPHQL</span>
                        </div>
                    </div>

                    <div className="skill-bar">
                        <img src={python} alt="CSS Logo" className="skill-logo h-8 w-8" />
                        <div className="skill-progress-container">
                            <div className="skill-progress" style={{ width: '60%' }}>
                                <span className="progress-label">60%</span>
                            </div>
                            <span className="skill-label">PYTHON</span>
                        </div>
                    </div>

                    <div className="skill-bar">
                        <img src={flask} alt="CSS Logo" className="skill-logo h-8 w-8" />
                        <div className="skill-progress-container">
                            <div className="skill-progress" style={{ width: '55%' }}>
                                <span className="progress-label">55%</span>
                            </div>
                            <span className="skill-label">FLASK</span>
                        </div>
                    </div>

                    <div className="skill-bar">
                        <img src={ai} alt="CSS Logo" className="skill-logo h-8 w-8" />
                        <div className="skill-progress-container">
                            <div className="skill-progress" style={{ width: '60%' }}>
                                <span className="progress-label">60%</span>
                            </div>
                            <span className="skill-label">ARTIFICIAL INTELLIGENCE</span>
                        </div>
                    </div>

                    <div className="skill-bar">
                        <img src={da} alt="CSS Logo" className="skill-logo h-8 w-8" />
                        <div className="skill-progress-container">
                            <div className="skill-progress" style={{ width: '70%' }}>
                                <span className="progress-label">70%</span>
                            </div>
                            <span className="skill-label">DATA ANALYSIS</span>
                        </div>
                    </div>

                    <div className="skill-bar">
                        <img src={figma} alt="CSS Logo" className="skill-logo h-8 w-8" />
                        <div className="skill-progress-container">
                            <div className="skill-progress" style={{ width: '50%' }}>
                                <span className="progress-label">50%</span>
                            </div>
                            <span className="skill-label">FIGMA</span>
                        </div>
                    </div>

                    <div className="skill-bar">
                        <img src={shopify} alt="CSS Logo" className="skill-logo h-8 w-8" />
                        <div className="skill-progress-container">
                            <div className="skill-progress" style={{ width: '60%' }}>
                                <span className="progress-label">60%</span>
                            </div>
                            <span className="skill-label">SHOPIFY</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="profile-content">
                <h1 className='name2'>MD. ZAHID HASAN</h1>
                <h2 className='position'>Jr. Software Engineer</h2>

                <span className='skills pl-1 flex items-center'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 mr-0"
                    >
                        <path fillRule="evenodd" d="M2.75 9a.75.75 0 0 1 .75.75v1.69l2.22-2.22a.75.75 0 0 1 1.06 1.06L4.56 12.5h1.69a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 2.75 9ZM2.75 7a.75.75 0 0 0 .75-.75V4.56l2.22 2.22a.75.75 0 0 0 1.06-1.06L4.56 3.5h1.69a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75ZM13.25 9a.75.75 0 0 0-.75.75v1.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l2.22 2.22H9.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75ZM13.25 7a.75.75 0 0 1-.75-.75V4.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22H9.75a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75Z" clipRule="evenodd" />
                    </svg>
                    <span className='another-sum p-5'>SUMMARY</span>
                </span>
                <p>Experienced and results-driven Software Engineer with a passion for crafting clean, efficient, and scalable code.  With 2 years of hands-on experience in software development, I have honed my skills in javaScript, python and java. I excel in designing robust architectures and implementing innovative solutions to complex technical challenges. My expertise spans the full software development lifecycle, from requirements gathering and architectural design to implementation, testing, and deployment. I thrive in collaborative environments, leveraging strong communication skills to work effectively with cross-functional teams. My commitment to continuous learning ensures that I stay abreast of the latest technologies and best practices in the industry. I am passionate about leveraging technology to solve real-world problems and am excited about the opportunity to contribute to innovative projects. Whether it is developing cutting-edge software applications or optimizing existing systems, I am committed to delivering solutions that exceed expectations and drive business success.</p>

                <span className='skills pl-1 flex items-center'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 mr-0"
                    >
                        <path fillRule="evenodd" d="M2.75 9a.75.75 0 0 1 .75.75v1.69l2.22-2.22a.75.75 0 0 1 1.06 1.06L4.56 12.5h1.69a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 2.75 9ZM2.75 7a.75.75 0 0 0 .75-.75V4.56l2.22 2.22a.75.75 0 0 0 1.06-1.06L4.56 3.5h1.69a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75ZM13.25 9a.75.75 0 0 0-.75.75v1.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l2.22 2.22H9.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75ZM13.25 7a.75.75 0 0 1-.75-.75V4.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22H9.75a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75Z" clipRule="evenodd" />
                    </svg>
                    <span className='personality p-5'>PERSONALITY</span>
                </span>
                <li className='perso pl-5'>Analytical, Confident and Self-motivating.</li>
                <li className='perso pl-5'>Dynamic and Creative in thinking.</li>
                <li className='perso pl-5'>Welcome new challenges, especially if they involve implementing and  developing schemes.</li>
                <li className='perso pl-5'>Hard worker, quick learner and ability to assume responsibility.</li>
                <li className='perso pl-5'>Performing tasks at the right time as a team member under pressure.</li>


                <span className='skills pl-1 flex items-center'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 mr-0"
                    >
                        <path fillRule="evenodd" d="M2.75 9a.75.75 0 0 1 .75.75v1.69l2.22-2.22a.75.75 0 0 1 1.06 1.06L4.56 12.5h1.69a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 2.75 9ZM2.75 7a.75.75 0 0 0 .75-.75V4.56l2.22 2.22a.75.75 0 0 0 1.06-1.06L4.56 3.5h1.69a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75ZM13.25 9a.75.75 0 0 0-.75.75v1.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l2.22 2.22H9.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75ZM13.25 7a.75.75 0 0 1-.75-.75V4.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22H9.75a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75Z" clipRule="evenodd" />
                    </svg>
                    <span className='personality p-5'>WORK EXPERIENCE</span>
                </span>

                <li className='experience pl-5'>Develop and maintain end-to-end applications using the MERN stack, ensuring seamless integration between the frontend, backend, and database.</li>
                <li className='experience pl-5'>Integrate AI functionalities into web applications using Flask, a Python web framework. This may involve incorporating machine learning models, natural language processing (NLP), or other AI algorithms to enhance application features.</li>
                <li className='experience pl-5'>Design, implement, and optimize database schemas using MongoDB for NoSQL requirements and MySQL for relational data. Ensure efficient data storage, retrieval, and management.</li>
                <li className='experience pl-5'>Create RESTful APIs using Express.js to facilitate communication between the frontend and backend. Define API endpoints and implement data retrieval, modification, and deletion operations.</li>
                <li className='experience pl-5'> Deploy AI models developed with Flask, making them accessible through APIs. Ensure scalability and efficiency in serving AI predictions or processing requests.</li>
                <li className='experience pl-5'>Use AI and data analysis techniques to process and analyze large datasets. Extract valuable insights and integrate them into the application`s functionality.</li>
                <li className='experience pl-5'> Conduct thorough testing of the application, including unit testing and end-to-end testing. Debug and resolve issues to ensure a robust and error-free application.</li>
                <li className='experience pl-5'>Use version control systems, such as Git, to manage and track changes to the codebase. Collaborate with team members using established version control workflows.</li>
            </div>
        </div>
    );
}

export default Profile;

