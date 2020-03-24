import "./HomeTopContent.css";

import classnames from "classnames";
import { inject, observer } from "mobx-react";
import React from "react";

import ResponsiveProps from "../../../logic/Responsive/Responsive.props";
import newPhoneMapAndDudeImg from "../../assets/new-phone-map-and-dude.png";
import trimeImg from "../../assets/trime.png";
import SignUp from "../SignUp/SignUp";

@inject("responsiveState")
@observer
class HomeTopContent extends React.Component<ResponsiveProps> {
  render() {
    const className = this.getClassNames;

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
            Where personal training is made accessible for trainers and Trainees.
          </div>
          <br />
          <h3>
            On your phone 2020.
            </h3>
            Do you want to know more? <br/>
            Sign up below
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
