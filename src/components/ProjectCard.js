import React from 'react';
import { Col } from 'react-bootstrap';

export const ProjectCard = ({ name, title, description, imgUrl, githubUrl }) => {
  return (
    <Col sm={6} md={4}>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={name} />
          <div className="proj-txtx">
            <span>{title}</span>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </Col>
  );
};
