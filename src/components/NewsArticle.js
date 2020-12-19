import React from 'react';
import PropTypes from 'prop-types';

function NewsArticle(props) {
  const { imgAlt, title, bodyText } = props;
  return (
    <a href className="article-container">
      <div className="img-container">
        <img src="https://placehold.it/300x150" alt={imgAlt} className="img" />
      </div>
      <div className="title">{title}</div>
      <div className="body">{bodyText}</div>
      <div className="footer">
        <button type="button" className="link">Читать далее</button>
      </div>
    </a>
  );
}

NewsArticle.propTypes = {
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
};

export default NewsArticle;
