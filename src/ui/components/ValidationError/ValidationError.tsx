import './ValidationError.css';

import React from 'react';
import classnames from 'classnames';

interface ValidationErrorProps {
  isInvalid: boolean;
  message: string;
  isRadio?: boolean;
}

class ValidationError extends React.Component<ValidationErrorProps> {
  render() {
    const classNames = classnames('validation-error', {
      'radio-validation': !!this.props.isRadio,
    });

    return (
      <small className={classNames}>
        {this.props.isInvalid ? this.props.message : <span>&nbsp;</span>}
      </small>
    );
  }
}

export default ValidationError;
