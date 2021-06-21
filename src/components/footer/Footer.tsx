import React from 'react';
import './footer.scss';

export default function Footer(): React.ReactElement {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="about-author-container">
          <span className="author">LeenDrew</span>
          <a href="https://github.com/LeenDrew/react-pet" target="blank" className="repository">
            Repository
          </a>
        </div>
      </div>
    </footer>
  );
}
