import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <ul>
          <li>
            <a
              href="https://akashkhandelwal191.github.io/PortFolio/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-globe-asia"></i>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/Akashkhandelwal191"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/skykhandelwal1999/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/akash-khandelwal-5b09531aa"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/skykhandelwal26"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-subhead">
        <h5>
          Created by Akash Khandelwal <i className="fas fa-heart"></i>{" "}
        </h5>
      </div>
    </footer>
  );
};


export default Footer;