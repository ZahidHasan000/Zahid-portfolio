import Navbar from './Navbar';
import BackGroundImage from './BackGround';
import Skill from './Skill';
import CV from "../assets/cv.pdf";
import Sidebar from './SideBar';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <Navbar />
            <div className="relative flex">
                <Sidebar />
                <div className="flex-1">
                    <BackGroundImage />
                    <div className="about mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 m-0 p-0">
                        <div className="about-2 mt-8 md:mt-8 pt-8 md:pt-8 ml-8 md:ml-8 pl-8 md:pl-8 text-left">
                            <h2 className='summary'>Summary</h2>
                            <p>I am a Full Stack Developer with over 2 years experience in software development and proficiency in development tools. I love to build products that solves or attempts to solve real life problems. I am a strong believer in teamwork and community building. I have experience in Frontend (HTML, CSS, Bootstrap, Tailwind, Javascript, React.Js, Three.Js), Backend(Node.Js, Flask), Databases (MongoDb, Firebase, MySQL), UI/UX designs (Figma) and Python (Data Analysis, Machine Learning)</p>
                            <div className='resume mt-3 pt-3'>
                                <a href={CV} download className="button">
                                    <span className="text-green-500 hover:text-green-700">Download My CV</span>
                                </a>
                            </div>
                        </div>
                        <div className="skill mt-14 sm:mt-16 pt-14 sm:pt-16 text-center">
                            <Skill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;





