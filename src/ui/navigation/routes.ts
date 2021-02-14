import { ReactComponentLike } from 'prop-types'
import { RouteDefinition } from 'route-node'

import Home from '../pages/Home/Home'
import { Privacy } from '../pages/Privacy/Privacy'

export interface Route extends RouteDefinition {
  component: ReactComponentLike;
}

const routes: Route[] = [
  {name: 'home', path: '/', component: Home},
  {name: 'privacy', path: '/privacy', component: Privacy}
]

export default routes
