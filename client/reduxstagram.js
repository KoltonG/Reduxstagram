import React                          from 'react';
import { render }                     from 'react-dom';
import { Router, Route, IndexRoute }  from 'react-router';
import { Provider }                   from 'react-redux';
import store, { history }             from './store'

// Importing CSS styles
import CSS from './styles/style.styl'

// Importing components
import App        from './components/App'; 
import Single     from './components/Single'; 
import PhotoGrid  from './components/PhotoGrid';

// Importing Sentry
import Raven from 'raven-js';
import { sentry_url } from './data/config';

// Initializing Sentry 
Raven.config(sentry_url).install();

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
  <Provider store={store}>  
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path='/view/:postId' component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
