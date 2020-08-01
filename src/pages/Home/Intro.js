import React, { Suspense, lazy, Fragment } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import DecoderText from 'components/DecoderText';
import { useWindowSize, useAppContext } from 'hooks';
import { reflow } from 'utils/transition';
import prerender from 'utils/prerender';
import { media } from 'utils/style';
import { ReactComponent as ArrowDown } from 'assets/arrow-down.svg';
import { tokens } from 'app/theme';
import Section from 'components/Section';
import './Intro.css';

const DisplacementSphere = lazy(() => import('pages/Home/DisplacementSphere'));

function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const { theme } = useAppContext();
  const windowSize = useWindowSize();
  
  const titleId = `${id}-title`;

  return (
    <Section
      className="intro"
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
    >
      <Transition
        key={theme.themeId}
        appear={!prerender}
        in={!prerender}
        timeout={3000}
        onEnter={reflow}
      >
        {status => (
          <Fragment>
            {!prerender && (
              <Suspense fallback={null}>
                <DisplacementSphere />
              </Suspense>
            )}
            <header className="intro__text">
              <h1
                className={classNames('intro__name', `intro__name--${status}`)}
                id={titleId}
              >
                <DecoderText text="Lorenzo Chiana" start={!prerender} delay={300} />
              </h1>
              <h2 className="intro__title">
                <span className="intro__title-label">{`Computer Engineer`}</span>
                <span
                  aria-hidden
                  className={classNames('intro__title-row', {
                    'intro__title-row--hidden': prerender,
                  })}
                >
                  <span
                    className={classNames(
                      'intro__title-word',
                      `intro__title-word--${status}`
                    )}
                    style={{ '--delay': tokens.base.durationXS }}
                  >
                    Computer Engineer
                  </span>
                  <span
                    className={classNames(
                      'intro__title-line',
                      `intro__title-line--${status}`
                    )}
                  />
                </span>
              </h2>
            </header>
            {windowSize.width > media.tablet && (
              <div
                className={classNames(
                  'intro__scroll-indicator',
                  `intro__scroll-indicator--${status}`,
                  { 'intro__scroll-indicator--hidden': scrollIndicatorHidden }
                )}
                status={status}
              />
            )}
            {windowSize.width <= media.tablet && (
              <div
                className={classNames(
                  'intro__mobile-scroll-indicator',
                  `intro__mobile-scroll-indicator--${status}`,
                  { 'intro__mobile-scroll-indicator--hidden': scrollIndicatorHidden }
                )}
              >
                <ArrowDown aria-hidden />
              </div>
            )}
          </Fragment>
        )}
      </Transition>
    </Section>
  );
}

export default Intro;
