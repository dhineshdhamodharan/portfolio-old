import React from "react";

function Socialnetwork() {
  return (
    <div className="container">
      <div class="card">
        <div class="card-block">
          <h2 className="aboutme">Social Network</h2>
          <div class="row">
            <div class="col-md-3">
              <p>
                <a href="https://github.com/dhineshdhamodharan" target="_blank">
                  <img src="./assets/github-11-64.png" class="social-img" />
                  <span class="social-text">Dhinesh Dhamodharan</span>
                </a>
              </p>
            </div>
            <div class="col-md-3">
              <a
                href="https://www.linkedin.com/in/dhinesh-dhamodharan-44a2831a2"
                target="_blank"
              >
                <img src="./assets/linkedin-5-64.png" class="social-img" />
                <span class="social-text">Dhinesh Dhamodharan</span>
              </a>
            </div>
            <div class="col-md-3">
              <a href="https://github.com/dhineshdhamodharan" target="_blank">
                <img src="./assets/twitter-64.png" class="social-img" />
                <span class="social-text">@dheenu_dhinesh</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socialnetwork;
