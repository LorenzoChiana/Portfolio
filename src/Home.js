import React, { Component } from "react";
import "./Home.css";
import * as Icon from 'react-feather';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container"></div>
       
        <div className="container work-section">
          <a href="#/work">
            <div className="container-item one">
              <h2>Check out some of my previous work</h2>
              <Icon.ArrowRightCircle />
            </div>
          </a>
          <a href="#/about">
            <div className="container-item two">
              <h2>About me</h2>
              <Icon.ArrowRightCircle />
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;