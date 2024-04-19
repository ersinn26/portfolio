
import data from '../../helper/data'
import React from 'react'
import "./Projects.scss"

const Projects = () => {
  return (
    <div className="projects">
      {data.map((item,id)=>
      <div className="project__card" key={id}>
        <img className="project__img" src={item.img} alt="" />
      </div>
      )}
    </div>
  )
}

export default Projects
