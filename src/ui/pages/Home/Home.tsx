import './Home.css';

import { observer } from 'mobx-react';
import React from 'react';
import HomeTop from '../../components/HomeTop/HomeTop';
import HomeBody from '../../components/HomeBody/HomeBody';
import HomeSignUp from '../../components/HomeSignUp/HomeSignUp';
import HomeBottom from '../../components/HomeBottom/HomeBottom';

@observer
class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <HomeTop />
        <HomeBody />
        <HomeSignUp />
        <HomeBottom />
      </div>
    );
  }
}

export default Home;
