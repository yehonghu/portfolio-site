/* 
   File Name: Projects.js
   Student Name: Yehong Hu
   Student ID: 301392896
   Date: 2024.09.28
*/

import React from 'react';
import Project1 from './assets/Project1.png'; 
import Project2 from './assets/Project2.png'; 
import Project3 from './assets/Project3.png'; 

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-card">
        <img src={Project1} alt="Project 1" /> 
        <h3>Project 1</h3>
        <p>I developed and designed a housing sales website.</p>
      </div>
      <div className="project-card">
        <img src={Project2} alt="Project 2" />
        <h3>Project 2</h3>
        <p>I developed and designed my own Iphone 15 mobile phone introduction and third-party sales website.</p>
      </div>
      <div className="project-card">
        <img src={Project3} alt="Project 3" />
        <h3>Project 3</h3>
        <p>I made a Course Instructor Evaluation Page.</p>
      </div>
    </div>
  );
};

export default Projects;