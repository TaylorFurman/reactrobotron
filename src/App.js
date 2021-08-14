import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import NavBar from './components/NavBar.jsx'
import store from './store.js'

import React from 'react';
import './App.css';

import GameBoard from './components/GameBoard.jsx'
import LeaderBoard from './components/LeaderBoard.jsx'
import Graphs from './components/Graphs.jsx'

const NoMatch = ({location}) => (
  <div>
    <h3>Page not Found: {location.pathname}</h3>
  </div>
)



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Switch>
          <Route exact path='/'>
          <NavBar/>
          <div>
          <GameBoard/>
          <Graphs/>
          </div>
          </Route>
          <Route path='/leaderboard'>
          <NavBar/>
          <LeaderBoard/>
          </Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
