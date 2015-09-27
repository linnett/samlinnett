'use strict';

// Import the Vendor Specific Scripts e.g. jQuery
import './vendor';

// Import modules
import headerPrimary from './components/headers/header-primary/header-primary';
import videoHero from './components/video-hero/video-hero';

// Import page specific
import pageHome from './pages/page-home/page-home';

// Run the modules
new headerPrimary();
new videoHero();

new pageHome();