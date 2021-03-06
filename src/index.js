import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// store
import store from './store';

// App
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);