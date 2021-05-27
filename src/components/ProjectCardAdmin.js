import React, { useState } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteProject } from '../helpers/data/projectData';
import ProjectForm from './ProjectForm';

function ProjectCardAdmin({
  firebaseKey,
  imageUrl,
  description,
  title,
  link,
  setProjects
}) {
  const [editing, setEditing] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'delete':
        deleteProject(firebaseKey).then(setProjects);
        break;
      default: console.warn('nothing selected');
    }
  };

  return (
    <div>
      <Card className='admin-project-card'>
        <CardImg top width="100%" src={imageUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle className="card-title">{title}</CardTitle>
          <CardText>{description}</CardText>
          <CardText className="hidden">{firebaseKey}</CardText>
        </CardBody>
        <a href={link} className="btn btn-secondary btn-lg active" role="button" aria-pressed="true" target="blank">Visit App</a>
        <Button className='mt-1' color='danger' onClick={() => handleClick('delete')}>Delete Player</Button>
        <Button className='mt-1' color='info' onClick={() => handleClick('edit')}> {editing ? 'Close Form' : 'Edit Project'}
        </Button>
        {
          editing && <ProjectForm
          setProjects={setProjects}
          firebaseKey={firebaseKey}
          imageUrl={imageUrl}
          description={description}
          title={title}
          link={link}
          formTitle={'Edit Project'}
          />
        }
      </Card>
    </div>
  );
}

ProjectCardAdmin.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  setProjects: PropTypes.func
};

export default ProjectCardAdmin;
