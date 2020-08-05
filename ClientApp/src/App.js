import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Contact from './pages/Contact/index';

import Home from './pages/Home';
import Login from './pages/Login_&_Register/Login';
import Register from './pages/Login_&_Register/Register';
import About from './pages/About';
import Contact from './pages/Contact';

import './App.css'

export default class App extends Component {
  
  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/Login' component={Login}/>
        <Route path='/Register' component={Register}/>
        <Route path='/About' component={About}/>
        <Route path='/Contact' component={Contact}/>
      </Layout>
    );
  }
}
