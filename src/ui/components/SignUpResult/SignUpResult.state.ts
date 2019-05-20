import { action, computed, observable } from 'mobx';

import { personStore } from '../../../stores';
import l from '../../../logic/Logger/Logger';

interface MailChimpError {
  data: { [key: string]: string };
}

export class SignUpResultState {
  @observable private result: any = null;
  @observable private error: MailChimpError = null;
  @computed get isError(): boolean {
    return !!this.error;
  }
  @computed get hasResult(): boolean {
    return !!this.error || !!this.result;
  }
  @computed get errorIsAlreadyExists() {
    return this.error.data.detail.includes(
      `${personStore.person.email} is already a list member`
    );
  }

  @action setError = (error: MailChimpError): void => {
    this.error = error;
  };

  @action setResult = (result: any): void => {
    this.result = result;
  };

  @action reset = (): void => {
    this.result = null;
    this.error = null;
  };
}

const signUpResultState = new SignUpResultState();
export default signUpResultState;
