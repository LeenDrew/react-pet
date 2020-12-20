import React from 'react';
import PropTypes from 'prop-types';

function Main(props) {
  const { pageTitle } = props;
  return (
    <div className="row main">
      <div className="col-12">
        <h1 className="text-center page-title">
          {pageTitle}
        </h1>
      </div>
    </div>
  );
}

Main.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Main;
