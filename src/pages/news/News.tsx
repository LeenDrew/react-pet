import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from '../../components/newsCard/NewsCard';
import './News.scss';

type NewsArticleItem = {
  id: number;
  title: string;
  body: string;
};

export default function News(): React.ReactElement {
  const [newsArticleList, setNewsArticleList] = useState([]);

  const fetchNews: () => void = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=9');
      setNewsArticleList(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchNews();
    // axios
    //   .get(
    //     'https://cors-anywhere.herokuapp.com/https://rasp.omgtu.ru/api/schedule/group/513?start=2021.02.08&finish=2021.02.14&lng=1',
    //   )
    //   // eslint-disable-next-line no-console
    //   .then((response) => console.log(response.data));
  }, []);

  return (
    <div className="row news">
      <div className="col-12">
        <h1 className="page-title text-center">Новости</h1>
      </div>
      {!!newsArticleList.length &&
        newsArticleList.map((newsArticleItem: NewsArticleItem) => (
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
