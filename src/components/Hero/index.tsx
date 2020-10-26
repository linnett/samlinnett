import React from 'react';
import cx from 'classnames';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import 'react-awesome-slider/dist/styles.css';

import { ReactComponent as DownArrow } from '@assets/img/svg/icon-arrow-up.svg';
import imageOne from '@assets/img/hero/1.jpg';
import imageTwo from '@assets/img/hero/2.jpg';
import imageThree from '@assets/img/hero/3.jpg';
import imageFour from '@assets/img/hero/4.jpg';
import logo from '@assets/img/hero/samlinnett.png';
import './Hero.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const sliderProps = {
  play: true,
  cancelOnInteraction: false,
  interval: 3000,
  bullets: false,
  organicArrows: false,
  fillParent: true,
  loaderBar: false,
  animation: 'foldOutAnimation'
};

const Hero: React.FC<{ hasLoaded: boolean }> = ({ hasLoaded }) => (
  <section className="Hero">
    <AutoplaySlider {...sliderProps}>
      <div data-src={imageOne} />
      <div data-src={imageTwo} />
      <div data-src={imageThree} />
      <div data-src={imageFour} />
    </AutoplaySlider>

    <img
      src={logo}
      alt="Logo"
      className={cx({
        Hero__logo: true,
        'Hero__logo--loading': !hasLoaded
      })}
    />

    <div
      className={cx({
        'Hero__down-arrow': true,
        'Hero__down-arrow--loading': !hasLoaded
      })}
    >
      <DownArrow />
    </div>
  </section>
);

export default Hero;
