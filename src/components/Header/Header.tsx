import React from 'react';

import headerImage from '@assets/img/sam.jpg';

const Header: React.FC = () => (
  <header className="Header Header--transparent">
    <div className="Header__imageWrap grid no-cols">
      <img src={headerImage} />
    </div>
  </header>
);

export default Header;
