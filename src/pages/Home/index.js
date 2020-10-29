import React, { useState, useEffect, useRef, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Intro from './Intro';
import ProjectSummary from './ProjectSummary';
import Profile from './Profile';
import LifeTimeLine from './LifeTimeLine';
import SkillsBar from './SkillsBar';
import Footer from 'components/Footer';
import { usePrefersReducedMotion, useRouteTransition } from 'hooks';
import bikeSharingTexture from 'assets/bikesharing.jpg';
import bikeSharingTextureLarge from 'assets/bikesharing-large.jpg';
import bikeSharingTexturePlaceholder from 'assets/bikesharing-placeholder.jpg';
import lcmcTexture from 'assets/LCMC.jpg';
import lcmcTextureLarge from 'assets/LCMC-large.jpg';
import lcmcTexturePlaceholder from 'assets/LCMC-placeholder.jpg';
import vakcinoTexture from 'assets/vakcino-mobile.jpg';
import vakcinoTextureLarge from 'assets/vakcino-mobile-large.jpg';
import vakcinoTexturePlaceholder from 'assets/vakcino-mobile-placeholder.jpg';
import solTexture from 'assets/sol.jpg';
import solTextureLarge from 'assets/sol-large.jpg';
import solTexturePlaceholder from 'assets/sol-placeholder.jpg';
import fileMinerTexture from 'assets/fileMiner.jpg';
import fileMinerTextureLarge from 'assets/fileMiner-large.jpg';
import fileMinerTexturePlaceholder from 'assets/fileMiner-placeholder.jpg';
import orderAnalyticsTexture from 'assets/orderAnalytics.png';
import orderAnalyticsTextureLarge from 'assets/orderAnalytics-large.png';
import orderAnalyticsTexturePlaceholder from 'assets/orderAnalytics-placeholder.png';
import pizzaTimeTexture from 'assets/pizzaTime.PNG';
import pizzaTimeTextureLarge from 'assets/pizzaTime-large.png';
import pizzaTimeTexturePlaceholder from 'assets/pizzaTime-placeholder.png';
import iphone11 from 'assets/iphone-11.glb';
import macbookPro from 'assets/macbook-pro.glb';

export default function Home(props) {
  const { status } = useRouteTransition();
  const { hash, state } = useLocation();
  const initHash = useRef(true);
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const about = useRef();
  const timeline = useRef();
  const skillsbar = useRef();
  const projectPizzaTime = useRef();
  const projectOrderAnalytics = useRef();
  const projectLCMC = useRef();
  const projectBikeSharing = useRef();
  const projectVakcino = useRef();
  const projectSOL = useRef();
  const projectFileMiner = useRef();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const revealSections = [intro, about, skillsbar, timeline, projectPizzaTime, projectOrderAnalytics, projectLCMC, projectBikeSharing, projectVakcino, projectSOL, projectFileMiner];

    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target;
          observer.unobserve(section);
          if (visibleSections.includes(section)) return;
          setVisibleSections(prevSections => [...prevSections, section]);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px' });

    const indicatorObserver = new IntersectionObserver(([entry]) => {
      setScrollIndicatorHidden(!entry.isIntersecting);
    }, { rootMargin: '-100% 0px 0px 0px' });

    revealSections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  useEffect(() => {
    const hasEntered = status === 'entered';
    const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
    let scrollObserver;
    let scrollTimeout;

    const handleHashchange = (hash, scroll) => {
      clearTimeout(scrollTimeout);
      const hashSections = [intro, about, skillsbar, timeline, projectPizzaTime, projectOrderAnalytics, projectLCMC, projectBikeSharing, projectVakcino, projectSOL, projectFileMiner];
      const hashString = hash.replace('#', '');
      const element = hashSections.filter(item => item.current.id === hashString)[0];
      if (!element) return;
      const behavior = scroll && !prefersReducedMotion ? 'smooth' : 'instant';
      const top = element.current.offsetTop;

      scrollObserver = new IntersectionObserver((entries, observer) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          scrollTimeout = setTimeout(() => {
            element.current.focus();
          }, prefersReducedMotion ? 0 : 400);
          observer.unobserve(entry.target);
        }
      }, { rootMargin: '-20% 0px -20% 0px' });

      scrollObserver.observe(element.current);

      if (supportsNativeSmoothScroll) {
        window.scroll({
          top,
          left: 0,
          behavior,
        });
      } else {
        window.scrollTo(0, top);
      }
    };

    if (hash && initHash.current && hasEntered) {
      handleHashchange(hash, false);
      initHash.current = false;
    } else if (!hash && initHash.current && hasEntered) {
      window.scrollTo(0, 0);
      initHash.current = false;
    } else if (hasEntered) {
      handleHashchange(hash, true);
    }

    return () => {
      clearTimeout(scrollTimeout);
      if (scrollObserver) {
        scrollObserver.disconnect();
      }
    };
  }, [hash, state, prefersReducedMotion, status]);

  return (
    <Fragment>
      <Helmet>
        <title>Lorenzo Chiana | Computer Engineer</title>
        <meta
          name="description"
          content="Portfolio of Lorenzo Chiana"
        />
        <link rel="prefetch" href={iphone11} as="fetch" crossorigin="" />
        <link rel="prefetch" href={macbookPro} as="fetch" crossorigin="" />
      </Helmet>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Profile
        sectionRef={about}
        visible={visibleSections.includes(about.current)}
        id="about"
      />
      <SkillsBar
        id="skillsbar"
        sectionRef={skillsbar}
        visible={visibleSections.includes(skillsbar.current)}
      />
      <LifeTimeLine
        id="timeline"
        sectionRef={timeline}
        visible={visibleSections.includes(timeline.current)}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectPizzaTime}
        visible={visibleSections.includes(projectPizzaTime.current)}
        index={2020}
        title="PizzaTime"
        description="A Battle Arena game with 2D fixed perspective graphics, written in Scala for educational purpose."
        buttonText="View Project"
        buttonLink="https://github.com/LorenzoChiana/PPS-18-pizzatime"
        model={{
          type: 'laptop',
          alt: 'The Modern Project Landing Page',
          textures: [
            {
              src: pizzaTimeTexture,
              srcSet: `${pizzaTimeTexture} 800w, ${pizzaTimeTextureLarge} 1440w`,
              placeholder: pizzaTimeTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-DSS"
        sectionRef={projectOrderAnalytics}
        visible={visibleSections.includes(projectOrderAnalytics.current)}
        index={2019}
        title="Order Analytics"
        description="Application that allows you to make a forecast on a historical series of orders based on a stochastic forecasting model."
        buttonText="View Project"
        buttonLink="https://github.com/LorenzoChiana/DSS19"
        model={{
          type: 'laptop',
          alt: 'The Modern Project Landing Page',
          textures: [
            {
              src: orderAnalyticsTexture,
              srcSet: `${orderAnalyticsTexture} 800w, ${orderAnalyticsTextureLarge} 1440w`,
              placeholder: orderAnalyticsTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-LCMC"
        sectionRef={projectLCMC}
        visible={visibleSections.includes(projectLCMC.current)}
        index={2018}
        title="Functional and Object Oriented Language Compiler"
        description="Development of a compiler for the Functional and Object Oriented Language."
        buttonText="View Project"
        buttonLink="https://github.com/LorenzoChiana/LCMC1819"
        model={{
          type: 'laptop',
          alt: 'DevTech Tools Landing Page',
          textures: [
            {
              src: lcmcTexture,
              srcSet: `${lcmcTexture} 800w, ${lcmcTextureLarge} 1440w`,
              placeholder: lcmcTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-bikesharing"
        sectionRef={projectBikeSharing}
        visible={visibleSections.includes(projectBikeSharing.current)}
        index={2017}
        title="BikeSharing"
        description="Website for the management of a hypothetical bike-sharing service. Developed on a MEAN stack."
        buttonText="View Project"
        buttonLink="https://github.com/LorenzoChiana/BikeSharing"
        model={{
          type: 'laptop',
          alt: 'MystGang Website',
          textures: [
            {
              src: bikeSharingTexture,
              srcSet: `${bikeSharingTexture} 800w, ${bikeSharingTextureLarge} 1440w`,
              placeholder: bikeSharingTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-vakcino"
        sectionRef={projectVakcino}
        visible={visibleSections.includes(projectVakcino.current)}
        index={2017}
        title="Vakcino"
        description="Android application that allows the user to manage the vaccination record both for himself and for other family members."
        buttonText="View Project"
        buttonLink="https://github.com/LorenzoChiana/Vakcino"
        model={{
          type: 'phone',
          alt: 'MystGang Website',
          textures: [
            {
              src: vakcinoTexture,
              srcSet: `${vakcinoTexture} 800w, ${vakcinoTextureLarge} 1440w`,
              placeholder: vakcinoTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-sol"
        sectionRef={projectSOL}
        visible={visibleSections.includes(projectSOL.current)}
        index={2015}
        title="SOL restyle"
        description="Recreation of the home page of SOL platform (Studenti Online) of the University of Bologna to which was added the functionality of sharing notes and slides between students and professors."
        buttonText="View Project"
        buttonLink="https://github.com/LorenzoChiana/sol-project"
        model={{
          type: 'laptop',
          alt: 'MystGang Website',
          textures: [
            {
              src: solTexture,
              srcSet: `${solTexture} 800w, ${solTextureLarge} 1440w`,
              placeholder: solTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-fileMiner"
        sectionRef={projectFileMiner}
        visible={visibleSections.includes(projectFileMiner.current)}
        index={2015}
        title="FileMiner"
        description="Creation of a file manager in Java with MVC pattern for the course of OOP (Object Oriented Programming)."
        buttonText="View Project"
        buttonLink="https://github.com/LorenzoChiana/FileMiner"
        model={{
          type: 'laptop',
          alt: 'MystGang Website',
          textures: [
            {
              src: fileMinerTexture,
              srcSet: `${fileMinerTexture} 800w, ${fileMinerTextureLarge} 1440w`,
              placeholder: fileMinerTexturePlaceholder,
            },
          ],
        }}
      />
      <Footer />
    </Fragment>
  );
}
