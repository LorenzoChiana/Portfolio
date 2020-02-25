import React, { Component } from "react";
import "./Work.css";
//import github from "./img/github.png";
import bikesharing from "./img/bikesharing.jpg";
import vaccine from "./img/vaccine.jpg";
import filemanager from "./img/filemanager.jpg";
import sol from "./img/exams.jpg";
import portfolio from "./img/portfolio.jpg";
import dataanalysis from "./img/dataanalysis.jpg";
import code from "./img/code.jpg";
import {
  translate
} from 'react-switch-lang';

class Work extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="work">
        <h2>{t('work-tab.title1')}</h2>
          <div className="container">
            <a className="card" href="https://github.com/LorenzoChiana/portfolio" target="blank">
              <img src={portfolio} alt="project-image" />
              <div className="txt-container">
                <h4>
                  <b>{t('work-tab.card.portfolio.title')}</b>
                  <br />
                  {t('work-tab.card.portfolio.body')}
                </h4> 
                <p>{t('work-tab.card.portfolio.footer-year')}<span className="slashes">//</span>{t('work-tab.card.portfolio.footer-info')}</p> 
              </div>
            </a> 
        </div>
        <h2>{t('work-tab.title2')}</h2>
            <div className="container">

            <a className="card" href="https://github.com/LorenzoChiana/DSS19" target="blank">
              <img src={dataanalysis} alt="project-image" />
              <div className="txt-container">
                <h4>
                  <b>{t('work-tab.card.DSS.title')}</b>
                  <br/>
                  {t('work-tab.card.DSS.body')}
                </h4> 
                <p>{t('work-tab.card.DSS.footer-year')}<span className="slashes">//</span>{t('work-tab.card.DSS.footer-info')}</p> 
              </div>
            </a>

            <a className="card" href="https://github.com/LorenzoChiana/LCMC1819" target="blank">
              <img src={code} alt="project-image" />
              <div className="txt-container">
                <h4>
                  <b>{t('work-tab.card.LCMC.title')}</b>
                  <br/>
                  {t('work-tab.card.LCMC.body')}
                </h4> 
                <p>{t('work-tab.card.LCMC.footer-year')}<span className="slashes">//</span>{t('work-tab.card.LCMC.footer-info')}</p> 
              </div>
            </a>

            <a className="card" href="https://github.com/LorenzoChiana/BikeSharing" target="blank">
              <img src={bikesharing} alt="project-image" />
              <div className="txt-container">
                <h4>
                  <b>{t('work-tab.card.bikesharing.title')}</b>
                  <br />
                  {t('work-tab.card.bikesharing.body')}
                </h4> 
                <p>{t('work-tab.card.bikesharing.footer-year')}<span className="slashes">//</span>{t('work-tab.card.bikesharing.footer-info')}</p> 
              </div>
            </a>
            
            <a className="card" href="https://github.com/LorenzoChiana/Vakcino" target="blank">
              <img src={vaccine} alt="project-image" />
              <div className="txt-container">
                <h4>
                  <b>{t('work-tab.card.vakcino.title')}</b><br />
                  {t('work-tab.card.vakcino.body')}
                </h4> 
                <p>{t('work-tab.card.vakcino.footer-year')}<span className="slashes">//</span>{t('work-tab.card.vakcino.footer-info')}</p> 
              </div>
            </a>

            <a className="card" href="https://github.com/LorenzoChiana/sol-project" target="blank">
              <img src={sol} alt="project-image" />
              <div className="txt-container">
                <h4>
                  <b>{t('work-tab.card.sol.title')}</b><br />
                  {t('work-tab.card.sol.body')}
                </h4> 
                <p>{t('work-tab.card.sol.footer-year')}<span className="slashes">//</span>{t('work-tab.card.sol.footer-info')}</p> 
              </div>
            </a>

            <a className="card" href="https://github.com/LorenzoChiana/FileMiner" target="blank">
              <img src={filemanager} alt="project-image" />
              <div className="txt-container">
                <h4>
                  <b>{t('work-tab.card.filemanager.title')}</b><br />
                  {t('work-tab.card.filemanager.body')}
                </h4> 
                <p>{t('work-tab.card.filemanager.footer-year')}<span className="slashes">//</span>{t('work-tab.card.filemanager.footer-info')}</p> 
              </div>
            </a>
            </div>
      </div>
    );
  }
}
export default translate(Work);