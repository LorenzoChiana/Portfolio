import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React, { Fragment } from 'react';
import classNames from 'classnames';
import DecoderText from 'components/DecoderText';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import Section from 'components/Section';
import { Transition } from 'react-transition-group';
import { reflow } from 'utils/transition';
import './LifeTimeLine.css';

const TitleText = ({ status, titleId }) => (
    <Fragment>
      <h2
        className={classNames('timeline__title', `timeline__title--${status}`)}
        id={titleId}
      >
        <DecoderText text="Timeline" start={status !== 'exited'} delay={500} />
      </h2>
    </Fragment>
  );

const LifeTimeLine = ({id, visible, sectionRef}) => {
    const titleId = `${id}-title`;
    return (
        <Section
        className={classNames('life-timeline')}
        as="section"
        id={id}
        ref={sectionRef}
        aria-labelledby={titleId}
        tabIndex={-1}
        >
            <Transition in={visible} timeout={0} onEnter={reflow}>
                {status => (
                    <div>
                        <TitleText status={status} titleId={titleId} />
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="April 2013"
                                iconStyle={{ background: 'rgb(0, 229, 255)', color: '#fff' }}
                                icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Internship in BitLine sas</h3>
                                <h4 className="vertical-timeline-element-subtitle">Lugo, RA</h4>
                                <p>
                                Main activities and responsibilities: Computer assembly and repair, data entry and management of the company website.
                                </p>
                                <p>
                                Skills and objectives achieved: Learned business dynamics. Expanded knowledge of computer hardware components.
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="July - August 2013"
                                iconStyle={{ background: 'rgb(0, 229, 255)', color: '#fff' }}
                                icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Summer internship in BE Infrastrutture S.R.L.</h3>
                                <h4 className="vertical-timeline-element-subtitle">Ravenna, RA</h4>
                                <p>
                                Main activities and responsibilities: IT assistance both on-site and remotely for the staff of the various CMC Ravenna offices. RDA and ORD data management. Created at the request of the company a Java program for monitoring of servers' hard disks capacity. Management of the corporate network alongside the company tutor.
                                </p>
                                <p>
                                Skills and objectives achieved: Basic networking knowledge. Management and resolution of IT issues. Design and development software
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="July 2014"
                                iconStyle={{ background: 'rgb(0, 229, 255)', color: '#fff' }}
                                icon={<SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">High school diploma</h3>
                                <h4 className="vertical-timeline-element-subtitle">ITIS N. Baldini</h4>
                                <p>
                                Graduated in computer science from the technical industrial institute Nullo Baldini.
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="November - December 2017"
                                iconStyle={{ background: 'rgb(0, 229, 255)', color: '#fff' }}
                                icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Internship in Cosmobile S.R.L.</h3>
                                <h4 className="vertical-timeline-element-subtitle">Forlì, FC</h4>
                                <p>
                                Main activities and responsibilities: Design and implementation of web-based software on LAMP stacks based on a corporate framework derived from the Zend Framework within the development team.
                                </p>
                                <p>
                                Skills and objectives achieved: Learning to analyze and design software, applying the main design patterns. Learn to structure test plans.   
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="March 2017"
                                iconStyle={{ background: 'rgb(0, 229, 255)', color: '#fff' }}
                                icon={<SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Bachelor's Degree</h3>
                                <h4 className="vertical-timeline-element-subtitle">University of Bologna</h4>
                                <p>
                                I graduated in 2017 in Engineering and Computer Science from Bologna University in Cesena, Italy.
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                contentStyle={{ background: 'rgb(0, 229, 255)'}}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(0, 229, 255)' }}
                                date="Now"
                                iconStyle={{ background: 'rgb(0, 229, 255)', color: '#fff' }}
                                icon={<SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Student at UNIBO</h3>
                                <h4 className="vertical-timeline-element-subtitle">University of Bologna</h4>
                                <p>
                                I'm currently studying computer science at the Master's degree course in UNIBO
                                </p>
                                <p>
                                Educational activity: 
                                </p>
                                <ul>
                                    <li>Big data</li>
                                    <li>Business intelligence</li>
                                    <li>Concurrent and distributed programming</li>
                                    <li>Decision support systems</li>
                                    <li>Distributed systems</li>
                                    <li>Information systems</li>
                                    <li>Internet routing and transportation</li>
                                    <li>Languages, compilers and computational models</li>
                                    <li>Machine learning</li>
                                    <li>Network security</li>
                                    <li>Programming and Development Paradigms</li>
                                    <li>Project management</li>
                                    <li>Semantic web</li>
                                    <li>Web applications and services</li>
                                </ul>
                            </VerticalTimelineElement>
                        </VerticalTimeline>                        
                    </div>
                )}
            </Transition>
        </Section>
    )};

export default LifeTimeLine;