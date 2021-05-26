import React, { useState } from 'react';
import { addProject } from '../helpers/data/projectData';

export default function ProjectForm() {
  const [project, setProject] = useState({
    title: '',
    link: '',
    image: '',
    description: ''
  });

  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(project).then((projectArray) => console.warn(projectArray));
  };

  return (
    <div>
      <form id="add-author-form" autoComplete="off" onSubmit={handleSubmit}>
        <h2>Add Project</h2>
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
