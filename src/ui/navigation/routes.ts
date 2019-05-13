import { ReactComponentLike } from 'prop-types';
import { RouteDefinition } from 'route-node';

import Home from '../pages/Home/Home';

export interface Route extends RouteDefinition {
  component: ReactComponentLike;
}

const routes: Route[] = [{ name: 'home', path: '/', component: Home }];

export default routes;
