import { computed } from 'mobx';
import { mobxPlugin } from 'mobx-router5';
import createRouter, { Options, Router } from 'router5';
import browserPlugin from 'router5-plugin-browser';

import { routerStore } from '../../stores';
import routes from './routes';

class RouterService {
  options: Partial<Options> = {
    defaultRoute: 'upcoming',
  };

  @computed
  get router(): Router {
    return routerStore.router;
  }

  init = (): void => {
    const router = createRouter(routes, this.options);
    router.usePlugin(browserPlugin({}));
    router.usePlugin(mobxPlugin(routerStore));
    router.start();
    console.debug('Router initialised');
  };
}

const routerService = new RouterService();
export default routerService;
