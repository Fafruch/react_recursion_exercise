import React, { Component } from 'react';

export default class RecursiveComponent1 extends Component {
  recursiveRender = (components) => {
    const CurrentComponent = components.shift();

    if(CurrentComponent) {
      return (
        <CurrentComponent>
          {this.recursiveRender(components)}
        </CurrentComponent>
      );
    } else {
      return null;
    }
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
