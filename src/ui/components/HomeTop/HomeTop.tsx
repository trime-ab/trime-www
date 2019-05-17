import './HomeTop.css';

import React from 'react';

import phonesAndDudeImg from '../../assets/phones-and-dude.png';
import trimeImg from '../../assets/trime.png';
import SignUp from '../SignUp/SignUp';
import { observer, inject } from 'mobx-react';
import ResponsiveProps from '../../../logic/Responsive/Responsive.props';
import classnames from 'classnames';
import HomeTopContent from '../HomeTopContent/HomeTopContent';
import signUpState from '../SignUp/SignUp.state';
import { ResponsiveState } from '../../../logic/Responsive/Responsive.state';
import { SignUpState } from '../SignUp/SignUp.state';
import HomeTopSignUp from '../HomeTopSignUp/HomeTopSignUp';

interface HomeTopProps extends ResponsiveProps {
  signUpState?: SignUpState;
}
@inject('responsiveState', 'signUpState')
@observer
class HomeTop extends React.Component<HomeTopProps> {
  componentDidMount() {
//    this.props.signUpState.toggleSignUpClicked();
  }

  render() {
    const isMobile = this.props.responsiveState.isMobileClassNames;
    const containerClassNames = classnames('top-container', isMobile, {
      'sign-up': this.props.signUpState.signUpClicked,
    });
    const backgroundClassNames = classnames('top-background', isMobile);

    return (
      <div className={containerClassNames}>
        <div className={backgroundClassNames}>
          {this.props.signUpState.signUpClicked ? (
            <HomeTopSignUp />
          ) : (
            <HomeTopContent />
          )}
        </div>
      </div>
    );
  }
}

export default HomeTop;
