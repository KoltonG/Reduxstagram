// Library imports
import React from 'react';
import { render } from 'react-dom';

// Components imports
import Main from './components/Main';

// Importing styles for webpack. Webpack will insert the style tag in the index.html file
import CSS from './styles/style.styl'; 

render(<Main/>, document.getElementById('root'));
