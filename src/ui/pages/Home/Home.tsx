import './Home.css';

import { observer } from 'mobx-react';
import React from 'react';

import HomeBody from '../../components/HomeBody/HomeBody';
import HomeBottom from '../../components/HomeBottom/HomeBottom';
import HomeBottomSignUp from '../../components/HomeBottomSignUp/HomeBottomSignUp';
import HomeTop from '../../components/HomeTop/HomeTop';

@observer
class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <HomeTop />
        <HomeBody />
        <HomeBottomSignUp />
        <HomeBottom />
      </div>
    );
  }
}

export default Home;
