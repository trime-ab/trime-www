import axiosService from '../logic/Axios/Axios.service';
import mailChimp from '../logic/MailChimp/MailChimp';
import responsive from '../logic/Responsive/Responsive';
import routerService from './navigation/Router.service';

class AppService {
  init = (): void => {
    routerService.init();
    mailChimp.init();
    axiosService.init();
    responsive.init();
  };
}

const appService = new AppService();
export default appService;
