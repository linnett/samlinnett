/**
 * @class modules.components.video-hero.video-hero
 *
 * ## Description
 * Background video hero
 *
*/
'use strict';

import backgroundVideo from 'backgroundVideo';

/**
 * @class videoHero
 * @param {object} options - overrides the defaults
 */
class videoHero {
    constructor(options) {
        this.defaults = {
            $video: $('.js-video-hero'),
            $videoWrap: $('.js-video-wrap'),
            $videoOuterWrap: $('.js-video-outer'),
            $videoHeroContent: $('.video-hero__content'),
            $window: $(window),
            $html: $('html')
        };

        this.options = $.extend(this.defaults, options);

        // Ensure that the video hero exists and ensure it is not a
        // touch (mobile) device
        if(this.options.$video.length && this.options.$html.hasClass('no-touch')) {
            this.setAnimations();
            this.runBackgroundVideo();
        }
    }

    /**
     * Sets animations on the header
     *
     * @method setAnimations
     */
    setAnimations() {
        setTimeout(() => {
            this.options.$videoHeroContent.removeClass('video-hero__content--waiting');
        }, 1000);
    }

    /**
     * Starts the background video plugin
     *
     * @method runBackgroundVideo
     */
    runBackgroundVideo() {
        this.options.$video.backgroundVideo({
            $outerWrap: this.options.$window,
            $videoWrap: this.options.$videoWrap,
            parallaxOptions: {
                effect: 1.6
            }
        });
    }

}

export default videoHero;