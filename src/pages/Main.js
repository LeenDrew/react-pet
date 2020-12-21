import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../components/PageTitle';

function Main(props) {
  const { pageTitle } = props;

  return (
    <div className="row main">
      <div className="col-12">
        <PageTitle pageTitle={pageTitle} />
      </div>
    </div>
  );
}

Main.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Main;
