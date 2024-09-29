/* 
   File Name: Projects.js
   Student Name: Yehong Hu
   Student ID: 301392896
   Date: 2024.09.28
*/
const Projects = () => {
    return (
      <div className="projects-container">
        <h1>My Projects</h1>
        <div className="project-card">
          <img src="Project1.png" alt="Project 1" />
          <h3>Project 1</h3>
          <p>I developed and designed a housing sales website.</p>
        </div>
        <div className="project-card">
          <img src="Project2.png" alt="Project 2" />
          <h3>Project 2</h3>
          <p>I developed and designed my own Iphone 15 mobile phone introduction and third-party sales website.</p>
        </div>
        <div className="project-card">
          <img src="Project3.png" alt="Project 3" />
          <h3>Project 3</h3>
          <p>I made a Course Instructor Evaluation Page.</p>
        </div>
      </div>
    );
  };
  
  export default Projects;