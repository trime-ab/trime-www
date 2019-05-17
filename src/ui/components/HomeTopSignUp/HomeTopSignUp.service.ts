import { action } from 'mobx';

import Channel from '../../../domain/Channel';
import { personStore } from '../../../stores';

export class HomeTopSignUpService {
  @action toggleAgreeToPermissions = (): void => {
    if (personStore.hasAgreed) {
      personStore.person.setMarketingPermissions([]);
    } else {
      personStore.person.setMarketingPermissions([Channel.EMAIL, Channel.SMS]);
    }
  };
}

const homeTopSignUpService = new HomeTopSignUpService();
export default homeTopSignUpService;
