import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addProject, updateProject } from '../helpers/data/projectData';

export default function ProjectForm({
  setProjects,
  formTitle,
  firebaseKey,
  imageUrl,
  description,
  title,
  link,
}) {
  const [project, setProject] = useState({
    title: title || '',
    link: link || '',
    image: imageUrl || '',
    description: description || '',
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.firebaseKey) {
      updateProject(project).then((projectsArray) => setProjects(projectsArray));
    } else {
      addProject(project).then((projectArray) => setProjects(projectArray));
    }
  };

  return (
    <div>
      <form className="project-form" autoComplete="off" onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <label>Title: </label>
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={project.title}
          onChange={handleInputChange}
        />
        <label>Link: </label>
        <input
          name="link"
          type="text"
          placeholder="Link"
          value={project.link}
          onChange={handleInputChange}
        />
        <label>Image: </label>
        <input
          name="image"
          type="text"
          placeholder="Image URL"
          value={project.image}
          onChange={handleInputChange}
        />
        <label>Description: </label>
        <input
          name="description"
          type="text"
          placeholder="Description"
          value={project.description}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

ProjectForm.propTypes = {
  setProjects: PropTypes.func,
  formTitle: PropTypes.string.isRequired,
  firebaseKey: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
};
