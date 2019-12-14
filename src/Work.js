import React, { Component } from "react";
import "./Work.css";
import github from "./img/github.png";
import bikesharing from "./img/bikesharing.jpg";
import vaccine from "./img/vaccine.jpg";
import filemanager from "./img/filemanager.jpg";
import sol from "./img/exams.jpg";
import portfolio from "./img/portfolio.jpg";
import * as Icon from 'react-feather';

 
class Work extends Component {
  render() {
    return (
      <div className="work">
        <h2>Projects</h2>
          <div className="container">
            <a className="card" href="https://github.com/LorenzoChiana/portfolio" target="_blank">
              <img src={portfolio} alt="project-image" />
              <div className="txt-container">
                <h4>
                  <b>Portfolio </b>
                  <i>( current )</i>
                  <br />
                  This Website.
                </h4> 
                <p>2019 <span className="slashes">//</span> React / CSS</p> 
              </div>
            </a> 
        </div>
        <h2>UNIBO projects</h2>
            <div className="container">

            <a className="card" href="https://github.com/LorenzoChiana/BikeSharing" target="_blank">
              <img src={bikesharing} alt="project-image" />
              <div className="txt-container">
                <h4><b>BikeSharing</b><br />Website for the management of a hypothetical bike-sharing service. Developed on a MEAN stack.</h4> 
                <p>2017 <span className="slashes">//</span> Angular / Node / SCSS / MongoDB</p> 
              </div>
            </a>
            
            <a className="card" href="https://github.com/LorenzoChiana/Vakcino" target="_blank">
              <img src={vaccine} alt="project-image" />
              <div className="txt-container">
                <h4><b>Vakcino</b><br />Android application that allows the user to manage the vaccination record both for himself and for other family members.</h4> 
                <p>2016 <span className="slashes">//</span> Android / Java / XML / SQL / MVC </p> 
              </div>
            </a>

            <a className="card" href="https://github.com/LorenzoChiana/sol-project" target="_blank">
              <img src={sol} alt="project-image" />
              <div className="txt-container">
                <h4><b>SOL restyle</b><br />Recreation of the home page of SOL platform (Studenti Online) of the University of Bologna to which was added the functionality of sharing notes and slides between students and professors.</h4> 
                <p>2015 <span className="slashes">//</span> HTML / PHP / JavaScript / CSS / SQL</p> 
              </div>
            </a>

            <a className="card" href="https://github.com/LorenzoChiana/FileMiner" target="_blank">
              <img src={filemanager} alt="project-image" />
              <div className="txt-container">
                <h4><b>FileMiner</b><br />Creation of a file manager in Java with MVC pattern for the course of OOP (Object Oriented Programming).</h4> 
                <p>2015 <span className="slashes">//</span> Java / MVC</p> 
              </div>
            </a>
            
            </div>
      </div>
    );
  }
}
export default Work;