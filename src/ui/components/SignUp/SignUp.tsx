import './SignUp.css';

import classnames from 'classnames';
import { inject, observer } from 'mobx-react';
import React from 'react';

import ResponsiveProps from '../../../logic/Responsive/Responsive.props';
import signUpState, { SignUpState } from './SignUp.state';
import { PersonStore } from '../../../logic/Person/Person.store';
import l from '../../../logic/Logger/Logger';
import emailService from '../../../logic/email/EmailService';

interface SignUpProps extends ResponsiveProps {
  signUpState?: SignUpState;
  personStore?: PersonStore;
}

@inject('signUpState', 'responsiveState', 'personStore')
@observer
class SignUp extends React.Component<SignUpProps> {
  render() {
    const state = this.props.signUpState;
    const person = this.props.personStore.person;
    const isMobile = this.props.responsiveState.isMobileClassNames;
    const containerClassNames = classnames('sign-up-container', isMobile);
    const inputClassNames = classnames('text-input', isMobile);
    const buttonClassNames = classnames('button', isMobile);

    return (
      <div className={containerClassNames}>
        <form>
          <input
            type="text"
            value={person.email_address}
            placeholder="Email"
            className={inputClassNames}
            onChange={e => person.setEmailAddress(e.target.value)}
          />
          <button
            className={buttonClassNames}
            onClick={() => state.toggleSignUpClicked()}
            disabled={!state.isValid}
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
