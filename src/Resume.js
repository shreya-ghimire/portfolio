import React from 'react';
import resumeImage from './assets/img/me.jpg'; 
import resumePDF from './assets/resume/resume.pdf';


function Resume() {
  return (
    <div className="resume">
      <div className="resume-header">
        <img src={resumeImage} alt="Profile" className="resume-image" />
        <div className="contact-info">
          <h2>Contacts:</h2>
          <li>+91 7018966744</li>
          <li>shreyaghimiree.22@gmail.com</li>
          <li><a href="https://www.linkedin.com/in/shreya-ghimiree" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/shreya-ghimiree</a></li>
          <li><a href="https://github.com/shreya-ghimire" target="_blank" rel="noopener noreferrer">github.com/shreya-ghimire</a></li>
        </div>
      </div>
      
      <div className="resume-section">
        <h2>INTERNSHIPS</h2>
        <div className="resume-entry">
          <h3>Freelance Technical Content Writer</h3>
          <p>Geeks for Geeks | 03/2024 – present</p>
          <ul>
            <li>Demonstrated expertise in Full Stack development through published articles, covering frontend, backend, and database integration aspects.</li>
            <li>Authored 11 articles as a technical content writer, specializing in MERN projects and React.js.</li>
            <li><a href="https://shorturl.at/brA06" target="_blank" rel="noopener noreferrer">Link to Articles</a></li>
          </ul>
        </div>
        
        <div className="resume-entry">
          <h3>UI Designer and Human Resource Manager</h3>
          <p>Tucious Chandigarh | 12/2021 – 7/2022</p>
          <ul>
            <li>Designed user interfaces for web and mobile applications as a team leader of the UI design team.</li>
            <li>Utilized design tools like Figma to create prototypes.</li>
            <li>Supported the Business Development team in various tasks, such as lead generation, prospecting, and relationship building.</li>
            <li>Acquired skills in creating proposals, including conducting business analysis, developing marketing strategies, and understanding real-time business models.</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h2>SKILLS</h2>
        <h3>Technical Skills:</h3>
        <ul>
          <li>Python, HTML, CSS, JavaScript, React, Git, Bootstrap, jQuery, Node.js, Express.js, Firebase, SQL, MongoDB, Python, C++, C, Java, MS Excel, Technical content writing, Agile Concepts, Computer Science concepts</li>
        </ul>
        <h3>Soft Skills:</h3>
        <ul>
          <li>Communication, Creativity, Presentation, Collaboration, Problem-solving, Time Management</li>
        </ul>
      </div>
      
      <div className="resume-section">
        <h2>EDUCATION</h2>
        <p>Chitkara University</p>
        <p>Bachelor of Engineering, Computer Science Engineering | 2021-2025</p>
        <p>c.g.p.a: 9.65</p>
      </div>
      
      <div className="resume-section">
        <h2>CERTIFICATIONS</h2>
        <ul>
          <li>Programming with Python, Coding Ninja</li>
          <li>Advanced Web Development, Coding Ninja</li>
          <li>Database Management System, Infosys</li>
          <li>Software Engineering, Infosys</li>
        </ul>
      </div>

      <div className="download-section">
        <a href={resumePDF} download="resume.pdf" className="download-button">Download Resume</a>
      </div>
    </div>
  );
}

export default Resume;
