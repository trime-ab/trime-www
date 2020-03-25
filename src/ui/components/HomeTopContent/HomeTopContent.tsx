import "./HomeTopContent.css";

import classnames from "classnames";
import { inject, observer } from "mobx-react";
import React from "react";

import ResponsiveProps from "../../../logic/Responsive/Responsive.props";
import newPhoneMapAndDudeImg from "../../assets/new-phone-map-and-dude.png";
import trimeImg from "../../assets/trime.png";
import SignUp from "../SignUp/SignUp";
import { SignUpState } from "../SignUp/SignUp.state";
import { HomeTopSignUpState } from "../HomeTopSignUp/HomeTopSignUp.state";
import { animateScroll } from "react-scroll";

interface HomeTopProps extends ResponsiveProps {
  signUpState?: SignUpState;
  homeTopSignUpState?: HomeTopSignUpState;
}

@inject("responsiveState", 'signUpState', 'homeTopSignUpState')
@observer
class HomeTopContent extends React.Component<HomeTopProps> {
  render() {
    const className = this.getClassNames;
    const isMobile = this.props.responsiveState.isMobileClassNames;
    const classNames = classnames("home-signup-container", isMobile);
    const buttonClassNames = classnames('button', isMobile);

    return (
      <div className={className("top-content")}>
        <div className={className("top-image-container")}>
          <div className={className("top-image-wrapper")}>
            <img src={newPhoneMapAndDudeImg} alt="Trime" />
          </div>
        </div>
        <div className={className("top-text-container")}>
          <h1>Welcome to</h1>
          <img src={trimeImg} alt="Trime" className={className("trime")} />
          <div className={className("top-text")}>
            Where personal training is made accessible for trainers and
            trainees.
            <h3 >On your phone in 2020.</h3>
          </div>
          <br />
          <div className={className("top-text2")}>
            Do you want to know more?
          </div>
          <div className={className("beta-box")}>
          <SignUp />
          <h3>Or sign up for the beta version here.</h3>
          </div>
          <div className={classNames}>
            <button
              type="button"
              className={buttonClassNames}
              onClick={() => this.goToSignUp()}
            >
              I want the beta!
            </button>
          </div>
        </div>
      </div>
    );
  }

  private getClassNames = (className: string): string => {
    const isMobile = this.props.responsiveState.isMobileClassNames;
    return classnames(className, isMobile);
  };

  private goToSignUp = (): void => {
    this.props.homeTopSignUpState.setFocusOnEmail();
    this.props.signUpState.setSignUpClicked();
    animateScroll.scrollToTop();
  };
}

export default HomeTopContent;
