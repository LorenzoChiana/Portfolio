import React, { Component } from "react";
import "./About.css";
import * as Icon from 'react-feather';
import avatar from './img/me.jpg';
import itis from './img/itis.png';
import bitline from './img/bitline.png';
import beinfrastrutture from './img/BE.png';
import cosmobile from './img/cosmobile.png';
import unibo from './img/UniBo-Universita-di-Bologna.png';
import PDF from './doc/CV_ChianaLorenzo.pdf';
import { IoIosPaper } from "react-icons/io";
import { DiGoogleAnalytics } from "react-icons/di";
import { FaJava, FaCode, FaTerminal, FaCodeBranch, FaCopyright } from "react-icons/fa";
import {
  translate
} from 'react-switch-lang';

class About extends Component {
  render() {
    const { t } = this.props;
    var courses = [t("about-tab.timeline.exam1"), t("about-tab.timeline.exam2"), t("about-tab.timeline.exam3"), t("about-tab.timeline.exam4"), t("about-tab.timeline.exam5"), t("about-tab.timeline.exam6"), t("about-tab.timeline.exam7"), t("about-tab.timeline.exam8"), t("about-tab.timeline.exam9")];
    courses.sort().join("\n");
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
        <a href="https://amslaurea.unibo.it/15611/1/chiana_lorenzo_tesi.pdf" target="blank">{t('thesis')}</a> 
        {t('about-tab.description-r3')}<br/>
        {t('about-tab.description-r4')}
        <a href="https://github.com/LorenzoChiana" target="blank">{t("gh_repo")}</a>
        {t('about-tab.description-r5')}<br/>
        {t('about-tab.description-r6')}
    <a href={PDF} target="blank">{t("cv")}</a>.
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
              <h3>{t('about-tab.skills.item1')}</h3>
            <p></p>
          </div>
          <div className="container-item">
            <FaJava />
            <h3>{t('about-tab.skills.item2')}</h3>
            <p></p>
          </div>
          <div className="container-item">
            <DiGoogleAnalytics />
            <h3>{t('about-tab.skills.item9')}</h3>
            <p></p>
          </div>
          <div className="container-item">
            <FaCode />
            <h3>{t('about-tab.skills.item4')}</h3>
            <p></p>
          </div>
          <div className="container-item">
            <FaCodeBranch />
            <h3>{t('about-tab.skills.item5')}</h3>
            <p></p>
          </div>
          <div className="container-item">
            <FaTerminal />
            <h3>{t('about-tab.skills.item7')}</h3>
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
                        <span>{t("about-tab.timeline.date1")}</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">{t("about-tab.timeline.title1")}</h3>
                        <p>{t("about-tab.timeline.descr1_1")}</p>
                        <p>{t("about-tab.timeline.descr1_2")}</p>
                        <img width="100px" src={bitline} />
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>{t("about-tab.timeline.date2")}</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">{t("about-tab.timeline.title2")}</h3>
                        <p>{t("about-tab.timeline.descr2_1")}</p>
                        <p>{t("about-tab.timeline.descr2_2")}</p>
                        <img width="100px" src={beinfrastrutture} />
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>{t("about-tab.timeline.date3")}</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">{t("about-tab.timeline.title3")}</h3>
                        <p>{t("about-tab.timeline.descr3_1")}</p>
                        <img width="100px" src={itis} />
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>{t("about-tab.timeline.date4")}</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">{t("about-tab.timeline.title4")}</h3>
                        <p>{t("about-tab.timeline.descr4_1")}</p>
                        <p>{t("about-tab.timeline.descr4_2")}</p>
                        <img width="100px" src={cosmobile} />
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>{t("about-tab.timeline.date5")}</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">{t("about-tab.timeline.title5")}</h3>
                        <p>{t("about-tab.timeline.descr5_1")}</p>
                        <img width="150px" src={unibo} />
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>{t("about-tab.timeline.date6")}</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">{t("about-tab.timeline.title6")}</h3>
                        <p>
                          {t("about-tab.timeline.descr6_1")}
                        </p>
                        <p>
                          {t("about-tab.timeline.descr6_2")}
                        </p>
                          <ul className="educational-activity">
                            <li>
                              {courses[0]}
                            </li>
                            <li>
                              {courses[1]}
                            </li>
                            <li>
                              {courses[2]}
                            </li>
                            <li>
                              {courses[3]}
                            </li>
                            <li>
                              {courses[4]}
                            </li>
                            <li>
                              {courses[5]}
                            </li>
                            <li>
                              {courses[6]}
                            </li>
                            <li>
                              {courses[7]}
                            </li>
                            <li>
                              {courses[8]}
                            </li>
                          </ul>
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