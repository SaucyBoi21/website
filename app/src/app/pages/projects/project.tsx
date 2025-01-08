import React from "react";

export default function Project(
  projectName: string,
  projectDescription: string,
  projectImage: string,
  projectLink: string,
) {
  return (
    <>
      <h2>{projectName}</h2>
      <p>{projectDescription}</p>
      <img src={projectImage} alt="" />
      <a href={projectLink}></a>
    </>
  );
}
