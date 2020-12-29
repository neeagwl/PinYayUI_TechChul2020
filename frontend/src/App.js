import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from './landing';
import HomeScreen from './components/HomeScreen';
import Pin from './components/Pin';
import AddPin from './components/AddPin';

const App = () => {
    return (
        <Router>
          <Route path='/' component={Landing}  exact/>
          <Route path='/home' component={HomeScreen} />
          <Route path='/pin' component={Pin}/>
          <Route path="/addPin" component={AddPin}/>
        </Router>
    )
}

export default App
