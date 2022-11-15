import React from "react";

function ProjectList({ projects }) {
  return (
    <div className="table-card-view">
      {projects.map((item, index) => (
        <img src={item.img} className="card" alt="" key={index}></img>
      ))}
    </div>
  );
}

export default ProjectList;
