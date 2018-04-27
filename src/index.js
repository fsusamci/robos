import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {robots} from './robots'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
