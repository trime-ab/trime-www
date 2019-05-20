import './HomeBottomSignUp.css';

import classnames from 'classnames';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { animateScroll } from 'react-scroll';

import ResponsiveProps from '../../../logic/Responsive/Responsive.props';
import signUpImg from '../../assets/sign-up.png';
import { HomeTopSignUpState } from '../HomeTopSignUp/HomeTopSignUp.state';
import { SignUpState } from '../SignUp/SignUp.state';

interface HomeBottomSignUpProps extends ResponsiveProps {
  signUpState?: SignUpState;
  homeTopSignUpState?: HomeTopSignUpState;
}

@inject('responsiveState', 'signUpState', 'homeTopSignUpState')
@observer
class HomeBottomSignUp extends React.Component<HomeBottomSignUpProps> {
  render() {
    const isMobile = this.props.responsiveState.isMobileClassNames;
    const classNames = classnames('home-signup-container', isMobile);

    return (
      <div className={classNames}>
        <img src={signUpImg} alt="Sign Up" onClick={() => this.goToSignUp()} />
      </div>
    );
  }

  private goToSignUp = (): void => {
    this.props.homeTopSignUpState.setFocusOnEmail();
    this.props.signUpState.setSignUpClicked();
    animateScroll.scrollToTop();
  };
}

export default HomeBottomSignUp;
