import './SignUp.css';

import classnames from 'classnames';
import { inject, observer } from 'mobx-react';
import React from 'react';

import { PersonStore } from '../../../logic/Person/Person.store';
import ResponsiveProps from '../../../logic/Responsive/Responsive.props';
import homeTopSignUpState, {
  HomeTopSignUpState,
} from '../HomeTopSignUp/HomeTopSignUp.state';
import signUpState, { SignUpState } from './SignUp.state';

interface SignUpProps extends ResponsiveProps {
  signUpState?: SignUpState;
  personStore?: PersonStore;
  homeTopSignUpState?: HomeTopSignUpState;
}

@inject('signUpState', 'responsiveState', 'personStore', 'homeTopSignUpState')
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
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <input
            type="text"
            value={person.email}
            placeholder="Email"
            className={inputClassNames}
            onChange={e => person.setEmail(e.target.value)}
          />
          <button
            type="submit"
            className={buttonClassNames}
            disabled={!state.isValid}
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }

  private handleFormSubmit = e => {
    e.preventDefault();
    this.props.signUpState.toggleSignUpClicked();
  };
}

export default SignUp;
