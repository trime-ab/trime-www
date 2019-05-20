import './HomeTop.css';

import classnames from 'classnames';
import { inject, observer } from 'mobx-react';
import React from 'react';

import ResponsiveProps from '../../../logic/Responsive/Responsive.props';
import HomeTopContent from '../HomeTopContent/HomeTopContent';
import HomeTopSignUp from '../HomeTopSignUp/HomeTopSignUp';
import signUpState, { SignUpState } from '../SignUp/SignUp.state';
import SignUpResult from '../SignUpResult/SignUpResult';
import signUpResultState, {
  SignUpResultState,
} from '../SignUpResult/SignUpResult.state';
import l from '../../../logic/Logger/Logger';
import { toJS } from 'mobx';

interface HomeTopProps extends ResponsiveProps {
  signUpState?: SignUpState;
  signUpResultState?: SignUpResultState;
}
@inject('responsiveState', 'signUpState', 'signUpResultState')
@observer
class HomeTop extends React.Component<HomeTopProps> {
  render() {
    const isMobile = this.props.responsiveState.isMobileClassNames;
    const containerClassNames = classnames('top-container', isMobile, {
      'sign-up': this.props.signUpState.signUpClicked,
    });
    const backgroundClassNames = classnames('top-background', isMobile);

    return (
      <div className={containerClassNames}>
        <div className={backgroundClassNames}>{this.renderTopComponent()}</div>
      </div>
    );
  }

  private renderTopComponent = () => {
    if (this.props.signUpResultState.hasResult) {
      return <SignUpResult />;
    } else if (this.props.signUpState.signUpClicked) {
      return <HomeTopSignUp />;
    }
    return <HomeTopContent />;
  };
}

export default HomeTop;
