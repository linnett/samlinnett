import React from 'react';
import cx from 'classnames';

import headerImage from '@assets/img/sam.jpg';
import './Header.css';

const Header: React.FC<{
  isSticky: boolean;
  hasLoaded: boolean;
}> = ({ isSticky, hasLoaded }) => (
  <header
    className={cx({
      Header: true,
      'Header--transparent': !isSticky,
      'Header--sticky': isSticky,
      'Header--loading': !hasLoaded
    })}
  >
    <div className="Header__imageWrap">
      <img src={headerImage} alt="Sam" />
    </div>
  </header>
);

export default Header;
