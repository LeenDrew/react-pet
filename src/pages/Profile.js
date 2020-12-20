import React from 'react';
import PropTypes from 'prop-types';

function Profile(props) {
  const { pageTitle } = props;
  return (
    <div className="row profile">
      <div className="col-12">
        <h1 className="text-center page-title">
          {pageTitle}
        </h1>
      </div>
    </div>
  );
}

Profile.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Profile;
