import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="about-author-container">
          <span className="author">
            LeenDrew
          </span>
          <a
            href="https://github.com/LeenDrew/web-lab6-react"
            target="blank"
            className="repository"
          >
            Repository
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
