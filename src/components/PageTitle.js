import React from 'react';
import PropTypes from 'prop-types';

function PageTitle(props) {
  const { pageTitle } = props;
  return (
    <h1 className="text-center">
      {pageTitle}
    </h1>
  );
}

PageTitle.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default PageTitle;
