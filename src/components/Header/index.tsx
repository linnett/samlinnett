import React from 'react';
import cx from 'classnames';

import headerImage from '@assets/img/sam.jpg';
import './Header.css';

const Header: React.FC<{
  isSticky: boolean;
}> = ({ isSticky }) => (
  <header
    className={cx({
      Header: true,
      'Header--transparent': !isSticky,
      'Header--sticky': isSticky
    })}
  >
    <div className="Header__imageWrap grid no-cols">
      <img src={headerImage} alt="Sam" />
    </div>
  </header>
);

export default Header;
