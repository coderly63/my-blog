import React from 'react'
import { Col } from 'react-bootstrap'

interface ProjectCardProps {
  title: string
  description: string
  imgUrl: string
  url: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imgUrl,
  url,
}) => {
  const handleClick = () => {
    window.open(url)
  }

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleClick}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard
