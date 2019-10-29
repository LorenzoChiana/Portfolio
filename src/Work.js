import React, { Component } from "react";
import "./Work.css";
import portfolio from "./img/portfolio.png";

 
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
                  Portfolio Website
                </h4> 
                <p>2019 <span className="slashes">//</span> React</p> 
              </div>
            </a> 

            <a className="card" href="https://github.com/LorenzoChiana/BikeSharing" target="_blank">
              <img src="https://u.imageresize.org/v2/487daa4a-5f87-435f-bc28-c040f1897fbe.png" alt="project-image" />
              <div className="txt-container">
                <h4><b>BikeSharing</b><br />Applicazioni e Servizi Web Website</h4> 
                <p>2017 <span className="slashes">//</span> Angular / Node / SCSS / MongoDB</p> 
              </div>
            </a>
            
            <a className="card" href="https://github.com/LorenzoChiana/Vakcino" target="_blank">
              <img src="https://u.imageresize.org/v2/487daa4a-5f87-435f-bc28-c040f1897fbe.png" alt="project-image" />
              <div className="txt-container">
                <h4><b>Vakcino</b><br />Andorid App</h4> 
                <p>2016 <span className="slashes">//</span> Android / Java / XML</p> 
              </div>
            </a>
        </div>


           
        <h2>boh</h2>
        <div className="container">
        </div>

        
      </div>
    );
  }
}
export default Work;