import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { configStore, history } from './store';
import Home from './containers/Home';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ configStore }>
      <Header/>
        <Router history={history}>
          <Route exact path="/" component={ Home }></Route>
        </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);