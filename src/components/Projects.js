import React from 'react';
import { Container, Row, Col, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/a.png';
import projImg2 from '../assets/img/b.png';
import projImg3 from '../assets/img/c.png';
import projImg4 from '../assets/img/d.png';
import projImg5 from '../assets/img/e.png';
import projImg6 from '../assets/img/f.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      name: "Mentor Dashboard",
      title: "MERN Stack",
      description: "The full-stack mentor dashboard enables seamless mentor-student interactions with features like assignment management, automated email notifications, mark-sheet generation upon evaluation, and online project submission and review for students.",
      imgUrl: projImg1,
      githubUrl: 'https://github.com/shreya-ghimire/Mentor_Dashboard'
    },
    {
      name: "Social Media Site",
      title: "MERN Stack",
      description: "A social networking platform was designed and developed, incorporating robust user authentication for secure access. The platform enables users to create and delete posts while also providing the functionality to like posts for engagement. Additionally, friend management features were implemented to enhance user connectivity.",
      imgUrl: projImg2,
      githubUrl: 'https://github.com/shreya-ghimire/Social_media'
    },
    {
      name: "Book Shop",
      title: "React SQL Node",
      description: "A comprehensive Bookshop platform was created, integrating CRUD (Create, Read, Update, Delete) functionalities for efficient management of books. Users can seamlessly add, view, update, and remove books from their collection. Additionally, the platform offers advanced filtering options, allowing users to search and categorize books based on genres.",
      imgUrl: projImg3,
      githubUrl: "https://github.com/shreya-ghimire/BookShop"
    },
    {
      name: "Tiff to Jpeg",
      title: "HTML CSS JS",
      description: "A versatile application was developed to convert TIFF images to PNG and JPEG formats seamlessly. Users can easily upload TIFF files and convert them to the desired output format, whether it's PNG for lossless compression or JPEG for smaller file sizes.",
      imgUrl: projImg4,
      githubUrl: "https://github.com/shreya-ghimire/TiffToJpeg"
    },
    {
      name: "Chat App",
      title: "React Firebase",
      description: "A robust chat application was crafted using React.js and Firebase, offering real-time messaging capabilities. Users can engage in dynamic conversations, send and receive messages instantly, and view active user presence indicators.",
      imgUrl: projImg5,
      githubUrl: "https://github.com/shreya-ghimire/chatapp"
    },
    {
      name: "Music Player",
      title: "MERN stack",
      description: "Developed a music player app using the MERN stack, featuring robust playlist management and a user-friendly like system. Users can create, edit, and delete playlists, adding their favorite tracks seamlessly. The app leverages MongoDB for efficient data storage, Express.js for handling server-side logic, React for a dynamic and responsive user interface, and Node.js for backend integration.",
      imgUrl: projImg6,
      githubUrl: "https://github.com/shreya-ghimire/music_player"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  );
}
