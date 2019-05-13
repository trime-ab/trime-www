import 'moment/locale/en-gb';

import routerService from './navigation/Router.service';
import mailChimp from '../logic/MailChimp/MailChimp';
import responsive from '../logic/Responsive/Responsive';

class AppService {
  init = (): void => {
    routerService.init();
    mailChimp.init();
    responsive.init();
  };
}

const appService = new AppService();
export default appService;
