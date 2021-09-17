import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import React, { Fragment } from 'react';
import FormState from './context/form/FormState';
import SuccessPage from './components/pages/SuccessPage';

function App() {
  return (
    <FormState>
      <Router>
        <Fragment>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/success' component={SuccessPage} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </FormState>
  );
}

export default App;
