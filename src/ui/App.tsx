import './App.css'

import classnames from 'classnames'
import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'

import l from '../logic/Logger/Logger'
import ResponsiveProps from '../logic/Responsive/Responsive.props'
import routerStore from './navigation/Router.store'
import Link from './components/Link/Link'

@inject('responsiveState')
@observer
class App extends Component<ResponsiveProps> {
  render() {
    const isMobile = this.props.responsiveState.isMobileClassNames
    const appClassNames = classnames('App', isMobile)
    if (routerStore.isStarted) {
      return (
        <div className={appClassNames}>
          <header className="header"/>
          <main className="main-container">
            {React.createElement(routerStore.currentComponent, {})}
          </main>
        </div>
      )
    } else {
      l.debug(`For some reason we don't have a router yet. Patience...`)
      return null
    }
  }
}

export default App
