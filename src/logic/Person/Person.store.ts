import { computed, observable } from 'mobx';

import Person from '../../domain/Person';
import PersonType from '../../domain/PersonType';
import emailService from '../email/EmailService';
import phoneService from '../phone/PhoneService';
import stringUtils from '../StringUtils/StringUtils';

export class PersonStore {
  @observable person: Person = new Person();

  @computed get isValid(): boolean {
    const p = this.person;
    return (
      stringUtils.hasValue(p.email) &&
      emailService.validateEmail(p.email) &&
      phoneService.validatePhoneNumber(p.phone) &&
      stringUtils.hasValue(p.firstName) &&
      stringUtils.hasValue(p.lastName) &&
      stringUtils.hasValue(p.city) &&
      this.person.type !== null &&
      this.hasAgreed
    );
  }

  @computed get isTypeTrainer(): boolean {
    return this.person.type !== null && this.person.type === PersonType.TRAINER;
  }

  @computed get isTypeTrainee(): boolean {
    return this.person.type !== null && this.person.type === PersonType.TRAINEE;
  }

  @computed get hasAgreed(): boolean {
    return this.person.channels.length > 0;
  }
}

const personStore = new PersonStore();
export default personStore;
