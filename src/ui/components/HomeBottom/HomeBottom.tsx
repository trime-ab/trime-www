import './HomeBottom.css';

import classnames from 'classnames';
import { inject, observer } from 'mobx-react';
import React from 'react';

import ResponsiveProps from '../../../logic/Responsive/Responsive.props';

@inject('responsiveState')
@observer
class HomeBottom extends React.Component<ResponsiveProps> {
  render() {
    const className = this.getClassNames;

    return (
      <div className="bottom-container">
        <div className={className('bottom-content')} />
      </div>
    );
  }

  private getClassNames = (className: string): string => {
    const isMobile = this.props.responsiveState.isMobileClassNames;
    return classnames(className, isMobile);
  };
}

export default HomeBottom;
