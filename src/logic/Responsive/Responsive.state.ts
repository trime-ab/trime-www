import { action, observable, computed } from 'mobx';

export class ResponsiveState {
  @observable isMobile: boolean = false;

  @computed get isMobileClassNames(): { mobile: boolean; desktop: boolean } {
    return { mobile: this.isMobile, desktop: !this.isMobile };
  }
  @action setIsMobile = (): void => {
    this.isMobile = true;
  };

  @action setIsNotMobile = (): void => {
    this.isMobile = false;
  };
}

const responsiveState = new ResponsiveState();
export default responsiveState;
