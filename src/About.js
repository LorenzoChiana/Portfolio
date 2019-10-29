import React, { Component } from "react";
import "./About.css";
import * as Icon from 'react-feather';
import avatar from './img/me.jpg';
import bitline from './img/bitline.png';
import beinfrastrutture from './img/BE.png';
import cosmobile from './img/cosmobile.png';
import unibo from './img/UniBo-Universita-di-Bologna.png';
 
class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="flex-grid-thirds">
        <div className="col">
          <img className="sj-headshot" src={avatar} />

        </div>
        <div className="col-2">
        <p className="desc">
        My name is Lorenzo, tante cose qua da dire su di me.
        </p>
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
        </div>
      </div>
      <div class="row example-centered">
        <div class="col-md-12 example-title">
            <h2>Timeline</h2>
        </div>
        <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
            <ul class="timeline timeline-centered">
            
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>Apr 2013</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Stage in BitLine sas</h3>
                        <p>1 mese blablablablabla</p>
                        <img width="100px" src={bitline} />
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>Jul - Aug 2013</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Summer stage in BE Infrastrutture S.R.L.</h3>
                        <p>2 mesi cosa ho fatto</p>
                        <img width="100px" src={beinfrastrutture} />
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>Jul 2014</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">High school diploma</h3>
                        <p>ITIS Nullo baldini</p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>Nov - Dec 2017</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Internship in Cosmobile</h3>
                        <p>cosa ho fatto e cos'è</p>
                        <img width="100px" src={cosmobile} />
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>March 2017</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Bachelor's Degree</h3>
                        <p>I graduated in 2017 in Engeneering and Computer Science from Bologna University in Cesena, Italy.</p>
                        <img width="150px" src={unibo} />
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>Current</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                    <h3 class="timeline-title">Student at UNIBO</h3>
                        <p>Studente presso il corso di LM blabla</p>
                      <a href="mailto:lorenzo.chiana@gmail.com">Send me and email</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
      </div>
    );
  }
}
 
export default About;