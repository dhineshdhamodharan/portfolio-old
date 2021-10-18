import React from "react";

function Projects() {
  return (
    <div class="container" id="Projects">
      <div class="row">
        <div class="col-xs-12">
          <div class="card">
            <div class="card-block">
              <h2 className="aboutme">Projects</h2>
              <div class="row">
                <div class="col-md-3">
                  <p>
                    <a
                      href="https://pizza-delivery-application.netlify.app/home"
                      target="_blank"
                      rel="noreferrer"
                      className="link2"
                    >
                      <img
                        src="./assets/pizzaapp.png"
                        class="project-img"
                        alt="myimg"
                      />
                    </a>
                  </p>
                  <p className="text-center">Pizza App</p>
                </div>

                <div class="col-md-3">
                  <p>
                    <a
                      href="https://dhinesh-b251-hackathon-makeupapi.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                      className="link2"
                    >
                      <img
                        src="./assets/Makeupapi.png"
                        class="project-img"
                        alt="myimg"
                      />
                    </a>
                  </p>
                  <p className="text-center">Makeup App</p>
                </div>

                <div class="col-md-3">
                  <p>
                    <a
                      href="https://dhinesh-b25g-todoapp.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                      className="link2"
                    >
                      <img
                        src="./assets/Todoapp.png"
                        class="project-img"
                        alt="myimg"
                      />
                    </a>
                  </p>

                  <p className="text-center">Todo App</p>
                </div>

                <div class="col-md-3">
                  <p>
                    <a
                      href="https://dhinesh-b25g-addtocart-task.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                      className="link2"
                    >
                      <img
                        src="./assets/addtocart.png"
                        class="project-img"
                        alt="myimg"
                      />
                    </a>
                  </p>
                  <p className="text-center">Add to Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
