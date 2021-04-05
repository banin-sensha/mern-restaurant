import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from 'react-router-dom';
import Checkout from './components/Checkout';
import Orders from './components/Orders';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <div>
            <Route path="/" exact component={App} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/orders" exact component={Orders} />
      </div>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
