import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import "./App.css";
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import About from "./About";
import Work from "./Work";
import * as Icon from 'react-feather';
import Particles from 'react-particles-js';
import PDF from './doc/CV_ChianaLorenzo_en.pdf';
import { IoIosPaper } from "react-icons/io";
import {
  setTranslations,
  setDefaultLanguage,
  setLanguage,
  setLanguageCookie,
  getLanguage,
  translate,
} from 'react-switch-lang';
import detectBrowserLanguage from 'detect-browser-language';
import CookieConsent from "react-cookie-consent";
import PropTypes from 'prop-types';
import itaFlag from './img/pizza.png';
import engFlag from './img/tea.png';
import en from './lang/en.json';
import it from './lang/it.json';

setTranslations({ en, it });
setLanguageCookie(detectBrowserLanguage() === "it-IT" ? "it" : "en");
setDefaultLanguage(getLanguage());

class App extends Component {
    handleSetLanguage() {
      setLanguage(getLanguage() === "it" ? "en" : "it");
    };
    render() {
      const { t } = this.props;
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
          <CookieConsent
            buttonText={t('cookie-button')}
            style={{ background: "linear-gradient(to right, #434343, #000000)" }}
            buttonStyle={{ color: "#000000", background: "#FFFFFF"}}
            acceptOnScroll={true}
          >
            {t('cookie-consent')}
          </CookieConsent>
            <div className="header">
              <div>
                <a className="lang desktop" onClick={this.handleSetLanguage.bind(this)}>
                  {t('lang')}
                  <img className="langIcon desktop" src={getLanguage() === "it" ?  itaFlag : engFlag} />
                </a>
              </div>
                <div className="topheader">
                <h1>{t('app.title')}</h1>
                <p>{t('app.subTitle')}</p>
                <a className="lang mobile" onClick={this.handleSetLanguage.bind(this)}>
                  {t('lang')}
                  <img className="langIcon mobile" src={getLanguage() === "it" ?  itaFlag : engFlag} />
                </a>
                </div>
                <ul className="menu">
                  <li><NavLink exact to="/">{t('about')}</NavLink></li>
                  <li><NavLink to="/work">{t('work')}</NavLink></li>
                </ul>
                
            </div>
            <div className="content">
              <Route exact path="/" component={About}/>
              <Route exact path="/work" component={Work}/>
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
                  <Icon.Linkedin />
                </a>
                <a href={PDF} target="blank">
                  <IoIosPaper />
                </a>
              </div>
            <p></p>
          </div>
          </div>
          <ScrollUpButton />
        </HashRouter>
      );
    }
  }

  App.propTypes = {
    t: PropTypes.func.isRequired,
  };
export default translate(App);