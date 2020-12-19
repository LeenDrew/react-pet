import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsArticle from '../components/NewsArticle';

function News() {
  const [newsArticleList, setNewsArticleList] = useState([]);

  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/posts?_limit=9')
      .then((response) => setNewsArticleList(response.data));
  }, []);

  return (
    <div className="row news-article-container">
      {newsArticleList.map((newsArticleItem) => (
        <div className="col-lg-4 col-xs-12 col-sm-6 my-col">
          <NewsArticle
            key={newsArticleItem.id}
            title={newsArticleItem.title}
            bodyText={newsArticleItem.body}
          />
        </div>
      ))}
    </div>
  );
}

export default News;
