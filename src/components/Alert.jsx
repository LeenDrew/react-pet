import React from 'react';
import PropTypes from 'prop-types';

function Alert({ style, type, text, hasCloseButton, changeAlertVisibility }) {
  return (
    <div
      className={`alert alert-${type} ${
        hasCloseButton ? 'alert-dismissible' : ''
      } fade show text-center`}
      style={style}
    >
      <span>{text}</span>
      {hasCloseButton && (
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={() => changeAlertVisibility(false)}
        >
          &times;
        </button>
      )}
    </div>
  );
}

Alert.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  hasCloseButton: PropTypes.bool,
  changeAlertVisibility: PropTypes.func,
};

Alert.defaultProps = {
  style: null,
  type: 'warning',
  hasCloseButton: false,
  changeAlertVisibility: null,
};

export default Alert;
