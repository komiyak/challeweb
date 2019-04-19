import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faReply, faRetweet, faHeart } from '@fortawesome/free-solid-svg-icons';
import Articles from './Articles';

library.add(faStroopwafel);
library.add(faReply);
library.add(faRetweet);
library.add(faHeart);

class App extends Component {
  render() {
    return (
        <section className="section">
          <Articles/>
        </section>
    );
  }
}

export default App;
