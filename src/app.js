import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import routes from './routes';
import configureStore from './store';

const store = configureStore();

const element = (
    <Provider store={store}>
      {routes}
    </Provider>
);

ReactDOM.render(element, document.getElementById('root'));
