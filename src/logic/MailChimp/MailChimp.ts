import axios, { AxiosError } from 'axios';

import Person from '../../domain/Person';
import personService from '../Person/Person.service';
import mailChimpStore from './MailChimp.store';
import l from '../Logger/Logger';

class MailChimp {
  init = (): void => {
  };

  add = async (person: Person): Promise<void> => {
    const mailChimpContact = personService.transformToMailChimpContact(person);
    try {
      await axios.post(this.getMembersPath());
    } catch (error) {
      l.error(error);
      l.log('Do something!');
    }
  };

  private getMembersPath = (): string => {
    return `/lists/${mailChimpStore.LIST_ID}/members/`;
  };
}

const mailChimp = new MailChimp();
export default mailChimp;
