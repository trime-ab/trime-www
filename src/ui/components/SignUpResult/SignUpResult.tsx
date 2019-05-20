import './SignUpResult.css';

import classnames from 'classnames';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { animateScroll } from 'react-scroll';

import ResponsiveProps from '../../../logic/Responsive/Responsive.props';
import happyDude from '../../assets/happy-dude.png';
import signUpResultState, { SignUpResultState } from './SignUpResult.state';

interface SignUpResultProps extends ResponsiveProps {
  signUpResultState?: SignUpResultState;
}

@inject('responsiveState', 'signUpResultState')
@observer
class SignUpResult extends React.Component<SignUpResultProps> {
  componentDidMount() {
    animateScroll.scrollToTop();
  }

  componentWillUnmount() {
    this.props.signUpResultState.reset();
  }

  render() {
    const isMobile = this.props.responsiveState.isMobileClassNames;
    const containerClassNames = classnames(
      'sign-up-result-container',
      isMobile
    );

    return (
      <div className={containerClassNames}>
        {this.props.signUpResultState.isError &&
        !this.props.signUpResultState.errorIsAlreadyExists ? (
          <div>
            <p>Oops! Something went wrong.</p>
            <p>
              Please try again. If you get this error again, please contact us
              at <a href="mailto:info@trime.app">info@trime.app</a>
            </p>
            <div className="go-back">
              <input
                type="button"
                value="Go back"
                className="button"
                onClick={() => this.props.signUpResultState.reset()}
              />
            </div>
          </div>
        ) : (
          <div>
            <img src={happyDude} alt="TRIME" />
            <h1>Signed up!</h1>
          </div>
        )}
      </div>
    );
  }
}

export default SignUpResult;
