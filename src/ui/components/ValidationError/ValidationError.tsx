import './ValidationError.css';

import classnames from 'classnames';
import React from 'react';

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
