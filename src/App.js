import React from 'react';
import './App.css';
import Home from './components/CuratedPhotos/Home';
import Photo from './components/CuratedPhotos/Photo';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/photo/:id' component={Photo} />
          </Switch>
        </Router>        
      </div>
    </Provider>
  );
}

export default App;

