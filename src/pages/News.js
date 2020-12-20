import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import NewsCard from '../components/NewsCard';

function News(props) {
  const [newsArticleList, setNewsArticleList] = useState([]);
  const { pageTitle } = props;
  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/posts?_limit=9')
      .then((response) => setNewsArticleList(response.data));
  }, []);

  return (
    <div className="row news">
      <div className="col-12">
        <h1 className="text-center page-title">
          {pageTitle}
        </h1>
      </div>
      {newsArticleList.map((newsArticleItem) => (
        <div className="col-lg-4 col-xs-12 col-sm-6 my-col">
          <NewsCard
            key={newsArticleItem.id}
            title={newsArticleItem.title}
            bodyText={newsArticleItem.body}
          />
        </div>
      ))}
    </div>
  );
}

News.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default News;
