import React from 'react';
import PropTypes from 'prop-types';

function NewsArticle(props) {
  const { imgAlt, title, bodyText } = props;
  return (
    <div className="card news-article-card">
      <img src="https://placehold.it/300x150" className="card-img-top" alt={imgAlt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{bodyText}</p>
        <a href="/" className="btn btn-primary">Читать далее</a>
      </div>
    </div>
  );
}

NewsArticle.propTypes = {
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
};

export default NewsArticle;
