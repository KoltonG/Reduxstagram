// Library imports
import React from 'react';
import { render } from 'react-dom';

// Importing styles for webpack. Webpack will insert the style tag in the index.html file
import CSS from './styles/style.styl';

// Components imports
import Main from './components/Main'; 
import Single from './components/Single'; 
import PhotoGrid from './components/PhotoGrid';

// React router and dependencies import
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
/**
 * The router is binded to the page and then paths are placed as children components
 * 
 * Child routes specify a path and a component to render.
 * 
 * The IndexRoute component will only call the component when at the "/" endpoint
 * 
 * You can also nest routes within each other
 */
const router = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path='/view/:postId' component={Single}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'));
