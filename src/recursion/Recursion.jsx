import React, { Component } from 'react';
import RecursiveComponent1 from './RecursiveComponent1';
import RecursiveComponent2 from './RecursiveComponent2';

const One = ({ children }) => (
  <div className="App-box">
    One
    {children}
  </div>
);

const Two = ({ children }) => (
  <div className="App-box">
    Two
    {children}
  </div>
);

const Three = ({ children }) => (
  <div className="App-box">
    Three
    {children}
  </div>
);

const components = [One, Two, Three];

export default class Recursion extends Component {
	render() {
  	return (
    	<div className='App-wrapper'>
        <h3>Recursive component technique no. 1</h3>
        <RecursiveComponent2 components={components} />
        <br />
        <h3>Recursive component technique no. 2</h3>
        <RecursiveComponent1 components={components} />
      </div>
    );
  }
};
