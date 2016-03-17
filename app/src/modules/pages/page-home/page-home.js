/**
 * @class modules.pages.page.page-home
 *
 * ## Description
 * Home page specific JavaScript
 *
*/
'use strict';

import scrollMonitor from 'scrollMonitor';

/**
 * @class pageHome
 * @param {object} options - overrides the defaults
 */
class pageHome {
    constructor(options) {
        this.defaults = {
            $main: $('main')
        };

        this.options = $.extend(this.defaults, options);

        if(this.options.$main.hasClass('page-home')) {
            this.setWaypoints();
            this.setTriggerPoints()
        }
    }

    /**
     * Sets waypoints variables
     *
     * @method setWaypoints
     */
    setWaypoints() {
        this.intro = scrollMonitor.create(document.querySelector('.page-home__intro'), -200);
        this.skills = scrollMonitor.create(document.querySelector('.page-home__skills'), -200);
        this.companies = scrollMonitor.create(document.querySelector('.page-home__companies'), -200);
        this.portfolio = scrollMonitor.create(document.querySelector('.portfolio'), -200);
    }

    /**
     * Sets triggerpoints for the page and adds class for fade ins
     *
     * @method setWaypoints
     */
    setTriggerPoints() {
        this.intro.enterViewport(() => {
            $('.page-home__intro').addClass('active');
        });
        this.skills.enterViewport(() => {
            $('.page-home__skills').addClass('active');
        });
        this.companies.enterViewport(() => {
            $('.page-home__companies').addClass('active');
        });
        this.portfolio.enterViewport(() => {
            $('.portfolio').addClass('active');
        });
    }
}

export default pageHome;