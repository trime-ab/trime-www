import { observable, action } from 'mobx';
import ContactStatus from './ContactStatus';
import PersonType from './PersonType';
import Channel from './Channel';

class Person {
  @observable email_address: string = '';
  @observable firstName: string = '';
  @observable lastName: string = '';
  @observable status: ContactStatus = null;
  @observable city: string = '';
  @observable type: PersonType = null;
  @observable marketing_permissions: Channel[] = [];
  @observable phone?: string = '';

  @action setEmailAddress = (email_address: string) => {
    this.email_address = email_address;
  };
  @action setFirstName = (firstName: string) => {
    this.firstName = firstName;
  };
  @action setLastName = (lastName: string) => {
    this.lastName = lastName;
  };
  @action setStatus = (status: ContactStatus) => {
    this.status = status;
  };
  @action setCity = (city: string) => {
    this.city = city;
  };
  @action setType = (type: PersonType) => {
    this.type = type;
  };
  @action setMarketingPermissions = (marketing_permissions: Channel[]) => {
    this.marketing_permissions = marketing_permissions;
  };
  @action setPhone = (phone: string) => {
    this.phone = phone;
  };
}

export default Person;
