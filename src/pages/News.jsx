import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import PageTitle from '../components/PageTitle';
import NewsCard from '../components/NewsCard';

function News({ pageTitle }) {
  const [newsArticleList, setNewsArticleList] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=9')
      .then((response) => setNewsArticleList(response.data));
    axios
      .get('https://rasp.omgtu.ru/api/schedule/group/513?start=2021.02.08&finish=2021.02.14&lng=1')
      .then((response) => console.log(response));
  }, []);

  return (
    <div className="row news">
      <div className="col-12">
        <PageTitle pageTitle={pageTitle} />
      </div>
      {newsArticleList &&
        newsArticleList.map((newsArticleItem) => (
          <div className="col-lg-4 col-xs-12 col-sm-6 my-col" key={newsArticleItem.id}>
            <NewsCard
              title={newsArticleItem.title}
              bodyText={newsArticleItem.body}
              imgAlt="Заглушка"
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
