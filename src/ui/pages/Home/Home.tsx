import './Home.css'

import { inject, observer } from 'mobx-react'
import React from 'react'

import HomeTop from '../../components/HomeTop/HomeTop'
import { SignUpState } from '../../components/SignUp/SignUp.state'

interface Props {
  signUpState?: SignUpState
}

@inject('signUpState')
@observer
class Home extends React.Component<Props> {
  render() {
    return (
      <div className="home-container">
        <HomeTop />
        {!this.props.signUpState.signUpClicked }
      </div>
    );
  }
}

export default Home;
