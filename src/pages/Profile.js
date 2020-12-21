import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../components/PageTitle';

function Profile(props) {
  const { pageTitle } = props;

  return (
    <div className="row profile">
      <div className="col-12">
        <PageTitle pageTitle={pageTitle} />
      </div>
    </div>
  );
}

Profile.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Profile;
