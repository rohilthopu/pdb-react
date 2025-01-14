import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import 'bulma/css/bulma.css'

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
        <BrowserRouter>
            <App />
        </BrowserRouter>
    ), document.getElementById('root')
);

// ReactDOM.render(<Schedule />, document.getElementById('root'));
//
// // If you want your home to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
