import React from "react";

function About() {
  return (
    <div class="container" id="About">
      <div class="card">
        <div class="card-block">
          <h2 className="aboutme">About me</h2>
          <div class="row">
            <div class="col-md-2">
              <div class="about">
                <img
                  src="./assets/dhinesh1.JPG"
                  class="about-pic"
                  alt="mypic"
                />
              </div>
            </div>
            <div class="col-md-8">
              <div class="about-text">
                <p>
                  Interested in Software and Web development. Completed the
                  "Full Stack Development" course at Guvi. Checkout my project
                  in the "Projects" section.
                </p>
                <p>Lives in Coimbatore, TamilNadu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
