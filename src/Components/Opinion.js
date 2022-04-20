import React from "react";

const Opinion = ({ text, project, name, role, profile }) => {
  return (
    <article className="opinion__container">
      <p className="opnion__paragraph">{text}</p>
      <span className="opinion__signature">
        <img src={profile} alt="profile google opinion" />
        <span>
          <span className="name">{name}, </span>
          {role} <span className="delivraide">{project}</span>
        </span>
      </span>
    </article>
  );
};

export default Opinion;
