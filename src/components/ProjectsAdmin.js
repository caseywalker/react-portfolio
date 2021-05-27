import React, { useState, useEffect } from 'react';
import { getProjects } from '../helpers/data/projectData';
import ProjectCardAdmin from './ProjectCardAdmin';
import ProjectForm from './ProjectForm';

function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((projectsArray) => setProjects(projectsArray));
  }, []);

  return (
    <div className='project-board'>
      <a className='test' name='projectlink'></a>
      <div className='add-project-form'>
      <ProjectForm setProjects={setProjects} formTitle={'Add Project'} />
      </div>
      <p>Projects</p>
      <hr />
      <div className='projects'>
      <br />
        {
          projects.map((projectInfo) => (
            <ProjectCardAdmin
            key={projectInfo.firebaseKey}
            firebaseKey={projectInfo.firebaseKey}
            imageUrl={projectInfo.image}
            description={projectInfo.description}
            title={projectInfo.title}
            link={projectInfo.link}
            setProjects={setProjects}
            />
          ))
         }
      </div>
    </div>
  );
}

export default ProjectsAdmin;
