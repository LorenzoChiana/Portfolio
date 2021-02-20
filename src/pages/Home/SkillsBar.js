
import SkillBar from 'react-skillbars';
import React, { Fragment } from 'react';
import classNames from 'classnames';
import DecoderText from 'components/DecoderText';
import Section from 'components/Section';
import { Transition } from 'react-transition-group';
import { reflow } from 'utils/transition';
import './SkillsBar.css';

const skills = [
    {
      "type": "Java",
      "level": 90
    },
    {
      "type": "C#",
      "level": 75
    },
    {
      "type": "Scala",
      "level": 70
    },
    {
      "type": "Python",
      "level": 65
    },
    {
      "type": "Angular",
      "level": 75
    },
    {
      "type": "React",
      "level": 70
    },
    {
      "type": "SQL",
      "level": 80
    },
    {
      "type": "NoSQL",
      "level": 60
    },
    {
      "type": "Shell",
      "level": 90
    },
    {
      "type": "Git",
      "level": 90
    }
]

const colors = {
    "bar": {
      "hue": 186,
      "saturation": 90,
      "level": 70
    },
    "title": {
        "background": 'rgba(0, 0, 0, 0.6)'
    }
}

const TitleText = ({ status, titleId }) => (
  <Fragment>
    <h2
      className={classNames('skillsbar__title', `skillsbar__title--${status}`)}
      id={titleId}
    >
      <DecoderText text="Skills" start={status !== 'exited'} delay={500} />
    </h2>
  </Fragment>
);

const SkillsBar = ({id, visible, sectionRef}) => {
    const titleId = `${id}-title`;
    return (
      <Section
        className="skillsbar"
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
                <SkillBar skills={skills} colors={colors} height={'5vh'}/>
              </div>
            )}
          </Transition>
      </Section>
    )};

export default SkillsBar;