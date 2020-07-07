import React from "react";

function SkillIcon(props) {
  return (
    <div className="col s4 m2">
      <img alt="" src={props.skills.img} className="responsive-img" />
      {props.skills.name}
    </div>
  );
}
export default SkillIcon;
