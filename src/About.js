import React, { Component } from "react";
import "./About.css";
import * as Icon from 'react-feather';
import avatar from './img/me.jpg';
import bitline from './img/bitline.png';
import beinfrastrutture from './img/BE.png';
import cosmobile from './img/cosmobile.png';
import unibo from './img/UniBo-Universita-di-Bologna.png';
import PDF from './doc/CV_ChianaLorenzo.pdf';
import { IoIosPaper } from "react-icons/io";
import { FaJava, FaDatabase, FaCode, FaLinux, FaGit, FaPython, FaFile, FaTerminal, FaAngular, FaJs, FaHtml5, FaPhp, FaSass, FaReact, FaCopyright } from "react-icons/fa";
import {
  setTranslations,
  setDefaultLanguage,
  setLanguage,
  translate,
} from 'react-switch-lang';
import en from './lang/en.json';
import it from './lang/it.json';

setTranslations({ en, it });
setDefaultLanguage('en');

class About extends Component {
  handleSetLanguage = (key) => () => {
    setLanguage(key);
  };
  render() {
    const { t } = this.props;
    return (
      <div className="about">
        <div className="flex-grid-thirds">
        <div className="col">
          <img className="sj-headshot" src={avatar} />
        </div>
        <div className="col-2">
        <p className="desc">
        {t('about-tab.description-r1')}<br/>
        {t('about-tab.description-r2')}
        <a href="https://amslaurea.unibo.it/15611/1/chiana_lorenzo_tesi.pdf" target="_blank">{t('thesis')}</a> 
        {t('about-tab.description-r3')}<br/>
        {t('about-tab.description-r4')}
        <a href="https://github.com/LorenzoChiana" target="_blank">{t("gh_repo")}</a>
        {t('about-tab.description-r5')}<br/>
        {t('about-tab.description-r6')}
    <a href={PDF} target="_blank">{t("cv")}</a>.
        </p>
            <div className="socialmedia">
                <a href="mailto:lorenzo.chiana@gmail.com">
                    <Icon.Mail />
                </a>
                <a href="https://github.com/LorenzoChiana" target="blank">
                    <Icon.GitHub />
                </a>
                <a href="https://www.linkedin.com/in/lorenzo-chiana-a12210140/" target="blank">
                    <Icon.Linkedin />
                </a>
                <a href={PDF} target="blank">
                  <IoIosPaper />
                </a>
            </div>
        </div>
      </div>
      <div className="col-md-12 example-title">
        <h2>{t("about-tab.sub-tab1")}</h2>
      </div>
        <div className="container">
          <div className="container-item">
            <FaCopyright />
            <h2>C</h2>
            <p></p>
          </div>
          <div className="container-item">
            <FaCode />
            <h2>C#</h2>
            <p></p>
          </div>
          <div className="container-item">
            <FaJava />
            <h2>Java</h2>
            <p></p>
          </div>
          <div className="container-item">
            <FaPython />
            <h2>Python</h2>
            <p></p>
          </div>
          <div className="container-item">
            <FaDatabase />
            <h2>SQL</h2>
            <p></p>
          </div>
          <div className="container-item">
            <FaHtml5 />
            <h2>HTML5</h2>
            <p></p>
          </div>
          <div className="container-item">
            <FaPhp />
            <h2>PHP</h2>
            <p></p>
          </div>
          <div className="container-item">
            <FaJs />
            <h2>JavaScript</h2>
            <p></p>
          </div>
          <div className="container-item">
            <FaSass />
            <h2>SASS</h2>
            <p></p>
          </div>
          <div className="container-item">
            <FaAngular />
            <h2>Angular</h2>
            <p></p>
          </div>
          <div className="container-item">
            <FaReact />
            <h2>React</h2>
            <p></p>
          </div>
          <div className="container-item">
            <FaLinux />
            <h2>Linux</h2>
            <p></p>
          </div>
          <div className="container-item">
            <FaTerminal />
            <h2>Bash</h2>
            <p></p>
          </div>
          <div className="container-item">
            <FaGit />
            <h2>Git</h2>
            <p></p>
          </div>
          
          <div className="container-item">
            <FaFile />
            <h2>LaTeX</h2>
            <p></p>
          </div>
        </div>
      <div className="row example-centered">
        <div className="col-md-12 example-title">
            <h2>{t("about-tab.sub-tab2")}</h2>
        </div>
        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
            <ul className="timeline timeline-centered">
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>Apr 2013</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Internship in BitLine sas</h3>
                        <p>Main activities and responsibilities: Computer assembly and repair, data entry and management of the company website.</p>
                        <p>Skills and objectives achieved: Learned business dynamics. Expanded knowledge of computer hardware components.</p>
                        <img width="100px" src={bitline} />
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>Jul - Aug 2013</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Summer internship in BE Infrastrutture S.R.L.</h3>
                        <p>
                            Main activities and responsibilities:
                            IT assistance both on-site and remotely for the staff of the various CMC Ravenna offices.
                            RDA and ORD data management.
                            Created at the request of the company a Java program for monitoring of servers' hard disks capacity.
                            Management of the corporate network alongside the company tutor.
                        </p>
                        <p>
                            Skills and objectives achieved:
                            Basic networking knowledge.
                            Management and resolution of IT issues.
                            Design and development software.
                        </p>
                        <img width="100px" src={beinfrastrutture} />
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>Jul 2014</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">High school diploma</h3>
                        <p>Graduated in computer science from the technical industrial institute Nullo Baldini (ITIS N. Baldini)</p>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>Nov - Dec 2017</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Internship in Cosmobile S.R.L.</h3>
                        <p>
                            Main activities and responsibilities: Design and implementation of web-based software on LAMP stacks based on a corporate framework derived from the Zend Framework within the development team.
                        </p>
                        <p>
                            Skills and objectives achieved:
                            Learning to analyze and design software, applying the main design patterns.
                            Learn to structure test plans.
                        </p>
                        <img width="100px" src={cosmobile} />
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>March 2017</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Bachelor's Degree</h3>
                        <p>I graduated in 2017 in Engineering and Computer Science from Bologna University in Cesena, Italy.</p>
                        <img width="150px" src={unibo} />
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>Current</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Student at UNIBO</h3>
                        <p>Currently, I'm studying computer science at the master's degree course in UNIBO</p>
                        <a href="mailto:lorenzo.chiana@gmail.com">Contact me</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    
    </div>
    );
  }
}
 
export default translate(About);