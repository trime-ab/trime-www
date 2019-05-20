import { action, computed, observable } from 'mobx';
import { ChangeEvent } from 'react';

import emailService from '../../../logic/email/EmailService';
import stringUtils from '../../../logic/StringUtils/StringUtils';
import { personStore } from '../../../stores';

export class SignUpState {
  @observable signUpClicked: boolean = false;

  @computed get isValid(): boolean {
    return (
      stringUtils.hasValue(personStore.person.email) &&
      emailService.validateEmail(personStore.person.email)
    );
  }

  @action toggleSignUpClicked = (): void => {
    this.signUpClicked = !this.signUpClicked;
  };

  @action setSignUpClicked = (): void => {
    this.signUpClicked = true;
  };
}

const signUpState = new SignUpState();
export default signUpState;
