import { action, observable } from 'mobx';

import Channel from './Channel';
import PersonType from './PersonType';

class Person {
  @observable email: string = '';
  @observable firstName: string = '';
  @observable lastName: string = '';
  @observable city: string = '';
  @observable type: PersonType = null;
  @observable channels: Channel[] = [];
  @observable phone?: string = '';

  @action setEmail = (email: string) => {
    this.email = email;
  };
  @action setFirstName = (firstName: string) => {
    this.firstName = firstName;
  };
  @action setLastName = (lastName: string) => {
    this.lastName = lastName;
  };
  @action setCity = (city: string) => {
    this.city = city;
  };
  @action setType = (type: PersonType) => {
    this.type = type;
  };
  @action setChannels = (channels: Channel[]) => {
    this.channels = channels;
  };
  @action setPhone = (phone: string) => {
    this.phone = phone;
  };
}

export default Person;
