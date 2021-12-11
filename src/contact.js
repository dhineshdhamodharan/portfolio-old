import React from "react";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const [serverState, setServerState] = useState(false);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState(true);
    console.log(name);
    console.log(mail);
    console.log(message);
    try {
      await axios.post("https://formspree.io/f/xbjqelql", {
        name: name,
        mail: mail,
        message: message,
      });
      setServerState(false);
    } catch (error) {
      setServerState(false);
      console.log(error);
    }
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
  };
  return (
    <div className="container" id="Contact">
      <div class="card">
        <div class="card-block">
          <h2 className="aboutme">
            <u>Contact Me</u>
          </h2>
          <form onSubmit={handleSubmit} className="form">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="Name"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
                onChange={(e) => {
                  setMail(e.target.value);
                }}
                required
              />
            </div>

            <div class="form-group">
              <textarea
                class="form-control"
                rows="5"
                placeholder="Enter your message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
            <div class="form-group">
              <button
                type="submit"
                class=" btn1 btn-primary"
                disabled={serverState}
              >
                Send message
              </button>
            </div>
            {serverState ? <p>Message Sent Successfully</p> : ""}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
