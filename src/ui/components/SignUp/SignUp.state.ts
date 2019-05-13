import { observable, action } from 'mobx';
import l from '../../../logic/Logger';
import { ChangeEvent } from 'react';

export class SignUpState {
  @observable emailInput: string = '';

  @action setEmailInput = (email: ChangeEvent<HTMLInputElement>): void => {
    l.debug(email.target.value);
    this.emailInput = email.target.value;
  };
}

const signUpState = new SignUpState();
export default signUpState;
