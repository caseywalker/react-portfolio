import React, { useState, useEffect } from 'react';
import { getProjects } from '../helpers/data/projectData';
import ProjectCard from './ProjectCard';

function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((projectsArray) => setProjects(projectsArray));
  }, []);

  return (
    <div className='project-board'>
      <a className='test' name='projectlink'></a>
      <p>Projects</p>
      <hr />
      <div className='projects'>
        {
          projects.map((projectInfo) => (
            <ProjectCard
            key={projectInfo.firebaseKey}
            firebaseKey={projectInfo.firebaseKey}
            imageUrl={projectInfo.image}
            description={projectInfo.description}
            title={projectInfo.title}
            link={projectInfo.link}
            />
          ))
         }
      </div>
    </div>
  );
}

export default ProjectsAdmin;
