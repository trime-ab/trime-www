import './SignUp.css';

import React from 'react';
import { inject, observer } from 'mobx-react';
import l from '../../../logic/Logger';
import signUpState from './SignUp.state';
import { SignUpState } from './SignUp.state';
import ResponsiveProps from '../../../logic/Responsive/Responsive.props';
import classnames from 'classnames';

interface SignUpProps extends ResponsiveProps {
  signUpState?: SignUpState;
}

@inject('signUpState', 'responsiveState')
@observer
class SignUp extends React.Component<SignUpProps> {
  render() {
    const state = this.props.signUpState;
    const isMobile = this.props.responsiveState.isMobileClassNames;
    const containerClassNames = classnames('sign-up-container', isMobile);
    const inputClassNames = classnames('text-input', isMobile);
    const buttonClassNames = classnames('button', isMobile);

    return (
      <div className={containerClassNames}>
        <input
          type="text"
          value={state.emailInput}
          placeholder="Email"
          className={inputClassNames}
          onChange={v => state.setEmailInput(v)}
        />
        <input type="button" value="Submit" className={buttonClassNames} />
      </div>
    );
  }
}

export default SignUp;
