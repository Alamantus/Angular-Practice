require("../sass/main.scss");
const jQuery = require('jquery');
window.jQuery = jQuery;
const $ = jQuery;
window.$ = $;
require('bootstrap-sass');

const shuffle = require('knuth-shuffle');

import React from 'react';
import {render} from 'react-dom';

import TestComponent from './TestComponent.jsx';

import traits from '../data/traits.json';

class App extends React.Component {
  render () {
    return (
      <div>
        <p>{traits[0].name}</p>
        <TestComponent />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
