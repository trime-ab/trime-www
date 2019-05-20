import { action, computed, observable } from 'mobx';

import Channel from '../../../domain/Channel';
import emailService from '../../../logic/email/EmailService';
import personStore from '../../../logic/Person/Person.store';
import phoneService from '../../../logic/phone/PhoneService';

export class HomeTopSignUpState {
  @observable touchedFields: string[] = [];
  @observable submitHovered: boolean = false;
  @observable focusField: string = 'phone';
  @observable signUpInProgress: boolean = false;

  @computed get isPhoneInvalid() {
    return this.isTouched('phone')
      ? !phoneService.validatePhoneNumber(personStore.person.phone)
      : false;
  }
  @computed get isEmailInvalid() {
    return this.isTouched('email_address')
      ? !emailService.validateEmail(personStore.person.email)
      : false;
  }
  @computed get isEmailEmpty() {
    return (
      this.isTouched('email_address') && this.isEmpty(personStore.person.email)
    );
  }
  @computed get isFirstNameEmpty() {
    return (
      this.isTouched('firstName') && this.isEmpty(personStore.person.firstName)
    );
  }
  @computed get isLastNameEmpty() {
    return (
      this.isTouched('lastName') && this.isEmpty(personStore.person.lastName)
    );
  }
  @computed get isCityEmpty() {
    return this.isTouched('city') && this.isEmpty(personStore.person.city);
  }
  @computed get isTypeEmpty() {
    return this.submitHovered && this.isEmpty(personStore.person.type);
  }
  @computed get isPermissionFalse() {
    return this.submitHovered && this.isEmpty(personStore.person.channels);
  }

  @action setSubmitHovered = () => {
    this.submitHovered = true;
  };

  @action addTouched = (fieldName: string): void => {
    this.touchedFields.push(fieldName);
  };

  @action setFocusOnEmail = (): void => {
    this.focusField = 'email';
  };

  @action toggleAgreeToPermissions = (): void => {
    if (personStore.hasAgreed) {
      personStore.person.setChannels([]);
    } else {
      personStore.person.setChannels([Channel.EMAIL, Channel.SMS]);
    }
  };

  @action toggleSigningUpInProgress = (): void =>{
    this.signUpInProgress = !this.signUpInProgress;
  }

  private isTouched = (fieldName: string): boolean => {
    return !!this.touchedFields.filter(n => n === fieldName).length;
  };

  private isEmpty = (value: string | any[]): boolean => {
    return (
      value === undefined || value === null || value === '' || value === []
    );
  };
}

const homeTopSignUpState = new HomeTopSignUpState();
export default homeTopSignUpState;
