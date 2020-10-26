import React from 'react';

import { ReactComponent as EmailIcon } from '@assets/img/svg/icon-social-email.svg';
import { ReactComponent as GithubIcon } from '@assets/img/svg/icon-social-github.svg';
import { ReactComponent as LinkedInIcon } from '@assets/img/svg/icon-social-linkedin.svg';
import { ReactComponent as TwitterIcon } from '@assets/img/svg/icon-social-twitter.svg';

import './Footer.css';

const Footer: React.FC = () => (
  <footer className="Footer">
    <div className="Footer__main">
      <div className="grid no-cols">
        <div className="Footer__contact">
          <h3>Find me here:</h3>
          <a href="mailto:sam@linnett.co.uk" title="Email" className="Footer__icon Footer__icon--email">
            <EmailIcon />
          </a>
          <a
            href="https://github.com/linnett/"
            target="_blank"
            rel="noreferrer"
            title="Github"
            className="Footer__icon Footer__icon--github"
          >
            <GithubIcon />
          </a>
          <a
            href="https://uk.linkedin.com/in/samlinnett"
            target="_blank"
            rel="noreferrer"
            title="Linked In"
            className="Footer__icon Footer__icon--linkedin"
          >
            <LinkedInIcon />
          </a>
          <a
            href="http://www.twitter.com/sam_linnett"
            target="_blank"
            rel="noreferrer"
            title="Twitter"
            className="Footer__icon Footer__icon--twitter"
          >
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
    <div className="Footer__bottom">
      <div className="grid no-cols">
        <p>samlinnett.com was created using React with Typescript</p>
      </div>
    </div>
  </footer>
);

export default Footer;
