import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import * as Icon from 'react-feather';
import Particles from 'react-particles-js';

class App extends Component {
    render() {
      return (
        <HashRouter>
          <div>
          <Particles
            height = '100'
            style = {{
              width: '100%',
              height: '100%',
            }}
            params={{
	            "particles": {
	              "number": {
	                "value": 50
	              },
	              "size": {
	                "value": 3
	              }
	            },
	          "interactivity": {
	            "events": {
	              "onhover": {
	                "enable": true,
	                "mode": "repulse"
	              }
	             }
	            }
	        } } />
            <div className="header">
                <div className="topheader">
                <h1>Lorenzo Chiana</h1>
                <p>Ipse dixit etc</p>
                </div>

                <ul className="menu">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/work">Work</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/work" component={Work}/>
              <Route exact path="/contact" component={Contact}/>
            </div>
            <div className="footer">
              <div className="socialmedia">
                <a href="mailto:lorenzo.chiana@gmail.com">
                  <Icon.Mail />
                </a>
                <a href="https://github.com/LorenzoChiana" target="blank">
                  <Icon.GitHub />
                </a>
                <a href="https://www.linkedin.com/in/lorenzo-chiana-a12210140/" target="blank">
                  <Icon.User />
                </a>
              </div>
            <p></p>
          </div>
          </div>
        </HashRouter>
      );
    }
  }
export default App;