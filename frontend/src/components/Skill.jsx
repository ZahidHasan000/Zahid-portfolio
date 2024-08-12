import { useEffect } from "react";
import "./Skill.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const Skill = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "Bootstrap",
        "Tailwind",
        "JavaScript",
        "ReactJS",
        "NodeJS",
        "ThreeJS",
        "Machine Learning",
        "Python",
        "Flask",
        "Data Analysis",
        "JQuery",
        "ES6",
        "Figma",
        "GIT",
        "GITHUB",
      ];

      // const options = {
      //   radius: 300,
      //   maxSpeed: "normal",
      //   initSpeed: "normal",
      //   keep: true,
      // };

      // Default options
      let options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      // Adjust options for mobile devices
      if (window.innerWidth <= 768) {
        options = {
          radius: 195, // Adjust radius for smaller screens
          maxSpeed: "slow", // Adjust speed for smoother animation
          initSpeed: "slow", // Adjust initial speed for smoother animation
          keep: true,
        };
      }

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default Skill;

