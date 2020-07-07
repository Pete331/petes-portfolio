import React from "react";
import useHover from "../components/useHover";

function Project(props) {
  const [hoverRef, isHovered] = useHover();

  return (
    <div className="col-lg-4 col-md-6 mb-3" ref={hoverRef}>
      {isHovered ? (
        <div className="img-caption p-3">
          <h3 className="text-center text-info">{props.data.name}</h3>
          <button
            className="btn btn-info btn-block"
            href={props.data.appLink}
            target="”_blank”"
          >
            View Project <i className="fa fa-chevron-circle-right"></i>
          </button>
          <a
            href={props.data.gitLink}
            target="”_blank”"
            className="btn btn-info btn-block"
          >
            Github<i className="fa fa-chevron-circle-right"></i>
          </a>
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
