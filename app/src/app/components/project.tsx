import React from "react";

export default function Project({projectName, projectImage, projectDescription}) {
  return (
    <>
      <h2>{projectName}</h2>
      <p>{projectImage}</p>
      <p>{projectDescription}</p>
    </>
  );
}
