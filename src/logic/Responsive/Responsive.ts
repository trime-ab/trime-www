import enquire from 'enquire.js';

import responsiveState from './Responsive.state';

export class Responsive {
  init = (): void => {
    enquire.register('screen and (max-width: 768px', this.onMobile);
    enquire.register('screen and (min-width: 769px', this.onDesktop);
  };

  private onMobile = (): void => {
    responsiveState.setIsMobile();
  };
  private onDesktop = (): void => {
    responsiveState.setIsNotMobile();
  };
}

const responsive = new Responsive();
export default responsive;
