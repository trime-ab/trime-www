import axios from 'axios';

import Person from '../../domain/Person';
import l from '../Logger/Logger';

class MailChimp {
  private readonly API_ADD_PATH = '/mailchimp-add';

  init = (): void => {};

  add = async (person: Person): Promise<any> => {
    try {
      l.debug('Adding...', person);
      const result = await axios.post(this.API_ADD_PATH, person);
      l.debug('Successfully added', result);
      return result;
    } catch (error) {
      l.error(error.response);
      throw error.response;
    }
  };
}

const mailChimp = new MailChimp();
export default mailChimp;
