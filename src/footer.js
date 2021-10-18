import React from "react";

function Footer() {
  return (
    <section class="">
      <footer
        class="text-center text-white"
        style={{ "background-color": "#0a4275;" }}
      >
        <div class="container p-4 pb-0">
          <section class="">
            <a href="">
              <i class="fa fa-angle-double-up" />
            </a>
          </section>
        </div>

        <div
          class="text-center p-3"
          style={{ "background-color": "rgba(0, 0, 0, 0.2);" }}
        >
          <p class="text-white"> © 2021 Copyright : Portfolio Dhinesh</p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
