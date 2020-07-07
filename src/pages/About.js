import React from "react";
import Skills from "../utils/SkillIcons.json";
import SkillIcon from "../components/SkillIcon";

function About() {
  return (
    <div className="container">
      <div className="row bg-white border border-secondary">
        <div className="col-12 p-4">
          <div className="border-bottom border-secondary mb-3">
            <h2 className="text-info">Full-Stack Web Developer</h2>
          </div>
          <section className="">
            <img
              className="rounded w-20"
              id="bio-image"
              src="./assets/portfolio-img/profile.png"
              alt="profile-pic"
            />
            <div className="p-3">
              <p>
                Hi there! I am a full-stack developer having completed my
                certificate in full stack web development at the University of
                Western Australia, check out my portfolio for some of the
                projects I have created and been involved in. I have thoroughly
                enjoyed the program and look forward to what the future holds
                for me within this field.
              </p>
              <h3 className="text-info">My Background</h3>
              <p>
                I grew up on our family farm near Wongan Hills in the heart of
                the Western Australian Wheatbelt, here I developed a love and
                passion for agriculture and technology. After completing a
                Bachelor of Science in Agriculture and a Bachelor of Commerce at
                UWA, I spent several years working on our family farm. I have
                spent a couple of years with NAB agribusiness gaining experience
                in the banking sector being exposed to different ag industries.
                I am currently working for Grain Brokers Australia as a Grain
                Broker while completing a certificate in full-stack web
                development.
              </p>
            </div>
          </section>

          <div className="border-bottom border-secondary mt-5 mb-5">
            <h2 className="text-info">Skills</h2>
          </div>

          <div className="card-content mb-5 border">
            <h3 className="text-info text-center">Front-End</h3>
            <div className="row text-center">
              <SkillIcon skills={Skills[1]} />
              <SkillIcon skills={Skills[2]} />
              <SkillIcon skills={Skills[3]} />
              <SkillIcon skills={Skills[4]} />
            </div>
          </div>

          <div className="card-content mb-5 border">
            <h3 className="text-info text-center">Back-End</h3>
            <div className="row text-center">
              <SkillIcon skills={Skills[5]} />
              <SkillIcon skills={Skills[6]} />
              <SkillIcon skills={Skills[7]} />
              <SkillIcon skills={Skills[8]} />
              <SkillIcon skills={Skills[9]} />
            </div>

            <div className="row text-center mt-5">
              <SkillIcon skills={Skills[10]} />
              <SkillIcon skills={Skills[11]} />
              <SkillIcon skills={Skills[12]} />
            </div>
          </div>

          <div className="card-content mb-5 border">
            <h3 className="text-info text-center">Other</h3>
            <div className="row text-center">
              <SkillIcon skills={Skills[13]} />
              <SkillIcon skills={Skills[14]} />
              <SkillIcon skills={Skills[15]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
