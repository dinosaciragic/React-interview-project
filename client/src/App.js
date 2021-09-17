import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import React, { Fragment } from 'react';
import FormState from './context/form/FormState';

function App() {
  return (
    <FormState>
      <Router>
        <Fragment>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </FormState>
  );
}

export default App;
