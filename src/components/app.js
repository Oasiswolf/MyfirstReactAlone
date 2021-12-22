import React, { Component } from 'react';

import NavPage from './navLink'
import PageContent from './page-content'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Nathan's First Alone React Project</h1>
        
        <NavPage />
        <PageContent />
      </div>
    );
  }
}