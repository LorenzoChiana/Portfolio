import React, { Fragment } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import Anchor from 'components/Anchor';
import { Button } from 'components/Button';
import DecoderText from 'components/DecoderText';
import Divider from 'components/Divider';
import Image from 'components/Image';
import Section from 'components/Section';
import { reflow } from 'utils/transition';
import { media } from 'utils/style';
import profileImg from 'assets/profile.png';
import profileImgLarge from 'assets/profile-large.png';
import profileImgPlaceholder from 'assets/profile-placeholder.png';
import './Profile.css';

const ProfileText = ({ status, titleId }) => (
  <Fragment>
    <h2
      className={classNames('profile__title', `profile__title--${status}`)}
      id={titleId}
    >
      <DecoderText text="Hello" start={status !== 'exited'} delay={500} />
    </h2>
    <p className={classNames('profile__description', `profile__description--${status}`)}>
    My name is Lorenzo, I was born in 1995 and I'm currently based in Cesena, Italy.
    I graduated from the bachelor of "Ingegneria e Scienze Informatiche" (Engineering and Computer Science) at the University of Bologna with a {' '}
      <Anchor href="https://amslaurea.unibo.it/15611/1/chiana_lorenzo_tesi.pdf" target="_blank">
        thesis
      </Anchor>
      {' '} on hospital 4.0.
    During my university career, I developed several projects (my {' '}
        <Anchor href="https://github.com/LorenzoChiana" target="_blank">
        GitHub
      </Anchor>
    ) ranging from web development to programming of embedded systems and IoT.
    I am currently continuing my studies and attending the course of "Ingegneria e Scienze Informatiche" (Engineering and Computer Science) also at the University of Bologna, specializing in data science. If you are interested in finding out more about me here is my {' '}
      <Anchor href="/doc/CV_ChianaLorenzo_en.pdf" target="_blank">
        Curriculum Vitae
      </Anchor>
    .
    </p>
  </Fragment>
);

const Profile = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;

  return (
    <Section
      className="profile"
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0} onEnter={reflow}>
        {status => (
          <div className="profile__content">
            <div className="profile__column">
              <ProfileText status={status} titleId={titleId} />
              <Button
                secondary
                className={classNames('profile__button', `profile__button--${status}`)}
                as="a"
                status={status}
                href="mailto:lorenzo.chiana@gmail.com"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className="profile__column">
              <div className="profile__tag" aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={status !== 'entered'}
                  collapseDelay={1000}
                />
                <div
                  className={classNames(
                    'profile__tag-text',
                    `profile__tag-text--${status}`
                  )}
                >
                  About Me
                </div>
              </div>
              <div className="profile__image-wrapper">
                <Image
                  reveal
                  className={classNames(
                    'profile__image',
                    `profile__image--${status}`
                  )}
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};

export default Profile;
