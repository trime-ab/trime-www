import './HomeBottom.css';

import React from 'react';

import phonesAndDudeImg from '../../assets/phones-and-dude.png';
import trimeImg from '../../assets/trime.png';
import SignUp from '../SignUp/SignUp';
import { observer, inject } from 'mobx-react';
import ResponsiveProps from '../../../logic/Responsive/Responsive.props';
import classnames from 'classnames';

@inject('responsiveState')
@observer
class HomeBottom extends React.Component<ResponsiveProps> {
  render() {
    const className = this.getClassNames;

    return (
      <div className="bottom-container">
        <div className={className('bottom-content')}>
        </div>
      </div>
    );
  }

  private getClassNames = (className: string): string => {
    const isMobile = this.props.responsiveState.isMobileClassNames;
    return classnames(className, isMobile);
  };
}

export default HomeBottom;
