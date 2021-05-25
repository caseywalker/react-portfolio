import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';

function ProjectCard({
  firebaseKey,
  imageUrl,
  description,
  title,
  link
}) {
  return (
    <div className='project-card'>
      <Card>
        <CardImg top width="100%" src={imageUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle className="card-title">{title}</CardTitle>
          <CardText>{description}</CardText>
          <CardText className="hidden">{firebaseKey}</CardText>
        </CardBody>
        <a href={link} className="btn btn-secondary btn-lg active" role="button" aria-pressed="true" target="blank">Visit App</a>
      </Card>
    </div>
  );
}

ProjectCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default ProjectCard;
