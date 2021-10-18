import React from "react";

function Technicalskills() {
  return (
    <div class="container" id="Technical skills">
      <div class="card">
        <div class="card-block">
          <h2 className="aboutme">Technical Skills</h2>
          <div class="row">
            <div class="col-md-2">
              <div class="education-experience">
                <img src="./assets/js.png" class="skill" alt="Javascript" />
              </div>
            </div>
            <div class="col-md-2">
              <div class="education-experience">
                <img src="./assets/html.png" class="skill" alt="Javascript" />
              </div>
            </div>
            <div class="col-md-2">
              <div class="education-experience">
                <img src="./assets/css.png" class="skill" alt="Javascript" />
              </div>
            </div>
            <div class="col-md-2">
              <div class="education-experience">
                <img src="./assets/node.png" class="skill" alt="Javascript" />
              </div>
            </div>
            <div class="col-md-2">
              <div class="education-experience">
                <img src="./assets/mongo.png" class="skill" alt="Javascript" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technicalskills;
