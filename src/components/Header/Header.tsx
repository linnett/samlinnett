import React from 'react';

import headerImage from '@assets/img/sam.jpg';

const Header: React.FC = () => (
  <header className="Header Header--transparent">
    <div className="Header__logo">
      <img src={headerImage} />
    </div>
  </header>
);

export default Header;
