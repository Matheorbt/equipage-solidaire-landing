import React from "react";

const Opinion = ({ text, project, name, role, profile }) => {
  return (
    <article className="opinion__container">
      <p className="opnion__paragraph">{text}</p>
      <hr />
      <span className="opinion__signature">
        <span>
          <span className="name">{name}, </span>
          {role} <span className="delivraide">{project}</span>
        </span>
      </span>
    </article>
  );
};

export default Opinion;
