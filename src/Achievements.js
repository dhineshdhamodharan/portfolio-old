import React from "react";

function Achievements() {
  return (
    <div class="container" id="achievements">
      <div class="row">
        <div class="col-xs-12">
          <div class="card mb-3" style={{ "max-width": "540px;" }}>
            <h2 className="aboutme">
              <u>Achievements</u>
            </h2>
            <ul>
              <div class="row g-0">
                <p class="card-text">
                  <li>
                    Completed the Code-kata and Web-kata in GUVI Zen Portel
                  </li>
                </p>

                <p class="card-text">
                  <li>
                    Completed ‘Full-stack developer’ course in GUVI Geek Network
                    Pvt. Ltd.
                  </li>
                </p>

                <p class="card-text">
                  <li>Completed JavaScript course in GUVI.</li>
                </p>
                <p class="card-text">
                  <li>Completed GIT course in GUVI.</li>
                </p>

                <div class="col-md-6">
                  <img
                    src="./assets/codekata.png"
                    class="img-fluid rounded-start"
                    alt="project"
                  />
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
