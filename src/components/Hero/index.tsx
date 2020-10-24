import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import 'react-awesome-slider/dist/styles.css';

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

const Hero: React.FC = () => (
  <section className="Hero">
    <AutoplaySlider {...sliderProps}>
      <div data-src={imageOne} />
      <div data-src={imageTwo} />
      <div data-src={imageThree} />
      <div data-src={imageFour} />
    </AutoplaySlider>
    <img src={logo} className="Hero__logo" alt="Logo" />
  </section>
);

export default Hero;
