import React from "react";

function Projects() {
  return (
    <div class="container" id="Projects">
      <div class="row">
        <div class="col-xs-12">
          <div class="card mb-3" style={{ "max-width": "540px;" }}>
            <h2 className="aboutme">
              <u>Projects</u>
            </h2>
            <div class="row g-0">
              {/* Project 1 */}
              <div class="col-md-6">
                <img
                  src="./assets/pizzaapp.png"
                  class="img-fluid rounded-start"
                  alt="project"
                />
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h5 class="card-title">
                    <u>1. Pizza App</u>
                  </h5>
                  <p class="card-text">Front-end :</p>
                  <p>
                    <a
                      href="https://github.com/dhineshdhamodharan/pizzadelivery_react"
                      target="_blank"
                    >
                      https://github.com/dhineshdhamodharan/pizzadelivery_react
                    </a>
                  </p>
                  <p class="card-text">Back-end :</p>
                  <p>
                    <a
                      href="https://github.com/dhineshdhamodharan/pizzadelivery_node"
                      target="_blank"
                    >
                      https://github.com/dhineshdhamodharan/pizzadelivery_node
                    </a>
                  </p>
                  <p class="card-text">Netlify :</p>
                  <p>
                    <a
                      href="https://pizza-delivery-application.netlify.app"
                      target="_blank"
                    >
                      https://pizza-delivery-application.netlify.app
                    </a>
                  </p>
                </div>
              </div>
              <hr></hr>
              {/* Porject1 */}

              {/* Project 2 */}
              <div class="col-md-6">
                <img
                  src="./assets/Makeupapi.png"
                  class="img-fluid rounded-start"
                  alt="project"
                />
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h5 class="card-title">
                    <u>2. Makeup API</u>
                  </h5>
                  <p class="card-text">Github :</p>
                  <p>
                    <a
                      href="https://github.com/dhineshdhamodharan/pizzadelivery_react"
                      target="_blank"
                    >
                      https://github.com/dhineshdhamodharan/hackathon_task
                    </a>
                  </p>

                  <p class="card-text">Netlify :</p>
                  <p>
                    <a
                      href="https://dhinesh-b251-hackathon-makeupapi.netlify.app/"
                      target="_blank"
                    >
                      https://dhinesh-b251-hackathon-makeupapi.netlify.app/
                    </a>
                  </p>
                </div>
              </div>
              <hr></hr>
              {/* Project2 */}

              {/* Project 3 */}
              <div class="col-md-6">
                <img
                  src="./assets/dashboard.png"
                  class="img-fluid rounded-start"
                  alt="project"
                />
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h5 class="card-title">
                    <u>3. Dashboard App</u>
                  </h5>
                  <p class="card-text">Front-end :</p>
                  <p>
                    <a
                      href="https://github.com/dhineshdhamodharan/dashboardapp-with-mongo-react"
                      target="_blank"
                    >
                      https://github.com/dhineshdhamodharan/dashboardapp-with-mongo-react
                    </a>
                  </p>
                  <p class="card-text">Back-end :</p>
                  <p>
                    <a
                      href="https://github.com/dhineshdhamodharan/dashboardapp-with-mongo-node"
                      target="_blank"
                    >
                      https://github.com/dhineshdhamodharan/dashboardapp-with-mongo-node
                    </a>
                  </p>
                  <p class="card-text">Netlify :</p>
                  <p>
                    <a
                      href="https://dashboardapp-reactwithmongodb.netlify.app/"
                      target="_blank"
                    >
                      https://dashboardapp-reactwithmongodb.netlify.app/
                    </a>
                  </p>
                </div>
              </div>
              {/* Porject3 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
