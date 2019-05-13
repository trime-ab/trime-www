import './HomeSignUp.css';

import { inject, observer } from 'mobx-react';
import React from 'react';

import ResponsiveProps from '../../../logic/Responsive/Responsive.props';
import signUpImg from '../../assets/sign-up.png';
import classnames from 'classnames';

@inject('responsiveState')
@observer
class HomeSignUp extends React.Component<ResponsiveProps> {
  render() {
    const isMobile = this.props.responsiveState.isMobileClassNames;
    const classNames = classnames('home-signup-container', isMobile);
    
    return (
      <div className={classNames}>
        <img src={signUpImg} alt="Trime" />
      </div>
    );
  }
}

export default HomeSignUp;
