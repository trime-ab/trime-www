import axios from 'axios';

import l from '../Logger/Logger';
import mailChimpStore from '../MailChimp/MailChimp.store';

class AxiosService {
  private BASE_URL: string = mailChimpStore.API_ROOT;

  init = (): void => {
    axios.defaults.baseURL = this.BASE_URL;
    l.debug('Axios initialised');
  };
}

const axiosService = new AxiosService();
export default axiosService;
