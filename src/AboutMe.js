/* 
   File Name: AboutMe.js
   Student Name: Yehong Hu
   Student ID: 301392896
   Date: 2024.09.28
*/
import React from 'react';
import Me from './assets/Me.jpg';  // 导入图片

const AboutMe = () => {
  return (
    <div className="about-container">
      <img src={Me} alt="Yehong Hu" />
      <div>
        <h2>About Me</h2>
        <p>Hi, I'm Yehong Hu, and I'm a web developer passionate about building creative websites and applications.</p>
        <a href="/MyResume.pdf" target="_blank">Download My Resume</a>  {/* 链接到 public 中的 PDF 文件 */}
      </div>
    </div>
  );
};

export default AboutMe;