import { action, observable, computed } from 'mobx';

import l from '../Logger';

export class ResponsiveState {
  @observable isMobile: boolean = false;
  
  @computed get isMobileClassNames(): { mobile: boolean; desktop: boolean } {
    return { mobile: this.isMobile, desktop: !this.isMobile };
  }
  @action setIsMobile = (): void => {
    l.log('Setting mobile!');
    this.isMobile = true;
  };

  @action setIsNotMobile = (): void => {
    l.log('Setting NOT MOBILE!');

    this.isMobile = false;
  };
}

const responsiveState = new ResponsiveState();
export default responsiveState;
