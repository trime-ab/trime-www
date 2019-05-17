import './HomeTopContent.css';

import React from 'react';

import phonesAndDudeImg from '../../assets/phones-and-dude.png';
import trimeImg from '../../assets/trime.png';
import SignUp from '../SignUp/SignUp';
import { observer, inject } from 'mobx-react';
import ResponsiveProps from '../../../logic/Responsive/Responsive.props';
import classnames from 'classnames';

@inject('responsiveState')
@observer
class HomeTopContent extends React.Component<ResponsiveProps> {
  render() {
    const className = this.getClassNames;

    return (
          <div className={className('top-content')}>
            <div className={className('top-image-container')}>
              <img src={phonesAndDudeImg} alt="Trime" />
            </div>
            <div className={className('top-text-container')}>
              <h1>Welcome to</h1>
              <img src={trimeImg} alt="Trime" className={className('trime')} />
              <div className={className('top-text')}>
                Trime is an app for <br /> Personal trainers & trainees. <br />
                Scroll down and we will tell you more!
              </div>
              <SignUp />
            </div>
          </div>
    );
  }

  private getClassNames = (className: string): string => {
    const isMobile = this.props.responsiveState.isMobileClassNames;
    return classnames(className, isMobile);
  };
}

export default HomeTopContent;
