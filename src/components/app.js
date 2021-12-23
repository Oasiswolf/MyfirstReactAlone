import React, { Component } from 'react';

import NavPage from './navLink';
import PageContent from './page-content';
import D4Dice from './dice/d4'


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Nathan's First Alone React Project</h1>
        <button onClick={D4Dice => console.log(value)}>D4</button>
        <NavPage />
        <PageContent />
      </div>
    );
  }
}