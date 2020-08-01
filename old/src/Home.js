import React, { Component } from "react";
import "./Home.css";
import * as Icon from 'react-feather';
import { FaJava, FaDatabase, FaCode, FaLinux } from "react-icons/fa";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2>Professional Skills</h2>
        <div className="container">
          <div className="container-item">
            <FaJava />
            <h2>Java</h2>
            <p></p>
          </div>
          <div className="container-item">
            <FaDatabase />
            <h2>SQL</h2>
            <p></p>
          </div>
          <div className="container-item">
            <FaCode />
            <h2>Web Development</h2>
            <p></p>
          </div>
        </div>
       
        <div className="container work-section">
          <a href="#/about">
            <div className="container-item two">
              <h2>About me</h2>
              <Icon.ArrowRightCircle />
            </div>
          </a>
          <a href="#/work">
            <div className="container-item one">
              <h2>Check out some of my work</h2>
              <Icon.ArrowRightCircle />
            </div>
          </a>
        </div>
        <div className="contact-wrap container">
          <a href="mailto:lorenzo.chiana@gmail.com">
            <div className="container-item contact-me">
              <h2>Interested in working together? Send me an email.</h2>
              <Icon.ArrowRightCircle />
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;