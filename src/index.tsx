import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import '../node_modules/font-awesome/css/font-awesome.min.css';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ), document.getElementById('root') as HTMLElement
);
registerServiceWorker();
