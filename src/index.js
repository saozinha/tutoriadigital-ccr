import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RegisterList from './pages/RegisterList';
import FormRegister from './pages/FormRegister';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/listagem" component={RegisterList} />
            <Route path="/novo" component={FormRegister} /> 
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));