import './Home.css'

import { inject, observer } from 'mobx-react'
import React from 'react'

import HomeBody from '../../components/HomeBody/HomeBody'
import HomeBottom from '../../components/HomeBottom/HomeBottom'
import HomeBottomSignUp from '../../components/HomeBottomSignUp/HomeBottomSignUp'
import HomeTop from '../../components/HomeTop/HomeTop'
import signUpState, { SignUpState } from '../../components/SignUp/SignUp.state'

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
        {!this.props.signUpState.signUpClicked && <HomeBottomSignUp />}
        <HomeBottom />
      </div>
    );
  }
}

export default Home;
