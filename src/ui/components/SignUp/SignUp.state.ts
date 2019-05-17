import { observable, action, computed } from 'mobx';
import { ChangeEvent } from 'react';
import emailService from '../../../logic/email/EmailService';
import l from '../../../logic/Logger/Logger';
import { personStore } from '../../../stores';
import stringUtils from '../../../logic/StringUtils/StringUtils';

export class SignUpState {
  @observable signUpClicked: boolean = false;

  @computed get isValid(): boolean {
    return (
      stringUtils.hasValue(personStore.person.email_address) &&
      emailService.validateEmail(personStore.person.email_address)
    );
  }

  @action toggleSignUpClicked = (): void => {
    this.signUpClicked = !this.signUpClicked;
  };
}

const signUpState = new SignUpState();
export default signUpState;
