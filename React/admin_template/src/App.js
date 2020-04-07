import React from 'react';
import { ToastProvider } from 'react-toast-notifications';

import AppLayout from './containers/AppLayout';
import Login from './pages/Login';
import Forgot from './pages/Forgot';
import Register from './pages/Register';

import NotFound from './pages/NotFound';

import './styles/app.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <ToastProvider>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/forgot" component={Forgot}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/404" component={NotFound}></Route>
          <Route path="/" component={AppLayout}></Route>
        </ToastProvider>
      </Switch>
    </Router>
  );
}


