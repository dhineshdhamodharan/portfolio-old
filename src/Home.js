import React from "react";

function Home() {
  return (
    <div className="container" id="Home">
      <div className="about">
        <div class="text">
          <h1>
            Hello, I'm <span className="name"> Dhinesh</span>
          </h1>
          <h5>A full stack web developer</h5>
          <a
            href="https://drive.google.com/file/d/1Z-CfznaOcZHHaasU-MVi_oaEf8qXJFE-/view?usp=sharing"
            target="_blank"
          >
            <button type="button" class="btn btn-light">
              View Resume
            </button>
          </a>
          <a href="./assets/Resume.pdf" target="_blank">
            <button type="button" class="btn btn-light">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
