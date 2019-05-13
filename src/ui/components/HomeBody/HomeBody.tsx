import './HomeBody.css';

import React from 'react';

import trainerLoveTraineeImg from '../../assets/trainer-love-trainee.png';
import storyImg from '../../assets/trime-story-1.png';
import ResponsiveProps from '../../../logic/Responsive/Responsive.props';
import { observer, inject } from 'mobx-react';
import classnames from 'classnames';
import l from '../../../logic/Logger';

@inject('responsiveState')
@observer
class HomeBody extends React.Component<ResponsiveProps> {
  render() {
    const isMobile = this.props.responsiveState.isMobileClassNames;
    const containerClassNames = classnames('body-container', isMobile);
    
    return (
      <div className={containerClassNames}>
        <img src={trainerLoveTraineeImg} alt="Trime" />
        <h2>
          Trime is an app for
          <br />
          personal trainers & trainees!
        </h2>
        <img src={storyImg} alt="Trime" />
      </div>
    );
  }
}

export default HomeBody;
