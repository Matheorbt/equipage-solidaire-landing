import React from "react";

const ProjectCard = ({ tags, logo, name, description, link, cta }) => {
  return (
    <li className="projects__list_card">
      <img
        className="projects__list_card_img"
        src={logo}
        alt="delivr'aide logo"
      />
      <div className="projects__list_card_subcontainer">
        <div className="projects__list_card_subcontainer_tag">{tags}</div>
        <span className="projects__list_card_subcontainer_header">
          <h3 className="projects__list_card_subcontainer_name">{name}</h3>
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </span>
        <p className="projects__list_card_subcontainer_description">
          {description}
        </p>
        <hr className="projects__list_card_subcontainer_hr" />
        <a
          className="projects__list_card_subcontainer_link"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {cta}
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </li>
  );
};

export default ProjectCard;
