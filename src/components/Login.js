import React from 'react';
import PropTypes from 'prop-types';

function Login(props) {
  const { text } = props;
  return (
    <div className="row">
      <div className="col-12">{text}</div>
    </div>
  );
}

Login.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Login;
