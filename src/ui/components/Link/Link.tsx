import './Link.css'

import classnames, { ClassArray } from 'classnames'
import React, { ReactNode, } from 'react'

import { routerStore } from '../../../stores'

export interface LinkProps {
  children: ReactNode;
  to: string;
  className?: string;
  active?: boolean;
}

class Link extends React.Component<LinkProps> {
  render() {
    const classNames: ClassArray = classnames('link', this.props.className, {
      active: this.props.active,
    });

    return (
      <div className="link-container">
        <a className={classNames} href="" onClick={this.clickHandler}>
          {this.props.children}
        </a>
      </div>
    );
  }

  private clickHandler = (): void => {
    routerStore.navigate(this.props.to);
  };
}

export default Link;
