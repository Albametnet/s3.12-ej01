import React, { Component } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
          <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/pricing'>Pricing</Link></li>
          </ul>
          </nav>
        </header>
     <main>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/about' component={ About } />
            <Route path='/pricing' component={ Pricing } />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
