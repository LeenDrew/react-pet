import React from 'react';
import './NewsCard.scss';

export type NewsCardProps = {
  imgAlt: string;
  title: string;
  bodyText: string;
};

export default function NewsCard({ imgAlt, title, bodyText }: NewsCardProps): React.ReactElement {
  return (
    <div className="card news-card">
      <img src="https://picsum.photos/350/175" className="card-img-top" alt={imgAlt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{bodyText}</p>
        <button type="button" className="btn btn-primary">
          Читать далее
        </button>
      </div>
    </div>
  );
}
