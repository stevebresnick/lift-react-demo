import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import Personalize from './components/Personalize';
import Main from './components/Main';
import Packages from './components/Packages';
import Contact from './components/Contact';
import logo from './logo-kermit.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Personalize>
          <div className="App">
            <header className="App-header">
              <div className="App-header-site">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Lift React SPA Demo</h2>
              </div>
              <nav className="App-header-menu">
                <ul>
                  <li><NavLink exact to="/">Main</NavLink></li>
                  <li><NavLink exact to="/packages">Packages</NavLink></li>
                  <li><NavLink exact to="/contact">Contact</NavLink></li>
                </ul>
              </nav>
            </header>
            <div className="App-main">
              <section className="App-content">
                <Route exact={true} path="/" component={Main} />
                <Route exact={true} path="/packages" component={Packages} />
                <Route exact={true} path="/contact" component={Contact} />
              </section>
              <aside className="App-sidebar">
                <h2>Sidebar</h2>
                <section className="App-sidebar-item">
                </section>
              </aside>
            </div>
            <footer className="App-footer">
              Acquia Lift 3 SPA Demo
            </footer>
          </div>
        </Personalize>
      </Router>
    );
  }
}

export default App;
