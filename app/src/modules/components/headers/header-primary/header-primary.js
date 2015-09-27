/**
 * @class modules.components.headers.header-primary
 *
 * ## Description
 * Example JS File
 *
*/
'use strict';

/**
 * @class headerPrimary
 * @param {object} options - overrides the defaults
 */
class headerPrimary {
    constructor(options) {
        this.defaults = {
            $headerPrimary: $('.header-primary'),
            $window: $(window),
            $body: $('body')
        };

        this.options = $.extend(this.defaults, options);

        this.setAnimations();
        this.setListeners();
    }

    /**
     * Sets animations on the header
     *
     * @method setAnimations
     */
    setAnimations() {
        setTimeout(() => {
            this.options.$headerPrimary.removeClass('header-primary--waiting');
        }, 800);
    }

    /**
     * Sets event listeners relating to the class
     *
     * @method setListeners
     */
    setListeners() {
        this.options.$window.on('scroll', this.checkScrollPos.bind(this));
        this.options.$window.trigger('scroll');
    }

    /**
     * Checks the scroll position and adds applicable classes to body
     *
     * @method checkScrollPos
     */
    checkScrollPos() {
        let scrollPos = this.options.$window.scrollTop();
        this.options.$body.toggleClass('header-primary--sticky', scrollPos > 0);
    }

}

export default headerPrimary;