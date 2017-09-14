import React, { Component } from 'react';

export default class RecursiveComponent2 extends Component {
  recursiveRender = (components, i = 0) => {
    if(i >= components.length) return;

    const CurrentComponent = components[i];

    return (
      <CurrentComponent>
        {this.recursiveRender(components, ++i)}
      </CurrentComponent>
    );
  }

  render() {
    const { components } = this.props;

    return (
      <div>
        {this.recursiveRender(components)}
      </div>
    );
  }
};
