import React, { useState } from 'react';

type AlertPrors = {
  type: string;
  text: string;
  hasCloseButton: boolean;
};

export default function Alert({
  type,
  text,
  hasCloseButton,
}: AlertPrors): React.ReactElement | null {
  const [isAlertVisible, setIsAlertVisible] = useState(true as boolean);

  if (!isAlertVisible) {
    return null;
  }

  return (
    <div
      className={`alert alert-${type} ${
        hasCloseButton ? 'alert-dismissible' : ''
      } fade show text-center mt-3`}
    >
      <span>{text}</span>
      {hasCloseButton && (
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={() => setIsAlertVisible(false)}
        >
          &times;
        </button>
      )}
    </div>
  );
}
