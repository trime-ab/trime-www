import axios from 'axios';

import firebase from '../Firebase/Firebase';
import l from '../Logger/Logger';

class AxiosService {
  private BASE_URL: string = firebase.FUNCTIONS_URL;

  init = (): void => {
    axios.defaults.baseURL = this.BASE_URL;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    l.debug('Axios initialised');
  };
}

const axiosService = new AxiosService();
export default axiosService;
