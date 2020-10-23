import React from 'react';

import { ReactComponent as EmailIcon } from '@assets/img/svg/icon-social-email.svg';
import { ReactComponent as GithubIcon } from '@assets/img/svg/icon-social-github.svg';
import { ReactComponent as LinkedInIcon } from '@assets/img/svg/icon-social-linkedin.svg';
import { ReactComponent as TwitterIcon } from '@assets/img/svg/icon-social-twitter.svg';

import './PageHomeIntro.css';

const PageHomeIntro: React.FC = () => (
  <section className="PageHomeIntro">
    <div className="grid no-cols">
      <h1>
        I am <span className="color-text--red">Sam Linnett</span>
      </h1>
      <h2>Tech Lead</h2>
    </div>
    <div className="PageHomeIntro__social">
      <div className="grid">
        <a href="mailto:sam@linnett.co.uk" title="Email" className="PageHomeIntro__icon PageHomeIntro__icon--email">
          <EmailIcon />
        </a>
        <a
          href="https://github.com/linnett/"
          target="_blank"
          rel="noreferrer"
          title="Github"
          className="PageHomeIntro__icon PageHomeIntro__icon--github"
        >
          <GithubIcon />
        </a>
        <a
          href="https://uk.linkedin.com/in/samlinnett"
          target="_blank"
          rel="noreferrer"
          title="Linked In"
          className="PageHomeIntro__icon PageHomeIntro__icon--linkedin"
        >
          <LinkedInIcon />
        </a>
        <a
          href="http://www.twitter.com/sam_linnett"
          target="_blank"
          rel="noreferrer"
          title="Twitter"
          className="PageHomeIntro__icon PageHomeIntro__icon--twitter"
        >
          <TwitterIcon />
        </a>
      </div>
    </div>
    <div className="PageHomeIntro__intro">
      <div className="grid no-cols">
        <p>
          I am a full-stack Technical Lead with over 12 years of professional experience as a developer in a range of
          web and mobile programming languages, predominantly JavaScript. I have significant experience working in both
          creative/digital agencies as well as in-house organisations.
        </p>
        <p>
          JavaScript, React Native, React, Node, TypeScript, GraphQL, AWS, Microservices, OOP, CircleCI, Jest, Agile,
          UX.
        </p>
      </div>
    </div>
  </section>
);

export default PageHomeIntro;
