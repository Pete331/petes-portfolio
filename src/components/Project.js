import React from "react";
import useHover from "../components/useHover";

function Project(props) {
  const [hoverRef, isHovered] = useHover();

  return (
    <div className="col-lg-4 col-md-6 mb-3" ref={hoverRef}>
      {isHovered ? (
        <div className=" p-3">
          <img
            src="./assets/img/portfolio/grey.png"
            className="card-img-top"
            alt="grey"
          />
          <div className="project-text">
            <h4 className="text-center text-info">{props.data.name}</h4>
            <a
              className="btn btn-info btn-block"
              href={props.data.appLink}
              target="”_blank”"
            >
              View Project <i className="fa fa-chevron-circle-right"></i>
            </a>
            <a
              href={props.data.gitLink}
              target="”_blank”"
              className="btn btn-info btn-block"
            >
              Github<i className="fa fa-chevron-circle-right"></i>
            </a>
          </div>
        </div>
      ) : (
        <div className="img-thumb">
          <img
            src={props.data.img}
            className="card-img-top"
            alt={props.data.imgAlt}
          />
        </div>
      )}
    </div>
  );
}

export default Project;
