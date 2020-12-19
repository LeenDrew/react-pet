import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { classes, text } = props;
  return (
    <button
      type="button"
      className={classes}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  classes: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
