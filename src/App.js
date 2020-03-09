import React from 'react';
import './App.css';
import Home from './components/CuratedPhotos/Home';
import Photo from './components/CuratedPhotos/Photo';
import Navbar from './components/Layout/Navbar';
import Search from './components/Search/Search';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/photo/:id' component={Photo} />
            <Route exact path='/search' component={Search} />
          </Switch>
        </Router>        
      </div>
    </Provider>
  );
}

export default App;

