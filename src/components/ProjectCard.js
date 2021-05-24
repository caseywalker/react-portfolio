import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
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
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{link}</CardSubtitle>
          <CardText>{description}</CardText>
          <CardText>{firebaseKey}</CardText>
        </CardBody>
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
